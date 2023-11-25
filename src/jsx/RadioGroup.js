import React, { useState } from "react";
import toast from "react-hot-toast";

export const RadioOption = ({ children, checked, onChange, value }) => {
  return (
    <div>
      <input
        id={value}
        type="radio"
        name={value}
        value={value}
        checked={checked}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
      <label htmlFor={value}>{children}</label>
    </div>
  );
};

export const RadioGroup = ({ children, selected, onChange }) => {
  const RadioOptions = React.Children.map(children, (child) => {
    return React.cloneElement(child, {
      onChange,
      checked: child.props.value === selected,
    });
  });

  return <div>{RadioOptions}</div>;
};

function RadioGroupComponent() {
  const [selected, setSelected] = useState("");
  const handleSubmit = () => {
    toast.success(selected);
  };
  return (
    <div>
      <h1>How did you hear about Little Lemon?</h1>
      {/* <input type="radio" id="radio1" value="kd" name="group1" />
      <input type="radio" id="radio2" value="skjd" name="group1" />
      <input type="radio" id="radio3" value="ksdjk" name="group1" /> */}
      <RadioGroup onChange={setSelected} selected={selected}>
        <RadioOption value="social media">social media</RadioOption>
        <RadioOption value="friends">friends </RadioOption>
        <RadioOption value="advertising">advertising</RadioOption>
      </RadioGroup>

      <button disabled={!selected} type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default RadioGroupComponent;
