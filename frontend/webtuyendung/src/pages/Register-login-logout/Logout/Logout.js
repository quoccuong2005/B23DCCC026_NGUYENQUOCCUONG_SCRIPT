import { deleteAllCookies } from "../../../helpers/cookies";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { checkLogin } from "../../../actions/checkAuthen";
function Logout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  deleteAllCookies();
  useEffect(() => {
    dispatch(checkLogin(false));
    navigate("/");
  }, []);
  return <></>;
}
export default Logout;
