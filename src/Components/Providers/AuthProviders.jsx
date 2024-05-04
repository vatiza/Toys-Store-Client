import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.config";

const auth = getAuth(app);
export const AuthContext = createContext();
const gooleProvider = new GoogleAuthProvider();
const AuthProviders = ({ children }) => {
  const [person, setPerson] = useState(null);
  const [loader, setLoader] = useState(true);
  const createNewProfile = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const googleLogin=()=>{
    return signInWithPopup(auth,gooleProvider)
  }
  const logout = () => {
    setLoader(true);
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setPerson(currentUser);
      setLoader(false);
      return () => {
        return unsubscribe();
      };
    });
  }, []);
  const authInfo = {
    person,
    setPerson,
    createNewProfile,
    logout,
    googleLogin
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
