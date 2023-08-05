import Image from "next/image";
import React from "react";

interface IconProps {
  src: string;
  alt: string;
  showNotification?: boolean;
}

export default function Icon({ src, alt, ...props }: IconProps) {
  return (
    <div className="flex items-center justify-center opacity-80 rounded-3xl border border-slate-300 border-opacity-40 px-3 hover:cursor-pointer relative">
      {props.showNotification && (
        <div className="absolute top-0 right-0 w-[11px] h-[11px] bg-red-500 rounded-full" />
      )}

      <Image src={src} alt={alt} width={24} height={24} />
    </div>
  );
}
