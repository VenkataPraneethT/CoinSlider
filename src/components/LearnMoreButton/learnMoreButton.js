import { ArrowRightIcon } from "@heroicons/react/outline";

const LearnMoreBtn = () => {
  return (
    <span className="tracking-wider uppercase inline-flex items-center gap-2 font-bold p-2 -m-2 hover:bg-blue/5 hover:text-blue/80 rounded leading-none text-xs w-full text-left my-4 text-indigo-500 cursor-pointer ">
      Learn more
      <ArrowRightIcon
        className="ml-4 h-4 w-4 inline-block"
        aria-hidden="true"
      />
    </span>
  );
};

export default LearnMoreBtn;
