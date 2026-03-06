import React, { useState, useRef } from "react";
import type { DragEvent, ChangeEvent } from "react";
import { Upload_Icon } from "../assets/icons";

const FileDropZone = ({
  selectedFile,
  setSelectedFile,
}: {
  selectedFile: File | null;
  setSelectedFile: React.Dispatch<React.SetStateAction<File | null>>;
}) => {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFiles = (selectedFiles: FileList | null) => {
    if (selectedFiles && selectedFiles.length > 0) {
      setSelectedFile(selectedFiles[0]);
    }
  };

  // 1. Click to open file dialog
  const openFileDialog = () => {
    fileInputRef.current?.click();
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault(); // Prevent browser default
    setIsDragging(true);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault(); // Prevent browser default
    setIsDragging(false);
    handleFiles(e.dataTransfer.files);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleFiles(e.target.files);
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={() => setIsDragging(false)}
      onDrop={handleDrop}
      onClick={openFileDialog}
      className="flex flex-col items-center justify-center p-4 gap-2 border rounded-lg border-dashed border-primary cursor-pointer bg-bluewhite  hover:bg-primary-light-hover transition-all duration-200 w-full h-60 mx-auto "
    >
      <img src={Upload_Icon} className="w-8 h-8" alt="upload icon" />

      {isDragging ? (
        <p className="text-sm">Release to upload your book cover</p>
      ) : (
        <p className="text-sm">Drop your book cover here or browse</p>
      )}

      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        onChange={handleChange}
      />

      {selectedFile && (
        <div className="mt-4 w-full flex items-center justify-start flex-col">
          <h3 className="text-sm font-semibold text-primary mb-2">
            Selected File:
          </h3>
          <div className="bg-bluewhite p-2 rounded-sm shadow-sm border border-primary border-dashed text-sm text-primary">
            {selectedFile.name}
          </div>
        </div>
      )}
    </div>
  );
};

export default FileDropZone;
