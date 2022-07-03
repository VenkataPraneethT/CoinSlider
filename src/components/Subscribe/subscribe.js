import Button from "../Button/button";

export default function Subscribe() {
  return (
    <div className="w-full">
      <div className="relative py-10 bg-gradient-to-r from-green-900 to-indigo-900 overflow-hidden shadow-xl sm:px-12 sm:py-12 px-8 text-center">
        <div className="relative">
          <div className="sm:text-center">
            <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl text-center">
              Subscribe to Hatome newsletter
            </h2>
            <p className="mt-2 mx-auto max-w-2xl text-lg text-indigo-200 text-center">
            Subscribe to our newsletter and stay updated on the latest developments.
            </p>
          </div>
          <form action="#" className="mt-6 sm:mx-auto sm:max-w-lg sm:flex mb-6">
            <div className="relative w-full py-1">
              <input
                type="search"
                id="search"
                className="block p-4 pl-4 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter your email"
                required
              />
              <Button
                btnName="Subscribe"
                className="md:absolute md:right-2.5 md:bottom-1.5 hidden md:block"
              />
            </div>
            <Button btnName="Subscribe" className="md:hidden m-auto mt-4" />
          </form>
        </div>
      </div>
    </div>
  );
}
