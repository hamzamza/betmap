import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./context/authContext";
function Protectedroute({ children }) {
  const Navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const gologin = () => {
    Navigate("/login");
  };
  useEffect(() => {
    if (!user) {
      gologin();
    }
    if (user && !user.username) {
      gologin();
    }
  }, [user]);
  return children;
}

export default Protectedroute;
