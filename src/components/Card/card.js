import LearnMoreBtn from "../LearnMoreButton/learnMoreButton";

const Card = ({ src, name, description }) => {
  return (
    <>
      <div
        aria-hidden="true"
        className="rounded-lg overflow-hidden group-hover:opacity-75 card-image"
      >
        <img
          src={src}
          alt={name}
          className=" rounded-lg  w-full h-full object-center object-cover "
        />
      </div>
      <h3 className="mt-4 text-base font-semibold text-gray-900 w-full text-left min-h-50">
        {name}
      </h3>
      <p className="mt-2 text-sm sm:text-lg  text-gray-500 text-left w-full min-h-150">
        {description}
      </p>
      <LearnMoreBtn />
    </>
  );
};

export default Card;
