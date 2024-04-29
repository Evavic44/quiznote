import Link from "next/link";

type ButtonType = {
  theme?: string;
  text: string;
  icon?: React.ReactNode;
  className?: string;
  url: string;
};

export default function Button({
  theme,
  text,
  icon,
  className,
  url,
}: ButtonType) {
  return (
    <Link
      href={url}
      className={`flex items-center justify-between text-center gap-x-2 font-medium px-4 py-2 rounded-xl border duration-200 ${
        theme === "primary"
          ? "bg-primary text-white hover:bg-secondary border-transparent"
          : theme === "light"
          ? "border-zinc-300 bg-white text-zinc-700 hover:bg-primary hover:text-white hover:border-transparent"
          : "bg-zinc-900 text-white hover:bg-zinc-800 border-transparent"
      } ${className}`}
    >
      {text} {icon && icon}
    </Link>
  );
}
