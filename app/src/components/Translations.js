import withAuth from "../hoc/withAuth";
import TranslationButton from "./TranslationsImage";
import TranslationsForm from "./TranslationsForm";
import { useState } from "react";
import { useUser } from "../context/UserContext";
import { translationAdd } from "../api/translation";
import { storageSave } from "../utils/storage";
import { STORAGE_KEY_USER } from "../const/storageKeys";
import TranslationsImage from "./TranslationsImage";

const TRANSLATIONS = [
    {
        id: 1,
        name: "a",
        image: "images/a.png",
    },
    {
        id: 2,
        name: "b",
        image: "images/b.png",
    },
];

const Translations = () => {
    const [translation, setTranslation] = useState(null);
    const { user, setUser } = useUser();

    const handleInput = async (userInput) => {
        // Check that userinput only contains characters of a-z and is not empty.
        if (!/^[a-z]+$/i.test(userInput)) {
            return alert(
                "Translation can't be empty and only allows characters a-z"
            );
        }
        setTranslation([...userInput.toLowerCase().replace(/[^a-zA-Z]/g, "")]);

        const [error, updatedUser] = await translationAdd(user, userInput);
        if (error !== null) {
            return;
        }
        storageSave(STORAGE_KEY_USER, updatedUser);
        setUser(updatedUser);
    };

    return (
        <div className="flex flex-col h-screen items-center">
            <div className="mt-10 mb-10 sm:w-4/7 md:w-3/6 lg:w-2/6 ml-2 mr-2">
                <div className="bg-gray-200 dark:bg-gray-900 rounded-lg ">
                    <div className="flex flex-col items-center justify-center px-10 py-8 h-32 ">
                        <TranslationsForm onTranslation={handleInput} />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-4 gap-4">
                {translation &&
                    translation.map((translation, i) => (
                        <div key={i + "-" + translation}>
                            <img
                                className="w-20 h-15"
                                src={`images/${translation}.png`}
                                alt=""
                            />
                        </div>
                    ))}
            </div>
        </div>
    );
};
export default withAuth(Translations);
