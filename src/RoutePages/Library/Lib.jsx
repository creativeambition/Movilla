import "./Lib.scss";
import { BiLibrary } from "react-icons/bi";

const Lib = () => {
  return (
    <div className="page lib">
      <div className="placeholder">
        <BiLibrary className="placeholder_illustration" />
        <span className="placeholder_txt">Library is empty</span>
      </div>
    </div>
  );
};

export default Lib;
