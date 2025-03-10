import { useEffect, useState } from "react";
import { logOut } from "../../Framework/utils/constant";
import { useUserLogout } from "../../Framework/login";
import { useUI } from "../../context/ui.context";

interface AutoLogoutProps {
  timeout?: number; // Timeout in milliseconds (default: 5 minutes)
}

const AutoLogout: React.FC<AutoLogoutProps> = ({ timeout = 300000 }) => {
    const {userData} = useUI();
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
  
  const resetTimer = () => {
    if (timer) clearTimeout(timer); // Clear previous timer
    setTimer(setTimeout(logout, timeout)); // Set new timeout
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
      if (timer) clearTimeout(timer);
    };
  }, []);

  return null; // This component doesn’t render anything
};

export default AutoLogout;
