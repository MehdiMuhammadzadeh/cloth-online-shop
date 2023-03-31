import React from "react";
import { signInWihGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase";

const SignIn = () => {
  const logGoogleUser = async () => {
    const {user} = await signInWihGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sing In page!</h1>
      <button onClick={logGoogleUser}>Sign In With Google Popup</button>
    </div>
  );
};

export default SignIn;
