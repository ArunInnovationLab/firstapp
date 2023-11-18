import { useEffect, useState } from "react";

const PasswordErrorMessage = () => {
  return (
    <p className="FieldError">Password should have at least 8 characters</p>
  );
};

export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(()=>{
    document.title = "Sign Up"
  })

  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [role, setRole] = useState("role");

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const getIsFormValid = () => {
    // Implement this function
    return (
      firstName &&
      lastName &&
      validateEmail(email) &&
      password.value.length > 8 &&
      role !== "role"
    );
  };

  const clearForm = () => {
    // Implement this function

    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword({ value: "", isTouched: false });
    setRole("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created!");
    clearForm();
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Sign Up</h2>
          <div className="Field">
            <label>
              First name <sup>*</sup>
            </label>
            <input
              value={firstName}
              placeholder="First name"
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="Field">
            <label>Last name</label>
            <input
              value={lastName}
              placeholder="Last name"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="Field">
            <label>
              Email address <sup>*</sup>
            </label>
            <input
              value={email}
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
            {validateEmail(email) ? "" : "Enter valid email ID"}
          </div>

          <div className="Field">
            <label>
              Password <sup>*</sup>
            </label>
            <input
              value={password.value}
              placeholder="Password"
              onChange={(e) =>
                setPassword({ ...password, value: e.target.value })
              }
              onFocus={() => {
                setPassword({ ...password, isTouched: true });
              }}
              onBlur={() => {
                setPassword({ ...password, isTouched: false });
              }}
            />
            {password.isTouched && password.value.length < 8 ? (
              <PasswordErrorMessage />
            ) : null}
          </div>
          <div className="Field">
            <label>
              Role <sup>*</sup>
            </label>
            <select onChange={(e) => setRole(e.target.value)} value={role}>
              <option value="role">Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>
          <button type="submit" disabled={!getIsFormValid()}>
            Create account
          </button>
          <button type="button" onClick={clearForm}>
            Clear
          </button>
        </fieldset>
      </form>
    </div>
  );
}
