import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
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
  const loginwithuser = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleLogin = () => {
    setLoader(true);
    return signInWithPopup(auth, gooleProvider);
  };
  const logout = () => {
    setLoader(true);
    return signOut(auth);
  };
  const updateuser = (person, name, photourl) => {
    setLoader(true);
    return updateProfile(person, {
      displayName: name,
      photoURL: photourl,
    })
      .then(() => {
        console.log("user upate");
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
   
      setPerson(currentUser);
      setLoader(false);
      if(currentUser){
        fetch("https://toys-store-js-server.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-teype": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("jwt response", data);
            localStorage.setItem("accessToken", data.token);
          });
      }
      return () => {
        return unsubscribe();
      };
    });
  }, []);
  const authInfo = {
    loader,
    setLoader,  
    person,
    setPerson,
    createNewProfile,
    logout,
    googleLogin,
    loginwithuser,
    updateuser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
