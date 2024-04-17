/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useMemo, useState } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import "@reach/combobox/styles.css";
import { PlacesAutoComplete } from "./PlacesAutoComplete";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

const options = {
  disableDefaultUI: false,
  zoomControl: true,
};

interface MapType {
  panTo: (location: any) => void;
  setZoom: (zoom: number) => void;
  // Other methods and properties of the map interface
}

const Map = ({ formik, lat, lng }: any) => {
  const [formikLocation, setFormikLocation] = useState<any>({});
  const [selected, setSelected] = useState<any>(null);
  const [map, setMap] = useState<MapType | null>(null);
  const router = useRouter();

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "", // Replace with your API key
    libraries: ["places"],
  });
  console.log("loadError", loadError);
  const center = useMemo(() => {
    if (selected) {
      return {
        lat: selected.lat,
        lng: selected.lng,
      };
    } else if (formikLocation.lat && formikLocation.lng) {
      return {
        lat: formikLocation.lat,
        lng: formikLocation.lng,
      };
    }
    return {
      lat: 39.899652,
      lng: 32.77486,
    };
  }, [selected, formikLocation]);

  useEffect(() => {
    if (formik?.values?.latitude && formik?.values?.longitude) {
      setFormikLocation({
        lat: parseFloat(formik?.values?.latitude),
        lng: parseFloat(formik?.values?.longitude),
      });
    }
  }, [formik?.values?.latitude, formik?.values?.longitude]);

  const onMapLoad = (map: any) => {
    setMap(map);
  };
  useEffect(() => {
    if (map) {
      if (selected) {
        map.panTo(selected);
        map.setZoom(14);
      } else if (formikLocation?.lat && formikLocation?.lng) {
        map.panTo(formikLocation);
        map.setZoom(14);
      }
    }
  }, [selected, formikLocation, map]);
  const { t } = useTranslation();

  return (
    <>
      {isLoaded && (
        <div
          style={{ display: "flex", flexDirection: "column", gap: 12 }}
          className="pb-5">
          <p className="text-16-600 mt-5">{t("blogDetail.address")}</p>
          <PlacesAutoComplete
            setSelected={setSelected}
            formik={formik}
            selected={selected}
          />
          <p className="text-16-600">{t("blogDetail.setLocation")}</p>
          <GoogleMap
            zoom={14}
            center={center}
            mapContainerClassName="map-container"
            onLoad={onMapLoad}
            options={options}>
            {formikLocation.lat && formikLocation.lng && (
              <Marker
                position={{
                  lat: formikLocation.lat,
                  lng: formikLocation.lng,
                }}
              />
            )}
            {selected && (
              <Marker position={{ lat: selected.lat, lng: selected.lng }} />
            )}
          </GoogleMap>
        </div>
      )}
    </>
  );
};

export default Map;
