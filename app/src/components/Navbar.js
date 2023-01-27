import { storageDelete } from "../utils/storage";
import { STORAGE_KEY_USER } from "../const/storageKeys";
import { useUser } from "../context/UserContext";
import NavbarMenu from "./NavbarMenu";

const Navbar = () => {
    const { user, setUser } = useUser();

    const handleLogoutClick = () => {
        if (window.confirm("Do you want to logout?")) {
            storageDelete(STORAGE_KEY_USER);
            setUser(null);
        }
    };
    console.log(user.username);
    return (
        <div className="text-start border-b-2 flex flex-ro justify-between">
            <h1 className="ml-10 text-4xl font-bold text-white mb-2 font-caveat ">
                Lost in translation
            </h1>

            {user && (
                <div className="flex flex-row">
                    <p className="mt-3 mr-1 font-bold text-white mb-2 font-caveat">
                        {user.username}
                    </p>
                    <NavbarMenu handleLogoutClick={handleLogoutClick} />{" "}
                </div>
            )}
        </div>
    );
};

export default Navbar;
