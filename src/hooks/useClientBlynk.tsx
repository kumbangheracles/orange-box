"use client";

import axiosBlynk from "@/lib/axiosBylink";
import { useState, useEffect } from "react";

interface UseClientBlynkProps {
  initialV1: string;
  initialV2: number;
  initialV3: number;
  initialV4: number;
}

function useClientBlynk({
  initialV1,
  initialV2,
  initialV3,
  initialV4,
}: UseClientBlynkProps) {
  const [v1, setV1] = useState<string>(initialV1);
  const [v2, setV2] = useState<number>(initialV2);
  const [v3, setV3] = useState<number>(initialV3);
  const [v4, setV4] = useState<number>(initialV4);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [newV1, newV2, newV3, newV4] = await Promise.all([
          axiosBlynk.get(`/get?V1`),
          axiosBlynk.get(`/get?V2`),
          axiosBlynk.get(`/get?V3`),
          axiosBlynk.get(`/get?V4`),
        ]);

        setV1(newV1.data);
        setV2(Number(newV2));
        setV3(Number(newV3));
        setV4(Number(newV3));

        console.log("Data v1:", newV1);
        console.log("Data v2:", newV2);
        console.log("Data v3:", newV3);
        console.log("Data v4:", newV4);
      } catch (err) {
        console.error("Blynk fetch error:", err);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 2000);
    return () => clearInterval(interval);
  }, []);

  return { v1, v2, v3, v4, setV1, setV2, setV3, setV4 };
}

export default useClientBlynk;
