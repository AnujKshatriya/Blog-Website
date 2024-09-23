"use client";
import { signIn, useSession } from "next-auth/react";
import styles from "./loginPage.module.css";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const { data,status } = useSession();
  console.log(data)

  const router = useRouter();

  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (status === "authenticated") {
    router.push("/")
  }

  // Adding a catch block for error handling
  const handleGoogleSignIn = async () => {
    try {
      await signIn("google");
      console.log("trying to fetch...")
    } catch (error) {
      console.error("Error during sign-in:", error); // Log the error
    }
  };
  
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.socialButton} onClick={handleGoogleSignIn}>
          Sign in with Google
        </div>
        <div className={styles.socialButton}>Sign in with Github</div>
        <div className={styles.socialButton}>Sign in with Facebook</div>
      </div>
    </div>
  );
};

export default LoginPage;