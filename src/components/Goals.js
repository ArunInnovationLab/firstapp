import React, { useEffect, useState } from "react";

function GoalForm(props) {
  const [formData, setFormData] = useState({ goal: "", by: "" });

  function changeHandler(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log("form data goal : " + formData.goal);
    console.log("form data by : " + formData.by);
  }

  function submitHandler(e) {
    e.preventDefault();
    props.onAdd(formData);
    setFormData({ goal: "", by: "" }); // Clear form fields
  }

  return (
    <>
      <h1>My little lemon goals</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="goal"
          placeholder="Goal"
          value={formData.goal}
          onChange={changeHandler}
        />

        <input
          type="text"
          name="by"
          placeholder="By..."
          value={formData.by}
          onChange={changeHandler}
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
}

function ListOfGoals(props) {
  return (
    <>
      <div>List of goals</div>
      <ul>
        {props.allGoals.map((g) => (
          <li key={g.goal}>
            <span>
              my goal is to {g.goal}, by {g.by}{" "}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default function Goals() {
  const [allGoals, updateAllGoals] = useState([]);

  useEffect(()=>{
    document.title = "Goals"
  })

  function addGoal(goal) {
    updateAllGoals([...allGoals, goal]);
  }

  return (
    <div>
      <GoalForm onAdd={addGoal} />
      <ListOfGoals allGoals={allGoals} />
    </div>
  );
}
