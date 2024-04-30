import { PhotoIcon } from "@/components/icons";

export default function FileNote() {
  return (
    <label
      htmlFor="files"
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
              htmlFor="files"
              className="relative cursor-pointer rounded-md bg-white font-semibold text-primary focus-within:outline-none focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 hover:text-secondary"
            >
              <span>Upload a file</span>
              <input
                id="files"
                name="files"
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
  );
}
