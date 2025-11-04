"use client";

import { cn } from "@/lib/cn";
import { ReactNode } from "react";

export interface PropTypesSumm {
  title: string;
  totalData: number | string;
  icon: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  dataAos?: string;
  delay?: number;
  dataMap?: string;
  isMap?: boolean;
}

const CardSummary = ({
  title,
  totalData,
  icon,
  className,
  style,
  dataAos,
  delay,
  isMap,
}: PropTypesSumm) => {
  return (
    <div
      data-aos={dataAos}
      data-aos-delay={delay}
      className={`p-2 sm:p-4 rounded-lg flex items-center bg-white border-2 border-orange-400 gap-4 w-[100%] relative sm:w-full ${className}`}
      style={style}
    >
      <div className="absolute right-1 top-1 sm:right-3 sm:top-3 text-[8px] sm:text-xl">
        {icon}
      </div>
      <div className="p-2 flex flex-col gap-2">
        <span className=" text-[12px] sm:text-sm font-semibold tracking-wider">
          {title}
        </span>
        <span
          className={`${cn(isMap ? "text-[10px] sm:text-xl" : "text-xl")} `}
        >
          {totalData}
        </span>
      </div>
    </div>
  );
};

export default CardSummary;
