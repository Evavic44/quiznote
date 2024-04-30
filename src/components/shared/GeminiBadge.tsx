import Link from "next/link";
import React from "react";
import { GeminiIcon } from "../icons/Gemini";

export default function GeminiBadge() {
  return (
    <div className="flex items-center justify-center text-center my-28">
      <Link
        href="https://gemini.google.com/"
        target="_blank"
        rel="noreferrer noopener"
        className="gap-3 rounded-xl text-sm text-zinc-600"
      >
        <p>Powered by</p>
        <GeminiIcon />
      </Link>
    </div>
  );
}
