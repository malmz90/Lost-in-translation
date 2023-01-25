import { useForm } from "react-hook-form";

const TranslationsForm = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
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
            <button type="submit">Translation</button>
        </form>
    );
};
export default TranslationsForm;
