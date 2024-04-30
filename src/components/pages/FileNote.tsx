import React from "react";
import { PhotoIcon } from "@/components/icons";

export default function FileNote() {
  return (
    <>
      <label htmlFor="subject" className="block mb-3">
        <span className="block text-sm font-semibold text-zinc-600 mb-2">
          Topic
        </span>
        <input
          type="text"
          id="subject"
          placeholder="Object-oriented programming in Java"
          className="font-geistmono appearance-none w-full p-3 border border-zinc-200 placeholder-zinc-400 text-zinc-700 rounded-md focus:outline-none focus:ring-zinc-300 text-sm"
        />
      </label>

      <label
        htmlFor="file-upload"
        className="block mb-4 text-sm font-medium text-zinc-600 cursor-pointer"
      >
        Upload Note
        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-zinc-300 px-6 py-10 h-56">
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
                  required
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
      </label>
    </>
  );
}
