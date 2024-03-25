import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
const DetailMap = ({ data }: any) => {
  var customMarker = new L.DivIcon({
    html: `<div style="
                            background: linear-gradient(45deg, #FD6A3C
                            , #C0366A);
                            display:flex;
                            position:absolute;
                            top:-5px;
                            right:-5px;
                            justify-content:center;
                            height: 25px;
                            width: 25px;
                            align-items:center;
                            font-size: 14px;
                            border-radius: 50%;
                            box-shadow: 0px 0px 15px -5px ;
                            "><div class="label"><p style="color: white; padding: 1px;">1</p></div></div>`,
  });
  return (
    <div className={`  m-0 `}>
      <MapContainer
        attributionControl={false}
        className="my-cnt"
        center={[35, 35]}
        zoom={13}
        scrollWheelZoom={true}>
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        (
        <Marker position={[35, 35]} icon={customMarker}>
          <Popup>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <div
                style={{
                  backgroundImage: `url(${data?.blogImage})`,
                  backgroundSize: "100% 100%",
                  borderRadius: 8,
                  height: 115,
                  width: 262,
                }}></div>

              <div className="fs-16 text-color fw-bold mt-2 mb-1 ">
                {data?.blogName},
              </div>
              <div className="fs-12 ">{data?.star}</div>

              <div className="w-100 d-flex align-items-center my-3">
                <span className="fs-24 fw-light border-line">
                  {data?.approximatelyPrice} {"USD"}
                </span>
              </div>
            </div>
          </Popup>
        </Marker>
        );
      </MapContainer>
    </div>
  );
};

export default DetailMap;
