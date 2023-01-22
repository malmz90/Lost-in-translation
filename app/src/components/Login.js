const Login = () => {
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
              action="#"
            >
              <input
                className="bg-white text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 outline-none"
                placeholder="What´s your username?"
                required=""
              />
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded m-2">
                Button
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
