import withAuth from "../hoc/withAuth";
import ProfileActions from "./ProfileActions";
import ProfileHeader from "./ProfileHeader";
import ProfileTranslationHistory from "./ProfileTranslationHistory";
import { useUser } from "../context/UserContext";
const Profile = () => {
    const { user } = useUser();

    return (
        <div className="h-screen">
            <div> Profile</div>
            <ProfileHeader username={user.username} />

            <ProfileTranslationHistory translations={user.translations} />
            <ProfileActions />
        </div>
    );
};
export default withAuth(Profile);
