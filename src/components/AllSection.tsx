"use client";
import { RightCircleOutlined } from "@ant-design/icons";
import CardSummary from "./CardSummary";
import AppLayout from "./Layout";
import TotalAmount from "./TotalAmount";
import dynamic from "next/dynamic";

interface PropTypes {
  dataV1?: string;
  dataV2?: number;
  dataV3?: number;
  dataV4?: number;
}

const Map = dynamic(() => import("../components/Map"), {
  ssr: false,
});

const dataSumm = [
  {
    id: 1,
    title: "Organik",
    icon: <RightCircleOutlined />,
    totalData: 68,
  },
  {
    id: 2,
    title: "Anorganik",
    icon: <RightCircleOutlined />,
    totalData: 72,
  },
  {
    id: 3,
    title: "Organik",
    icon: <RightCircleOutlined />,
    totalData: 120,
  },
];

const AllSection = ({ dataV2, dataV3 }: PropTypes) => {
  //
  return (
    <AppLayout>
      <div className="p-4">
        <div className="grid grid-cols-3 lg:flex gap-2 lg:gap-4  ">
          {/* {Array.from({ length: 3 }, (_, index) => {
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
          })} */}

          {dataSumm.map((item) => {
            const delay = 100 + Math.floor(item.id / 3) * 50;

            return (
              <CardSummary
                key={item.id}
                title={item.title}
                totalData={item.totalData}
                icon={<RightCircleOutlined />}
                dataAos="fade-right"
                delay={delay}
              />
            );
          })}
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mt-4 sm:h-[394px]">
          <TotalAmount jenisSampah="anorganik" dataAmount={dataV2 ?? 0} />
          <TotalAmount jenisSampah="organik" dataAmount={dataV3 ?? 0} />
        </div>
        <div className="p-4 border-2 border-orange-400 bg-white rounded-lg mt-2">
          <Map />
        </div>
      </div>
    </AppLayout>
  );
};

export default AllSection;
