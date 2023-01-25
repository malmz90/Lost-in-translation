import { useForm } from "react-hook-form";

const TranslationsForm = ({ onTranslation }) => {
    const { register, handleSubmit } = useForm();

    const onSubmit = ({ translationNotes }) => {
        console.log("yolo", translationNotes);
        onTranslation(translationNotes);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
                <label htmlFor="translations-notes">Translations notes</label>
                <input
                    placeholder="Type in a word"
                    type="text"
                    {...register("translationNotes")}
                ></input>
            </fieldset>
            <button
                className="bg-pink-200 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded m-2"
                type="submit"
            >
                Translation
            </button>
        </form>
    );
};
export default TranslationsForm;
