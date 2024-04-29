import React from "react";
import { PhotoIcon } from "@/components/icons";

export default function FileUpload() {
  return (
    <div>
      <label
        htmlFor="file-upload"
        className="block mb-4 text-sm font-medium text-zinc-600"
      >
        Upload File
      </label>
      <div className="mt-2 flex justify-center rounded-lg border border-dashed border-zinc-300 px-6 py-10">
        <div className="text-center">
          <PhotoIcon
            className="font-geistmono mx-auto h-10 w-10 text-zinc-300"
            aria-hidden={true}
          />
          <div className="mt-4 flex text-sm leading-6 text-zinc-600">
            <label
              htmlFor="file-upload"
              className="relative cursor-pointer rounded-md bg-white font-semibold text-primary focus-within:outline-none focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 hover:text-secondary"
            >
              <span>Upload a file</span>
              <input
                id="file-upload"
                name="file-upload"
                type="file"
                className="sr-only"
              />
            </label>
            <p className="pl-1">or drag and drop</p>
          </div>
          <p className="text-xs leading-5 text-zinc-600">
            PNG, JPG, PDF up to 7MB
          </p>
        </div>
      </div>
    </div>
  );
}
