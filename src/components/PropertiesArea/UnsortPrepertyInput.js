import React from 'react';


export default function UnsortPropertyInput({ value, onChange }) {
   const [placeholder] = React.useState(`
      padding: 0 55px 0 55px;
      top: 0;
      z-index: 1;
      right: 0;
      align-items: center;
      height: 60px;
      position: fixed;
      display: flex;
      left: 0;
   `);

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
            placeholder={placeholder}
         ></textarea>
      </div>
   );
}
