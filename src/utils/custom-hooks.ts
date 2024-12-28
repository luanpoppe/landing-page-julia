import { useEffect } from "react";
import { handleAnimation } from "./animate";
import { handleOverflow } from "./handle-overflow";
import { useLocation } from "react-router-dom";

export function useCustomLoadPage() {
  const location = useLocation();
  return useEffect(() => {
    handleAnimation();

    window.removeEventListener("resize", () =>
      handleOverflow(location.pathname)
    );
    window.addEventListener("resize", () => handleOverflow(location.pathname));
    handleOverflow(location.pathname);
  }, []);
}
