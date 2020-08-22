import React from 'react';

const UnsortPropertyInput = ({ value, onChange }) => {
   return (
      <div className="input-form properties">
         <label htmlFor="properties">Properties</label>
         <textarea
            cols="65"
            rows="20"
            value={value}
            id="description"
            spellCheck="false"
            autoComplete="false"
            onChange={onChange}
            placeholder="Properties...."
         ></textarea>
      </div>
   );
}

export default UnsortPropertyInput;