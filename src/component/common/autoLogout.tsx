import { useEffect, useRef } from "react";
import { logOut } from "../../Framework/utils/constant";
import { useUI } from "../../context/ui.context";

interface AutoLogoutProps {
  timeout?: number; // Timeout in milliseconds (default: 5 minutes)
}

const AutoLogout: React.FC<AutoLogoutProps> = ({ timeout = 180000 }) => {
  const { userData } = useUI();
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimer = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (timeout > 0) {
      timerRef.current = setTimeout(() => logout(), timeout);
    }
  };

  const logout = () => {
    alert("Session expired due to inactivity. Logging out...");
    logOut(userData?.UserName);
  };

  useEffect(() => {
    resetTimer(); // Start initial timer

    const events: (keyof WindowEventMap)[] = ["mousemove", "keydown", "scroll", "click"];
    events.forEach((event) => window.addEventListener(event, resetTimer));

    return () => {
      events.forEach((event) => window.removeEventListener(event, resetTimer));
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [timeout, userData]); // Add timeout and userData as dependencies

  return null; // This component does not render anything
};

export default AutoLogout;