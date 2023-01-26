import ProfileTranslationHistoryItem from "./ProfileTranslationHistoryItem";

const ProfileTranslationHistory = ({ translations }) => {
    const translationList = translations.map((translation, index) => (
        <ProfileTranslationHistoryItem
            key={index + "-" + translation}
            translation={translation}
        />
    ));
    return (
        <section>
            <h4>Your translations history</h4>

            <ul>{translationList}</ul>
            {translationList.length === 0 && <p> You have no orders yet</p>}
        </section>
    );
};
export default ProfileTranslationHistory;
