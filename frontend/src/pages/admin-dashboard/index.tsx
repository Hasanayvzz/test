import dynamic from "next/dynamic";
import { Suspense } from "react";

const ModuleAdminDashboard = dynamic(
  () => import("../../views/admin-dashboard/index"),
  {
    ssr: false,
  }
);
export default function Admindashboard() {
  return (
    <Suspense fallback={`Loading...`}>
      <ModuleAdminDashboard />
    </Suspense>
  );
}
