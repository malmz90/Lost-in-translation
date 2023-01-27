import { Link } from "react-router-dom";
import { clearTranslationHistory } from "../api/translation";
import { STORAGE_KEY_USER } from "../const/storageKeys";
import { useUser } from "../context/UserContext";
import { storageSave } from "../utils/storage";
const ProfileActions = () => {
    const { user, setUser } = useUser();

    const handleClearHistoryClick = async () => {
        if (!window.confirm("Confirm clear histroy")) {
            return;
        }
        const [clearError] = await clearTranslationHistory(user.id);

        if (clearError !== null) {
            return;
        }

        const updatedUser = {
            ...user,
            translations: [],
        };
        storageSave(STORAGE_KEY_USER, updatedUser);
        setUser(updatedUser);
    };

    return (
        <ul>
            <li>
                {user.translations.length !== 0 && (
                    <button
                        onClick={handleClearHistoryClick}
                        className="bg-pink-200 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded m-2"
                    >
                        Clear history
                    </button>
                )}
            </li>
        </ul>
    );
};
export default ProfileActions;
