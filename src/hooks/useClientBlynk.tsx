"use client";

import axiosBlynk from "@/lib/axiosBylink";
import axios from "axios";
// import { message } from "antd";
// import axios from "axios";
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
  // const [lastUpdate, setLastUpdate] = useState<number>(Date.now());

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [newV1, newV2, newV3, newV4] = await Promise.all([
          axiosBlynk.get(`/get?V1`),
          axiosBlynk.get(`/get?V2`),
          axiosBlynk.get(`/get?V3`),
          axiosBlynk.get(`/get?V4`),
        ]);

        const val1 = newV1.data;
        const val2 = Number(newV2);
        const val3 = Number(newV3);
        const val4 = Number(newV4);

        setV1(val1);
        setV2(val2);
        setV3(val3);
        setV4(100);
        // setLastUpdate(Date.now()); // update waktu terakhir berhasil fetch

        // console.log("Blynk Data:", { val1, val2, val3, val4 });
      } catch (err) {
        console.error("Blynk fetch error:", err);
      }
    };

    // fetch pertama kali
    fetchData();
    // fetch setiap 1 detik
    const interval = setInterval(fetchData, 1000);
    return () => clearInterval(interval);
  }, []);

  // --- Auto Reset kalau tidak ada update dalam 5 detik ---
  // useEffect(() => {
  //   const checkTimeout = setInterval(() => {
  //     const now = Date.now();
  //     if (now - lastUpdate > 5000) {
  //       console.warn("⚠️ Tidak ada data baru dari Blynk, reset ke 0...");
  //       setV3(0);
  //       setV4(0);
  //     }
  //   }, lastUpdate); // cek tiap 1 detik

  //   return () => clearInterval(checkTimeout);
  // }, [lastUpdate]);

  // --- Notifikasi ketika V3 / V4 mencapai 100 ---
  useEffect(() => {
    if (v3 === 100 || v4 === 100) {
      axios.post("/api/notify", {
        message: `⚠️ Warning: Sensor mencapai 100. V3=${v3}, V4=${v4}`,
      });
    }

    if (v3 >= 70) {
      console.warn("Organik mencapai 70%");
    }

    if (v4 >= 70) {
      console.warn("Anorganik mencapai 70%");
    }
  }, [v3, v4]);

  return { v1, v2, v3, v4, setV1, setV2, setV3, setV4 };
}

export default useClientBlynk;
