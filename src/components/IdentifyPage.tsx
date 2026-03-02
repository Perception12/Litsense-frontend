import { Upload_Icon } from "../assets/icons";

const IdentifyPage = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 w-full">
      <div className=" flex flex-col w-full max-w-150 gap-4">
        <div className="flex flex-col items-center justify-center p-4 gap-2 border rounded-lg border-dashed border-primary cursor-pointer bg-bluewhite  hover:bg-primary-light transition-all duration-200 w-full h-60 mx-auto ">
          <img src={Upload_Icon} className="w-8 h-8" alt="upload icon" />
          <p className="text-sm">Upload book cover</p>
        </div>
        <button className="w-fit self-end bg-primary text-white px-4 py-2 rounded-sm cursor-pointer hover:bg-bluewhite hover:text-black hover:border hover:border-primary transition-all duration-300  ">
          Run Inference
        </button>
      </div>
    </div>
  );
};

export default IdentifyPage;
