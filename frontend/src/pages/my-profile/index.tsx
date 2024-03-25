import dynamic from "next/dynamic";
import { Suspense } from "react";

const ModuleMyProfile = dynamic(() => import("../../views/my-profile/index"), {
  ssr: false,
});
export default function MyProfile() {
  return (
    <Suspense fallback={`Loading...`}>
      <ModuleMyProfile />
    </Suspense>
  );
}
