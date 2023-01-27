import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const NavbarMenu = ({ handleLogoutClick }) => {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    //Todo find a better way to navigate these 2 pages.
    const handleNavigate = () => {
        if (pathname === "/translations") {
            navigate("/profile");
        } else {
            navigate("/translations");
        }
    };

    return (
        <div className="flex mr-20 mt-1">
            <button className="relative flex focus:outline-none text-gray-600 rounded focus:ring  group">
                <span className="">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="pink"
                        className="w-10 h-10"
                    >
                        <path
                            fillRule="evenodd"
                            d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                            clipRule="evenodd"
                        />
                    </svg>
                </span>
                <div className="absolute top-full hidden min-w--full w-max group-focus:block bg-white shadow-md mt-1 rounded transition">
                    <ul className="text-left border rounded">
                        <li
                            onClick={handleNavigate}
                            className="px-4 py-1 hover:bg-gray-100 border-b"
                        >
                            {pathname === "/profile"
                                ? "Translations"
                                : "Profile"}
                        </li>

                        <li
                            onClick={handleLogoutClick}
                            className="px-4 py-1 hover:bg-gray-100"
                        >
                            {" "}
                            Logout
                        </li>
                    </ul>
                </div>
            </button>
        </div>
    );
};
export default NavbarMenu;
