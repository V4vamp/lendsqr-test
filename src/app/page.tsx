"use client";

import styles from "./page.module.scss";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const router = useRouter();
  return (
    <div className={styles.page}>
      <h1>Welcome</h1>
      <p>to</p>
      <Image src={"/images/logo.png"} alt="lendsqr" width={144} height={30} />
      <button onClick={() => router.push("/dashboard/users")}>
        Go to Dashboard
      </button>
    </div>
  );
}
