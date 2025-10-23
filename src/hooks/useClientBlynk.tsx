"use client";

import axiosBlynk from "@/lib/axiosBylink";
import { useState, useEffect } from "react";

interface UseClientBlynkProps {
  initialV1: string;
  initialV2: number;
  initialV3: number;
}

function useClientBlynk({
  initialV1,
  initialV2,
  initialV3,
}: UseClientBlynkProps) {
  const [v1, setV1] = useState<string>(initialV1);
  const [v2, setV2] = useState<number>(initialV2);
  const [v3, setV3] = useState<number>(initialV3);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [newV1, newV2, newV3] = await Promise.all([
          axiosBlynk.get("/get", { params: { V1: "" } }),
          axiosBlynk.get("/get", { params: { V2: "" } }),
          axiosBlynk.get("/get", { params: { V3: "" } }),
        ]);

        setV1(newV1.data);
        setV2(newV2.data);
        setV3(newV3.data);

        console.log("Data v1: ", newV1);
        console.log("Data v2: ", newV2);
        console.log("Data v3: ", newV3);
      } catch (err) {
        console.error("Blynk fetch error:", err);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 2000);

    return () => clearInterval(interval);
  }, []);

  return { v1, v2, v3, setV1, setV2, setV3 };
}

export default useClientBlynk;
