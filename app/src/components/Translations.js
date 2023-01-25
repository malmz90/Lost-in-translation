import withAuth from "../hoc/withAuth";
import TranslationButton from "./TranslationsButton";
import TranslationsForm from "./TranslationsForm";

const Translations = () => {
    return (
        <div className="h-screen">
            <h1>Translations</h1>
            <section id="translations-notes">
                <TranslationsForm />
            </section>
            <section id="translation-options">
                <TranslationButton
                    name="a"
                    image="images\a.png"
                    key="a"
                ></TranslationButton>
                <TranslationButton
                    name="b"
                    image="images/b.png"
                    key="b"
                ></TranslationButton>
                <TranslationButton
                    name="c"
                    image="images/c.png"
                    key="c"
                ></TranslationButton>
                <TranslationButton
                    name="d"
                    image="images/d.png"
                    key="d"
                ></TranslationButton>
            </section>
        </div>
    );
};

export default withAuth(Translations);
