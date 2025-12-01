"use client";
// import { RightCircleOutlined } from "@ant-design/icons";
// import CardSummary from "./CardSummary";
import TotalAmount from "./TotalAmount";
// import dynamic from "next/dynamic";
// import { useEffect } from "react";
// import { useRouter } from "next/navigation";
import AutoRefresh from "./AutoRefresh";
import About from "./About";
interface PropTypes {
  dataV1?: string;
  dataV2?: number;
  dataV3?: number;
  dataV4?: number;
}

// const Map = dynamic(() => import("../components/Map"), {
//   ssr: false,
// });

const AllSection = ({ dataV4, dataV3, dataV1 }: PropTypes) => {
  // Dummy berbeda untuk organik & anorganik
  const dummyAnorganik = {
    "08/11/2025": 45,
    "09/11/2025": 60,
    "15/11/2025": 72,
    "01/12/2025": 50,
  };

  const dummyOrganik = {
    "08/11/2025": 65,
    "09/11/2025": 40,
    "15/11/2025": 90,
    "01/12/2025": 55,
  };

  return (
    <div className="p-4">
      <AutoRefresh />

      <div className="flex flex-col sm:flex-row gap-4 mt-4 sm:h-[394px]">
        <TotalAmount
          jenisSampah="anorganik"
          dummyData={dummyAnorganik}
          dataAmount={Number.isNaN(dataV4) ? 0 : 75}
        />
        <TotalAmount
          jenisSampah="organik"
          dummyData={dummyOrganik}
          dataAmount={Number.isNaN(dataV3) ? 0 : 75}
        />
      </div>

      <div className="p-4 border-2 border-orange-400 bg-white rounded-lg mt-2">
        <About />
      </div>
    </div>
  );
};

export default AllSection;
