"use client";

import useClientBlynk from "@/hooks/useClientBlynk";
import AllSection from "@/components/AllSection";

interface Props {
  initialV1: string;
  initialV2: number;
  initialV3: number;
}

export default function ClientDashboard({
  initialV1,
  initialV2,
  initialV3,
}: Props) {
  const { v1, v2, v3 } = useClientBlynk({
    initialV1,
    initialV2,
    initialV3,
  });

  return <AllSection dataV1={v1} dataV2={v2} dataV3={v3} />;
}
