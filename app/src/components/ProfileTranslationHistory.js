import ProfileTranslationHistoryItem from "./ProfileTranslationHistoryItem";

const ProfileTranslationHistory = ({ translations }) => {
    const translationList = translations.map((translation, index) => (
        <ProfileTranslationHistoryItem
            key={index + "-" + translation}
            translation={translation}
        />
    ));
    return (
        <section className="text-white">
            <h4 className="text-4xl font-bold text-white mb-2 font-caveat">
                Your translations history
            </h4>

            <ul>{translationList}</ul>
            {translationList.length === 0 && (
                <p className="text-xl"> You have no translations yet</p>
            )}
        </section>
    );
};
export default ProfileTranslationHistory;
