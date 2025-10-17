"use client";
import useDeviceType from "@/hooks/useDeviceType";
const listView = () => {
  const isXSM = useDeviceType(325);
  const isESM = useDeviceType(425);
  const isSM = useDeviceType(640);
  const isMD = useDeviceType(768);
  const isLG = useDeviceType(1024);
  const isXL = useDeviceType(1280);
  return {
    isSM,
    isESM,
    isXSM,
    isMD,
    isLG,
    isXL,
  };
};

export default listView;
