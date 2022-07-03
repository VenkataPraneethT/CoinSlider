import Button from "../Button/button";
import LoopAnimationIcon from "../LoopAnimation/loopAnimation";

const DisclaimerPage = () => {
  return (
    <div
      className="relative md:flex md:flex-row justify-center block md:pt-0 h-[500px] md:h-auto align-center overflow-hidden"
      style={{ backgroundColor: "#081424" }}
    >
      <div className="flex flex-col  md:w-1/3 justify-center md:mx-16 my-4 md:my-0 md:mt-0 items-center">
        <h1 className="w-full text-center text-3xl p-2 text-white">
          Disclaimer
        </h1>
        <Button btnName="Legal Information" className="inline-block" />
      </div>
      <div className="md:rotate-0 md:block hidden">
        <LoopAnimationIcon />
      </div>
      <div className="md:hidden rotate-90 absolute w-320px overflow-hidden bottom-24">
        <LoopAnimationIcon  />
      </div>
    </div>
  );
};
export default DisclaimerPage;
