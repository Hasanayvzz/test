import {
  Combobox,
  ComboboxInput,
  ComboboxList,
  ComboboxOption,
  ComboboxPopover,
} from "@reach/combobox";
import { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
export const PlacesAutoComplete = ({ formik, setSelected, selected }: any) => {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();
  const handleSelect = async (address: any) => {
    setValue(address, false);
    clearSuggestions();
    const results = await getGeocode({ address });
    const { lat, lng } = await getLatLng(results[0]);
    results && formik.setFieldValue("address", results[0].formatted_address);
    lat && formik.setFieldValue("latitude", lat);
    lng && formik.setFieldValue("longitude", lng);
    console.log("lat", lat);
    console.log("lng", lng);
    setSelected({ lat, lng });
  };
  const { t } = useTranslation();
  return (
    <Combobox onSelect={handleSelect}>
      <ComboboxInput
        name="address"
        value={value || formik.values.address}
        onChange={(e) => {
          setValue(e.target.value);
          formik.handleChange(e);
        }}
        className="combobox-input my-input"
        disabled={!ready}
        placeholder={t("createBlog.searchAddress")}
      />
      <ComboboxPopover style={{ zIndex: 1200 }}>
        <ComboboxList>
          {status === "OK" &&
            data.map(({ place_id, description }) => (
              <ComboboxOption
                key={place_id}
                value={description}
                onClick={handleSelect}
              />
            ))}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );
};
