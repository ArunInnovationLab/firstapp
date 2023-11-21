import useConsoleLog from "./CustomHook";
import CustomHook2 from "./CustomHook2";

export default function UseCustomHook() {
  useConsoleLog("hello console!");

  return <CustomHook2 />;
}
