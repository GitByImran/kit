import React, { createContext, useContext, useState } from "react";
import app from "../../../firebase.config";
import {
  UserCredential,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
const auth = getAuth(app);

interface User {
  uid: string | null;
  email: string | null;
  displayName: string | null;
  photoURL?: string | null;
}

export const AuthContext = createContext<{
  user: User | null;
  handleSignUp: (
    email: string,
    password: string,
    name: string,
    imageUrl: string
  ) => void;
  handleSignIn: (email: string, password: string) => void;
  handleSignOut: () => void;
  currentUser: User | undefined;
}>({
  user: null,
  handleSignUp: () => {},
  handleSignIn: () => {},
  handleSignOut: () => {},
  currentUser: undefined,
});
export const UseAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useNewsContext must be used within an AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState(null);
  const [currentUser, setCurrentUser] = useState<User | undefined>(undefined);
  const router = useRouter();

  const handleSignUp = (
    email: string,
    password: string,
    name: string,
    imageUrl: string
  ) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);

        const userProperties = {
          uid: user.uid,
          email: user.email || email,
          displayName: name,
          photoURL: imageUrl,
        };
        return updateProfile(user, userProperties);
      })
      .catch((error) => {
        console.log(error.code, error.message);
      });
  };

  const handleSignIn = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential: UserCredential) => {
        const loggedUser = userCredential.user;
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Login successfull!",
          showConfirmButton: false,
          timer: 1500,
        });
        setCurrentUser(loggedUser);
        router.push("/");
        console.log(loggedUser);
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Invalid email/password, try again!",
        });
        console.error("Error signing in:", error);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setCurrentUser(undefined);
        console.log("Sign-out successful");
      })
      .catch((error) => {
        console.error("An error happened:", error);
      });
  };

  const authShare = {
    user,
    handleSignUp,
    handleSignIn,
    handleSignOut,
    currentUser,
  };
  return (
    <AuthContext.Provider value={authShare}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
