import '@reach/combobox/styles.css';

import {
  Combobox,
  ComboboxInput,
  ComboboxList,
  ComboboxOption,
  ComboboxOptionText,
  ComboboxPopover,
} from '@reach/combobox';
import React, { useEffect } from 'react';
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';

type Props = { panTo: Function };

const SearchBarMaps: React.FC<Props> = ({ panTo }) => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => 43.46352270882575, lng: () => -1.511119064793627 },
      radius: 200 * 1000,
    },
  });

  return (
    <>
      <div className="mapssearchbar">
        <Combobox
          onSelect={async (address) => {
            try {
              const results = await getGeocode({ address });
              const { lat, lng } = await getLatLng(results[0]);
              panTo(lat, lng);
              console.log({ lat, lng });
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
                data.map((suggestions) => (
                  <ComboboxOption value={suggestions.description} />
                ))}
            </ComboboxList>
          </ComboboxPopover>
        </Combobox>
      </div>
    </>
  );
};

export default SearchBarMaps;
