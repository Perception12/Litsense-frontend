import type { UserInfo } from "@/lib/data_models";
import FileDropZone from "./FileDropZone";
import { useState, useEffect } from "react";
import { runInference } from "@/api";
import type { InferenceResult } from "@/lib/data_models";
import { Spinner } from "./ui/spinner";
import DescriptionDialog from "./DescriptionDialog";

const IdentifyPage = ({ userInfo }: { userInfo: UserInfo }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isRunningInference, setIsRunningInference] = useState(false);
  const [inferenceResult, setInferenceResult] =
    useState<InferenceResult | null>(null);

  useEffect(() => {
    console.log("Inference result state:", inferenceResult);
  }, [inferenceResult]);

  const handleRunInference = async () => {
    if (!selectedFile) {
      alert("Please select a file before running inference.");
      return;
    }

    setIsRunningInference(true);
    const response = await runInference({ userInfo, selectedFile });
    const data = response.data;
    data.book_information = JSON.parse(data.book_information);
    data.recommendation = JSON.parse(data.recommendation);
    setInferenceResult(data);
    setIsRunningInference(false);
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

        <button
          onClick={handleRunInference}
          disabled={isRunningInference}
          className={`w-fit flex items-center gap-2 self-end bg-primary text-white border border-transparent px-4 py-2 rounded-sm cursor-pointer hover:bg-bluewhite hover:text-black hover:border-primary transition-all duration-300`}
        >
          {isRunningInference ? <Spinner /> : ""}
          Run Inference
        </button>

        {inferenceResult && (
          <div className="flex flex-col gap-6 mt-4 p-4 border rounded-sm border-secondary">
            <h2 className="text-xl font-bold">
              {inferenceResult.book_information.title}
            </h2>

            <div className="w-full flex">
              <DescriptionDialog
                title={inferenceResult.book_information.title}
                description={inferenceResult.book_information.description}
              />
            </div>

            <div className="flex gap-2 items-center w-full flex-wrap">
              {inferenceResult.book_information.genres.map((genre) => (
                <div
                  key={genre}
                  className="px-2 py-1 text-xs bg-green-200 w-fit rounded-sm"
                >
                  {genre}
                </div>
              ))}
            </div>
            <div className="flex gap-2 items-center w-full flex-wrap">
              {inferenceResult.book_information.authors.map((author) => (
                <div className="px-2 py-1 text-xs bg-yellow-200 w-fit rounded-sm">
                  {author}
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <strong>Fit with Preferences:</strong>{" "}
              {inferenceResult.recommendation.fit_with_preferences
                ? <p className="text-green-700 font-bold" >Yes</p>
                : <p className="text-red-700 font-bold">No</p>}
            </div>
            <p className="">
              <strong>Match Score:</strong>{" "}
              {inferenceResult.recommendation.match_score}
            </p>

            <div className="flex flex-col gap-2 bg-primary-light-hover p-2 rounded-sm border border-secondary">
              <strong>Reason for Fit:</strong>{" "}
              
              {inferenceResult.recommendation.reason_for_fit}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default IdentifyPage;
