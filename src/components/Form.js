import { useEffect, useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    console.log("Form submitted!");
  };

  useEffect(()=>{
    document.title = "Form"
  })
  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <div className="Field">
          <label htmlFor="name">Name: </label>
          <input
            id="name"
            type="text"
            placeholder="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="Field">
          <label htmlFor="email">email: </label>
          <input
            id="email"
            type="email"
            placeholder="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button disabled={!name || !email} type="submit">
          submit
        </button>
      </fieldset>
    </form>
  );
}
