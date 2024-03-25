import Link from "next/link";
import { useRouter } from "next/router";

const HTHOffsetDetail = ({ data }: any) => {
  return (
    <div className="">
      <div
        className=""
        style={{
          height: "40vh",
          width: "100%",
          backgroundSize: "100% 100%",

          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${data?.blogImage})`,
        }}></div>

      {/* <div className="properties-bg">
        <img src={data.displayImage} />
      </div> */}
    </div>
  );
};
export default HTHOffsetDetail;
