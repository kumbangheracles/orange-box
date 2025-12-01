"use client";

import TotalAmount from "./TotalAmount";
import AutoRefresh from "./AutoRefresh";
import About from "./About";
import { useState } from "react";
import { Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
interface PropTypes {
  dataV1?: string;
  dataV2?: number;
  dataV3?: number;
  dataV4?: number;
}
const AllSection = ({}: PropTypes) => {
  const dummyAnorganik = {
    "08/11/2025": 45,
    "09/11/2025": 60,
    "15/11/2025": 72,
    "01/12/2025": 50,
    "02/12/2025": 30,
  };

  const dummyOrganik = {
    "08/11/2025": 65,
    "09/11/2025": 40,
    "15/11/2025": 90,
    "01/12/2025": 55,
    "02/12/2025": 18,
  };

  const allDates = Object.keys(dummyAnorganik);
  const [selectedDate, setSelectedDate] = useState(allDates[0]);

  const items = allDates.map((date) => ({ key: date, label: date }));

  const onDateSelect = (info: { key: string }) => {
    setSelectedDate(info.key);
  };

  return (
    <div className="p-4">
      <AutoRefresh />

      <div className="flex w-full justify-center">
        <Dropdown menu={{ items, onClick: onDateSelect }}>
          <div className="py-1 px-2 w-fit rounded-md mt-5 bg-tyrel-low text-white font-semibold text-sm cursor-pointer flex gap-2">
            <span>Last Update: {selectedDate}</span>
            <DownOutlined />
          </div>
        </Dropdown>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mt-4 sm:h-[394px]">
        <TotalAmount
          jenisSampah="anorganik"
          dummyData={dummyAnorganik}
          selectedDate={selectedDate}
        />

        <TotalAmount
          jenisSampah="organik"
          dummyData={dummyOrganik}
          selectedDate={selectedDate}
        />
      </div>

      <div className="p-4 border-2 border-orange-400 bg-white rounded-lg mt-2">
        <About />
      </div>
    </div>
  );
};

export default AllSection;
