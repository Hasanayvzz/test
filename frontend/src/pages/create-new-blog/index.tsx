import dynamic from "next/dynamic";
import { Suspense } from "react";

const ModuleCreateBlog = dynamic(
  () => import("../../views/create-new-blog/index"),
  {
    ssr: false,
  }
);
export default function CreateBlog() {
  return (
    <Suspense fallback={`Loading...`}>
      <ModuleCreateBlog />
    </Suspense>
  );
}
