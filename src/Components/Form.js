import Google from "../assets/icons8-google.svg";
import Apple from "../assets/icons8-apple.svg";

export const Form = () => {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="flex mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign In
          </h2>
          <p className="flex">Sign in to your account </p>
        </div>

        <div className="mt-4 flex justify-center items-center">
          <button className="mr-5 bg-white text-xs text-slate-950 py-2 px-3 rounded-md font-semibold hover:text-slate-600 flex items-center">
            <img src={Google} alt="" width={40} className="mr-2" />
            <span>Sign in with Google</span>
          </button>

          <button className="ml-4 bg-white text-xs text-slate-950 py-2 px-3 rounded-md font-semibold hover:text-slate-600 flex items-center">
            <img src={Apple} alt="" width={40} className="mr-2" />
            <span>Sign in with Apple</span>
          </button>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-white p-6 rounded">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <div className="flex">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-2 bg-slate-200 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2 mb-3">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-2 bg-slate-200 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="text-sm flex">
                <a
                  href="/"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Don't have an account?{" "}
            <a
              href="/"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Register Here
            </a>
          </p>
        </div>
      </div>
    </>
  );
};
