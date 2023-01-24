import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { loginUser } from "../api/user";
import { storageSave } from "../utils/storage";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { STORAGE_KEY_USER } from "../const/storageKeys";
const usernameConfig = {
    required: true,
    minLength: 3,
};

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const { user, setUser } = useUser();
    const navigate = useNavigate();

    useEffect(() => {
        if (user !== null) {
            navigate("/translations");
        }
    }, [user]);

    const [loading, setLoading] = useState(false);
    const [apiError, setApiError] = useState(null);

    const onSubmit = async ({ username }) => {
        setLoading(true);
        const [error, userResponse] = await loginUser(username);
        if (error !== null) {
            setApiError(error);
        }
        if (userResponse !== null) {
            storageSave(STORAGE_KEY_USER, userResponse);
            setUser(userResponse);
        }
        setLoading(false);
    };

    const errorMessage = (() => {
        if (!errors.username) {
            return null;
        }
        if (errors.username.type === "required") {
            return <span>Username is required</span>;
        }
        if (errors.username.type === "minLength") {
            return <span>Username is to short (min 2 characters)</span>;
        }
    })();

    return (
        <div className="grid place-items-center h-screen">
            <div className="sm:w-4/5 md:w-3/5 lg:w-2/5">
                <h1 className="text-4xl font-bold text-white mb-2 font-caveat ">
                    Get started by logging in
                </h1>
                <div className="bg-gray-200 dark:bg-gray-900 rounded-lg ">
                    <div className="flex flex-col items-center justify-center px-10 py-8 h-32 ">
                        <form
                            className="bg-white w-full flex flex-row rounded-lg  "
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <input
                                className="bg-white text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 outline-none"
                                placeholder="What´s your username?"
                                type="text"
                                {...register("username", usernameConfig)}
                                disabled={loading}
                            />

                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded m-2"
                                type="submit"
                            >
                                Button
                            </button>
                        </form>
                        {errorMessage}
                        {loading && <p>Logging in...</p>}
                        {apiError && <p>{apiError}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
