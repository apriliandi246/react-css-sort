import React from 'react';
import UnsortPropertyInput from './UnsortPrepertyInput';
import SortPropertyField from './SortPropertyField';


export default function PropertiesArea({ value, sortedProperties, onChange }) {
   return (
      <div className="properties-field">
         <UnsortPropertyInput
            value={value}
            onChange={onChange}
         />

         <SortPropertyField
            sortedProperties={sortedProperties}
         />
      </div>
   );
}
