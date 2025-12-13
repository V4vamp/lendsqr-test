export interface SignUp {
  email: string;
  password: string;
}

export interface Login {
  email: string;
  password: string;
}

export interface LoginResponse {
  data: {
    access_token: string;
    token_type: string;
  };
  message: string;
}

export interface TokenResponse {
  access_token: string;
  token_type: string;
}

export interface UserResponse {
  id: number;
  email: string;
}


export interface Guarantor {
  fullName: string;
  phone: string;
  email: string;
  relationship: string;
}

export interface Education {
  level: string;
  employmentStatus: string;
  sector: string;
  duration: string;
  officeEmail: string;
  monthlyIncome: string;
  loanRepayment: number;
}

export interface Account {
  balance: string;
  accountNumber: number;
  bankName: string;
}

export interface Profile {
  fullName: string;
  avatar: string;
  phone: string;
  bvn: number;
  gender: string;
  maritalStatus: string;
  children: string;
  residence: string;
}

export interface Socials {
  twitter: string;
  facebook: string;
  instagram: string;
}

export interface User {
  id: string;
  organization: string;
  username: string;
  email: string;
  phone?: string;
  dateJoined: string;
  status: 'Active' | 'Inactive' | 'Pending' | 'Blacklisted';
  tier: number;
  account: Account;
  profile: Profile;
  education: Education;
  socials: Socials;
  guarantors: Guarantor[];
}
