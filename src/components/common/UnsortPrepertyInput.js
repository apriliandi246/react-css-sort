import React from 'react';

const UnsortPropertyInput = ({ inputPropertiesRef, onChange }) => {
   return (
      <div className="input-form properties">
         <label htmlFor="properties">Properties</label>
         <textarea
            cols="65"
            rows="20"
            id="description"
            spellCheck="false"
            autoComplete="false"
            onChange={onChange}
            ref={inputPropertiesRef}
            placeholder="Properties...."
         ></textarea>
      </div>
   );
}

export default UnsortPropertyInput;