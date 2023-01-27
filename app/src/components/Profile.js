import withAuth from "../hoc/withAuth";
import ProfileActions from "./ProfileActions";
import ProfileHeader from "./ProfileHeader";
import ProfileTranslationHistory from "./ProfileTranslationHistory";
import { useEffect } from "react";
import { useUser } from "../context/UserContext";
import { userById } from "../api/user";
import { storageSave } from "../utils/storage";
import { STORAGE_KEY_USER } from "../const/storageKeys";
const Profile = () => {
    const { user, setUser } = useUser();

    useEffect(() => {
        const findUser = async () => {
            const [error, latestUser] = await userById(user.id);
            if (error === null) {
                storageSave(STORAGE_KEY_USER, latestUser);
                setUser(latestUser);
            }
        };
        findUser();
    }, [setUser, user.id]);

    return (
        <div className="h-screen flex flex-col items-center ">
            <ProfileHeader username={user.username} />

            <ProfileTranslationHistory translations={user.translations} />
            <ProfileActions />
        </div>
    );
};
export default withAuth(Profile);
