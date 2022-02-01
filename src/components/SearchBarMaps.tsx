import '@reach/combobox/styles.css';

import {
  Combobox,
  ComboboxInput,
  ComboboxList,
  ComboboxOption,
  ComboboxPopover,
} from '@reach/combobox';
import React from 'react';
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';

type Props = { panTo: Function };

const SearchBarMaps: React.FC<Props> = ({ panTo }) => {
  /* destructure the variables and functions from usePlacesAutocomplete */
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => 43.46352270882575, lng: () => -1.511119064793627 } as any,
      radius: 200 * 1000,
    },
  });

  return (
    <>
      <div className="mapssearchbar">
        <Combobox
          onSelect={async (address) => {
            setValue(address, false);
            clearSuggestions();
            try {
              const results = await getGeocode({ address });
              const { lat, lng } = await getLatLng(results[0]);
              panTo(lat, lng);
            } catch (error) {
              console.log('error');
            }
          }}>
          <ComboboxInput
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            disabled={!ready}
            placeholder="Entrez une adresse"
          />
          <ComboboxPopover>
            <ComboboxList>
              {status === 'OK' &&
                data.map((suggestions, index) => (
                  <ComboboxOption key={index} value={suggestions.description} />
                ))}
            </ComboboxList>
          </ComboboxPopover>
        </Combobox>
      </div>
    </>
  );
};

export default SearchBarMaps;
