import {
  Combobox,
  ComboboxInput,
  ComboboxList,
  ComboboxOption,
  ComboboxPopover,
} from "@reach/combobox";
import { useContext, useEffect } from "react";
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
    debugger;
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
  console.log("selected n e ", selected);
  console.log("formik var mı ", formik);
  return (
    <Combobox onSelect={handleSelect}>
      <ComboboxInput
        name="address"
        value={value || formik.values.address}
        onChange={(e) => {
          setValue(e.target.value);
          formik.handleChange(e);
        }}
        className="combobox-input"
        disabled={!ready}
        placeholder="Search and adress"
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
