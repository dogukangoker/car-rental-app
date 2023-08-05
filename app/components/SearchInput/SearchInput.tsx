import React from "react";
import Image from "next/image";

export default function SearchInput({
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="relative w-full">
      <Image
        src="/search-normal.svg"
        alt="search"
        width={24}
        height={24}
        className="absolute top-1/2 transform -translate-y-1/2 left-4"
      />

      <input
        className="w-full h-[48px] px-16 bg-white rounded-3xl border border-slate-300 border-opacity-40
            placeholder:text-justify placeholder:text-slate-500 placeholder:text-sm placeholder:font-medium placeholder:leading-tight
              "
        {...props}
      />
      <Image
        src="/filter.svg"
        alt="filter"
        width={24}
        height={24}
        className="absolute top-1/2 transform -translate-y-1/2 right-4"
      />
    </div>
  );
}
