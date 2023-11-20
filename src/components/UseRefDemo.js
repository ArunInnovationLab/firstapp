import { useRef } from "react";

export default function UseRefDemo() {
  const first = useRef(0);

  function focusInput() {
    first.current.focus();
  }

  return (
    <>
      <input type="text" ref={first} />
      <button onClick={focusInput}>focus input</button>
    </>
  );
}
