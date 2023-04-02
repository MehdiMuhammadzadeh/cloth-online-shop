import SignupForm from "../../components/sign-up-form/SignupForm";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
  const userDocRef = await createUserDocumentFromAuth(user)
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign In with Google Popup</button>

      <SignupForm />
    </div>
  );
};

export default SignIn;
