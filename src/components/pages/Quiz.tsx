export default function Quiz({
  alpha,
  text,
  id,
  answer,
}: {
  alpha: string;
  text: string;
  id: number;
  answer: string;
}) {
  return (
    <label
      htmlFor={alpha}
      className="flex items-center justify-between w-full gap-x-6 max-w-xl mx-auto bg-zinc-100 rounded-full px-4 py-3 font-geistmono cursor-pointer min-h-16"
    >
      <div className="min-w-8 min-w-h-8 grid place-content-center rounded-full font-medium bg-white">
        {alpha}
      </div>{" "}
      <p className="select-none text-sm text-zinc-700">{text}</p>
      <input
        id={alpha}
        name="option"
        type="radio"
        value={alpha}
        onChange={(e) => console.log(e.target.value)}
        className="ml-auto self-center h-4 w-4 rounded-full text-primary focus:ring-transparent border-gray-300"
      />
    </label>
  );
}
