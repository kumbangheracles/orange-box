import axiosBlynk from "@/lib/axiosBylink";
import ClientDashboard from "@/components/ClientDashboard";
export const metadata = {
  title: "Orange Box | Dashboard",
  description: "This is a dashboard for orange box",
};

export const dynamic = "force-dynamic";

export default async function Home() {
  const [v1, v2, v3, v4] = await Promise.all([
    axiosBlynk.get("/get", { params: { V1: "" } }),
    axiosBlynk.get("/get", { params: { V2: "" } }),
    axiosBlynk.get("/get", { params: { V3: "" } }),
    axiosBlynk.get("/get", { params: { V4: "" } }),
  ]);

  return (
    <>
      {!v1 || !v2 || !v3 || !v4 ? (
        <ClientDashboard
          initialV1={"No Data"}
          initialV2={0}
          initialV3={0}
          initialV4={0}
        />
      ) : (
        <ClientDashboard
          initialV1={v1.data}
          initialV2={v2.data}
          initialV3={v3.data}
          initialV4={v4.data}
        />
      )}
    </>
  );
}
