import "./Library.scss";
import { BiLibrary } from "react-icons/bi";

const Library = () => {
  return (
    <div className="page library">
      <div className="placeholder">
        <BiLibrary className="placeholder_illustration" />
        <span className="placeholder_txt">Library is empty</span>
      </div>
    </div>
  );
};

export default Library;
