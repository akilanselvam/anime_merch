import { useState } from "react";
import Inputform from "../input-form/input-form.component";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import "./signup-form.style.scss";
const defaultformFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignupForm = () => {
  const [formFields, setformFields] = useState(defaultformFields);
  //console.log(formFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const resetformFields = () => {
    setformFields(defaultformFields);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("password do not match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(user);
      await createUserDocumentFromAuth(user, { displayName });
      resetformFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot Create user with existing Email");
      }
      console.log("there was an error encountered here", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setformFields({ ...formFields, [name]: value });
  };
  return (
    <div>
      <h2>Don't have an account?</h2>
      <span>Signup with your Email and Password</span>
      <form onSubmit={handleSubmit}>
        <Inputform
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />
        <Inputform
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <Inputform
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <Inputform
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignupForm;
