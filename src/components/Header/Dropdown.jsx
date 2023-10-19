import { useSelector } from "react-redux";
import ProfileIcon from "../../assets/profileicon.png";
import PropTypes from "prop-types";
import { signOut } from "firebase/auth";
import auth from "../../utils/firebase";

const DropDown = ({ showDropDown, control }) => {
  const { user } = useSelector((state) => state.auth);

  const handelSignOut = () => {
    signOut(auth).then((res) => {
      console.log(res);
    });
  };
  return (
    <div className="relative">
      <div
        className="flex items-center whitespace-nowrap rounded bg-primary  transition duration-150 ease-in-out cursor-pointer"
        onClick={control}
      >
        <img
          src={user?.photoUrl || ProfileIcon}
          alt=""
          className="w-8 h-8 rounded-full  ring-1 ring-[#00D991]"
        />
      </div>
      <ul
        className={`absolute z-[1000] float-left m-0 w-3 min-w-max list-none overflow-hidden rounded-lg border-none bg-white border border-color-border bg-clip-padding text-left text-base shadow-sm shadow-black  mt-3 ${
          showDropDown ? "block" : "hidden"
        } `}
        aria-labelledby="dropdownMenuSmallButton"
      >
        {user?.displayName && (
          <li>
            <span className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal  hover:bg-color-background hover:text-color-white  cursor-pointer">
              {user.displayName}
            </span>
          </li>
        )}
        <li onClick={handelSignOut}>
          <span className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal  hover:bg-color-background hover:text-color-white  cursor-pointer">
            Logout
          </span>
        </li>
      </ul>
    </div>
  );
};

DropDown.propTypes = {
  showDropDown: PropTypes.bool,
  control: PropTypes.func,
};

export default DropDown;
