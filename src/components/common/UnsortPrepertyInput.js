import React from 'react';

const UnsortPropertyInput = ({ inputPropertiesRef, onInputChange }) => {
   return (
      <div className="input-form properties">
         <label htmlFor="properties">Properties</label>
         <textarea
            cols="65"
            rows="20"
            id="description"
            spellCheck="false"
            autoComplete="false"
            onChange={onInputChange}
            ref={inputPropertiesRef}
            placeholder="Properties...."
         ></textarea>
      </div>
   );
}

export default UnsortPropertyInput;