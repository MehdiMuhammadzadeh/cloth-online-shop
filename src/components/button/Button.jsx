import "./Button.scss";
const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};
const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;

/*
we have 3 kinds of button in our project to style them
we have to do something with the class

These are 3 button types we have 
1. default 
2. inverted 
3.google sign in

*/
