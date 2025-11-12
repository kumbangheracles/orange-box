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
  // const dataSumm = [
  //   {
  //     id: 1,
  //     title: "Organik",
  //     icon: <RightCircleOutlined />,
  //     totalData: dataV3 as number,
  //     isMap: false,
  //   },
  //   {
  //     id: 2,
  //     title: "Anorganik",
  //     icon: <RightCircleOutlined />,
  //     totalData: dataV4 as number,
  //     isMap: false,
  //   },
  // ];
  return (
    <div className="p-4">
      <AutoRefresh />
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

        {/* {dataSumm.map((item) => {
          const delay = 100 + Math.floor(item.id / 3) * 50;

          return (
            <CardSummary
              key={item.id}
              title={item.title}
              totalData={
                item.isMap
                  ? (item.totalData as unknown as string)
                  : Number.isNaN(Number(item?.totalData)) ||
                    item?.totalData == null
                  ? 0
                  : Number(item.totalData)
              }
              isMap={item.isMap}
              icon={<RightCircleOutlined />}
              dataAos="fade-right"
              delay={delay}
            />
          );
        })} */}
      </div>
      <div className="flex flex-col sm:flex-row gap-4 mt-4 sm:h-[394px]">
        <TotalAmount
          jenisSampah="anorganik"
          dataAmount={Number.isNaN(dataV4) ? 0 : 75}
        />
        <TotalAmount
          jenisSampah="organik"
          dataAmount={Number.isNaN(dataV3) ? 0 : 57}
        />
      </div>
      <div className="p-4 border-2 border-orange-400 bg-white rounded-lg mt-2">
        <About />
      </div>
    </div>
  );
};

export default AllSection;
