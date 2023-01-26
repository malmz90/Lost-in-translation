import { useForm } from "react-hook-form";

const TranslationsForm = ({ onTranslation }) => {
    const { register, handleSubmit } = useForm();

    const onSubmit = ({ translationNotes }) => {
        onTranslation(translationNotes);
    };

    return (
        <form
            className="bg-white w-full flex flex-row rounded-lg  "
            onSubmit={handleSubmit(onSubmit)}
        >
            <input
                className="bg-white text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 outline-none"
                placeholder="Type in a word"
                type="text"
                {...register("translationNotes")}
            ></input>
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
