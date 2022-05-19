import "./authentication.style.scss";
import SignUpForm from "../../Component/signup-forum/signup-forum-component";
import SignIn from "../../Component/signIn-forum/signIn-forum-component";
const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignIn />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
