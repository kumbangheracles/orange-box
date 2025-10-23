import AllSection from "@/components/AllSection";
import axiosBlynk from "@/lib/axiosBylink";
import useClientBlynk from "@/hooks/useClientBlynk";
import ClientDashboard from "@/components/ClientDashboard";
export const metadata = {
  title: "Orange Box | Dashboard",
  description: "This is a dashboard for orange box",
};

export const dynamic = "force-dynamic";

export default async function Home() {
  const [v1, v2, v3] = await Promise.all([
    axiosBlynk.get("/get", { params: { V1: "" } }),
    axiosBlynk.get("/get", { params: { V2: "" } }),
    axiosBlynk.get("/get", { params: { V3: "" } }),
  ]);

  return (
    <ClientDashboard
      initialV1={v1.data}
      initialV2={v2.data}
      initialV3={v3.data}
    />
  );
}
