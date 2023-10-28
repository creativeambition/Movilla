import "./Profile.scss";
import profile_src from "../../assets/profile.jpg";
import { FiEdit3 } from "react-icons/fi";

import { useContext } from "react";
import { SharedContext } from "../../SharedContext";

const Profile = () => {
  const { ShowProfile, mobileView } = useContext(SharedContext);

  return (
    <div
      className={`profile_info ${mobileView && "mobile_profile"} ${
        ShowProfile && "show"
      }`}
    >
      <img src={profile_src} alt="" />

      <div className="username">
        <span>creativeambition</span>
        <FiEdit3 className="action_icon" />
      </div>

      <span className="email">ca@io.dev</span>

      <button>Log out</button>
    </div>
  );
};

export default Profile;
