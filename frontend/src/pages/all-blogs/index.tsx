import dynamic from "next/dynamic";
import { Suspense } from "react";

const ModuleAllBlogs = dynamic(() => import("../../views/all-blogs/index"), {
  ssr: false,
});
export default function AllBlogs() {
  return (
    <Suspense fallback={`Loading...`}>
      <ModuleAllBlogs />
    </Suspense>
  );
}
