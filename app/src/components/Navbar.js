import { storageDelete } from "../utils/storage";
import { STORAGE_KEY_USER } from "../const/storageKeys";
import { useUser } from "../context/UserContext";

const Navbar = () => {
    const { user, setUser } = useUser();

    const handleLogoutClick = () => {
        if (window.confirm("Do you want to logout?")) {
            storageDelete(STORAGE_KEY_USER);
            setUser(null);
        }
    };
    console.log("test,", user);
    return (
        <div className="text-start border-b-2 flex flex-ro justify-between">
            <h1 className="ml-10 text-4xl font-bold text-white mb-2 font-caveat ">
                Lost in translation
            </h1>
            {user && (
                <button
                    className="bg-pink-200 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded m-2"
                    onClick={handleLogoutClick}
                >
                    Logout
                </button>
            )}
        </div>
    );
};

export default Navbar;
