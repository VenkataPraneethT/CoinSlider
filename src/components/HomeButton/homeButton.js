const { Link } = require("react-router-dom");

const HomeButton = () => {
  return (
    <Link to="/">
      <button
        type="button"
        className="inline-flex items-center px-4 py-2 border border-green-500 text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-green-900 to-black-900 hover:bg-green-900 focus:outline-none"
      >
        App
      </button>
    </Link>
  );
};

export default HomeButton;
