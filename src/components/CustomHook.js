import { useEffect } from "react";

export default function useConsoleLog(data) {
  useEffect(() => {
    console.log(data);
  });
}
