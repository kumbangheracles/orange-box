"use client";

import { ReactNode } from "react";

interface PropTypes {
  title: string;
  totalData: number;
  icon: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  dataAos?: string;
  delay?: number;
}

const CardSummary = ({
  title,
  totalData,
  icon,
  className,
  style,
  dataAos,
  delay,
}: PropTypes) => {
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
        <span className=" text-[8px] sm:text-sm">{title}</span>
        <span className="text-xl font-bold">{totalData}</span>
      </div>
    </div>
  );
};

export default CardSummary;
