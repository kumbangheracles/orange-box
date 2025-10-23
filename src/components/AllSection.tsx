"use client";
import { RightCircleOutlined } from "@ant-design/icons";
import CardSummary from "./CardSummary";
import AppLayout from "./Layout";
import Temperature from "./Temperature";
import TotalAmount from "./TotalAmount";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("../components/Map"), {
  ssr: false,
});
const AllSection = () => {
  //
  return (
    <AppLayout>
      <div className="p-4">
        <div className="grid grid-cols-3 lg:flex gap-2 lg:gap-4  ">
          {Array.from({ length: 3 }, (_, index) => {
            const delay = 100 + Math.floor(index / 3) * 50;

            return (
              <CardSummary
                key={index}
                title={`Temperature ${index + 1}`}
                totalData={2000}
                icon={<RightCircleOutlined />}
                dataAos="fade-right"
                delay={delay}
              />
            );
          })}
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mt-4 sm:h-[394px]">
          <Temperature />
          <TotalAmount />
        </div>
        <div className="p-4 border-2 border-orange-400 bg-white rounded-lg mt-2">
          <Map />
        </div>
      </div>
    </AppLayout>
  );
};

export default AllSection;
