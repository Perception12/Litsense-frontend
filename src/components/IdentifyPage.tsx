import type { UserInfo } from "@/lib/data_models";
import FileDropZone from "./FileDropZone";
import { useState } from "react";
import { runInference } from "@/api";

const IdentifyPage = ({ userInfo }: { userInfo: UserInfo }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleRunInference = async () => {
    if (!selectedFile) {
      alert("Please select a file before running inference.");
      return;
    }

    const response = await runInference({ userInfo, selectedFile });
    
    console.log(response);
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 w-full">
      <div className=" flex flex-col w-full max-w-150 gap-4">
        <h1 className="text-2xl font-bold text-primary">Identify A Book</h1>
        <p>Discover if a book fits your reading preferences</p>

        <FileDropZone
          selectedFile={selectedFile}
          setSelectedFile={setSelectedFile}
        />

        <button onClick={handleRunInference} className="w-fit self-end bg-primary text-white px-4 py-2 rounded-sm cursor-pointer hover:bg-bluewhite hover:text-black hover:border hover:border-primary transition-all duration-300  ">
          Run Inference
        </button>
      </div>
    </div>
  );
};

export default IdentifyPage;
