"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./page.module.scss";
import Link from "next/link";
import { Login } from "@/types/types";
import { getStoredUser, saveSession } from "@/utils/auth";
import { generateAuthToken } from "@/utils/authToken";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );
  const [error, setError] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
    let error = "";
    if (name === "email") {
      if (!value) {
        error = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        error = "Email is invalid";
      }
    }
    if (name === "password") {
      if (!value) {
        error = "Password is required";
      } else if (value.length < 6) {
        error = "Password must be at least 6 characters";
      }
    }
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const isValid =
    loginData.email && loginData.password && !errors.email && !errors.password;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isValid) return;
    const user = getStoredUser();

    if (!user) {
      setError("No account found. Please sign up.");
      return;
    }

    if (
      user.email !== loginData.email ||
      user.password !== loginData.password
    ) {
      setError("Invalid email or password");
      return;
    }

    const token = generateAuthToken();

    saveSession({
      user: {
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
      },
      token,
    });

    router.push("/dashboard");
  };
  return (
    <div className={styles.loginPage}>
      <section className={styles.pageImage}>
        <div className={styles.logoContainer}>
          <Image src={"/images/logo.png"} alt="lendsqr logo" fill />
        </div>
        <div className={styles.backgroundImage}>
          <Image src={"/images/bg-image.png"} alt="bg-image" fill />
        </div>
      </section>
      <section className={styles.formArea}>
        <form action="">
          <h1>Welcome!</h1>
          <p>ENter your detials to login</p>

          <label htmlFor="email">
            <input type="text" name="email" />
          </label>
          <label htmlFor="password">
            <input type="password" name="password" />
          </label>
        </form>
      </section>
    </div>
  );
};

export default Page;
