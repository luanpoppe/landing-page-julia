import { useEffect } from "react";
import { handleAnimation } from "./animate";
import { handleOverflow } from "./handle-overflow";
import { useLocation } from "react-router-dom";

export function useCustomLoadPage() {
  const location = useLocation();
  return useEffect(() => {
    handleAnimation();
    if (location.pathname == "/contact" && window.innerWidth < 768) {
      const form = document.getElementById("get-in-touch");
      form?.scrollIntoView();
    }

    window.removeEventListener("resize", () =>
      handleOverflow(location.pathname)
    );
    window.addEventListener("resize", () => handleOverflow(location.pathname));
    handleOverflow(location.pathname);

    return () =>
      window.removeEventListener("resize", () =>
        handleOverflow(location.pathname)
      );
  }, []);
}
