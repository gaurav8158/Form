import { Avatar } from "@mui/material";
import "./Homepage.css";
import LogoutIcon from "@mui/icons-material/Logout";
import Usercard from "./Usercard";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();
  const userinfo = JSON.parse(localStorage.getItem("data"));
  const userRemove = () => {
    localStorage.clear();
    if (localStorage.getItem("data") === null) {
      navigate("/");
    }
  };
  return (
    <div className="homepage-container">
      <nav className="nav-bar">
        <div className="homepage">Homepage</div>
        <div className="nav-right">
          <div className="user">
            <Avatar src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286" />
            <div>{`${userinfo?.firstname?.toUpperCase()} `}</div>
          </div>

          <div onClick={userRemove}>
            <LogoutIcon />
          </div>
        </div>
      </nav>
      <div>
        <h1>
          Welcome {`${userinfo.firstname} ${userinfo.lastname}`.toUpperCase()}
          ...
        </h1>
        <Usercard userinfo={userinfo} />
      </div>
      <Footer />
    </div>
  );
};
export default Homepage;
