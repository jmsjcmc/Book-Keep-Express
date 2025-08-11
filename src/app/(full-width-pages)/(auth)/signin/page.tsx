import SignInForm from "@/components/auth/SignInForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Keep | Sign In",
  description: "This is the Sign In page for Book Keep",
};

export default function SignIn() {
  return <SignInForm />;
}
