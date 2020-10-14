import React from "react";

export default function MaxMinRadioButton({ maxSort, onChangeMax }) {
   return (
      <div className="max">
         <input
            id="max"
            value="max"
            type="radio"
            checked={maxSort}
            onChange={onChangeMax}
         />
         <label htmlFor="max">bigger to smaller</label>
      </div>
   );
}
