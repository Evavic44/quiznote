import { SpinnerIcon } from "../icons";
import FormField from "../pages/FormField";

export default function Loading() {
  return (
    <FormField>
      <div className="flex items-center gap-x-2">
        <SpinnerIcon className="animate-spin" />
        <h2 className="font-semibold tracking-tight text-zinc-600">
          Generating Quiz. 🙂
        </h2>
      </div>
    </FormField>
  );
}
