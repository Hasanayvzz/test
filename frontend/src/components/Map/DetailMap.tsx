/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useMemo, useState } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import "@reach/combobox/styles.css";
import { PlacesAutoComplete } from "./PlacesAutoComplete";
import { useRouter } from "next/router";

const options = {
  disableDefaultUI: false,
  zoomControl: true,
};

interface MapType {
  panTo: (location: any) => void;
  setZoom: (zoom: number) => void;
  lat?: number;
  lng?: number;
}

const DetailMap = ({ lat, lng, isLoaded, loadError }: any) => {
  const [map, setMap] = useState<MapType | null>(null);
  console.log("lat var mı", lat);
  console.log("lng var mı ", lng);

  const center = useMemo(() => {
    if (lat && lng) {
      return {
        lat: lat,
        lng: lng,
      };
    } else {
      return {
        lat: 39.899652,
        lng: 32.77486,
      };
    }
  }, [lat, lng]);

  useEffect(() => {}, [lat, lng]);

  const onMapLoad = (map: any) => {
    setMap(map);
  };
  useEffect(() => {
    if (map && lat && lng) {
      map.panTo({ lat, lng });
      map.setZoom(14);
    }
  }, [lat, lng, map]);

  return (
    <>
      {isLoaded === true && (
        <div
          style={{ display: "flex", flexDirection: "column", gap: 12 }}
          className="pb-5">
          <GoogleMap
            zoom={14}
            center={center}
            mapContainerClassName="map-container"
            onLoad={onMapLoad}
            options={options}>
            {lat && lng && (
              <Marker
                position={{
                  lat: lat,
                  lng: lng,
                }}
              />
            )}
            {lat && lng && <Marker position={{ lat: lat, lng: lng }} />}
          </GoogleMap>
        </div>
      )}
    </>
  );
};

export default DetailMap;
