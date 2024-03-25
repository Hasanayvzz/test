import dynamic from "next/dynamic";
import { Suspense } from "react";

const ModuleHomePage = dynamic(
  () => import("../views/landing/homePage/index"),
  {
    ssr: false,
  }
);
export default function Home() {
  return (
    <Suspense fallback={`Loading...`}>
      <ModuleHomePage />
    </Suspense>
  );
}
