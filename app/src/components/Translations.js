import withAuth from "../hoc/withAuth";
import TranslationButton from "./TranslationsButton";
import TranslationsForm from "./TranslationsForm";
import { useState } from "react";
import { useUser } from "../context/UserContext";
import { translationAdd } from "../api/translation";

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
    const { user } = useUser();

    const handleTranslationImageClicked = (translationId) => {
        setTranslation(
            TRANSLATIONS.find((translation) => translation.id === translationId)
        );
    };

    const handleInput = async (notes) => {
        let replaceNotes = notes.replace(/[^a-z]/g, "");
        console.log([...replaceNotes]);

        if (!translation) {
            alert("plz enter something to translate");
            return;
        }

        const translationOrder = (translation.name + " " + notes).trim();
        console.log(translationOrder);

        const [error, result] = await translationAdd(user, translationOrder);
        console.log("Error", error);
        console.log("Result", result);
    };

    const availableTranslations = TRANSLATIONS.map((translation) => {
        return (
            <TranslationButton
                key={translation.id}
                translation={translation}
                onSelect={handleTranslationImageClicked}
            />
        );
    });

    return (
        <div className="h-screen">
            <h1>Translations</h1>
            <section id="translations-notes">
                <TranslationsForm onTranslation={handleInput} />
            </section>
            <section id="translation-options">{availableTranslations}</section>
            <h5>Summary</h5>
            {translation && <p>Selected translation: {translation.name} </p>}
        </div>
    );
};

export default withAuth(Translations);
