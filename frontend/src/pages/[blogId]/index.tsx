import dynamic from "next/dynamic";
import { Suspense } from "react";

const ModuleBlogDetail = dynamic(
  () => import("../../views/blog-detail/index"),
  {
    ssr: false,
  }
);
export default function BlogDetail() {
  return (
    <Suspense fallback={`Loading...`}>
      <ModuleBlogDetail />
    </Suspense>
  );
}
