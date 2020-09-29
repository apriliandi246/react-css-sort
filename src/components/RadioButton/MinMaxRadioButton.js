import React from 'react';


export default function MinMaxRadioButton({ minSort, onChangeMin }) {
   return (
      <div className="min">
         <input
            id="min"
            value="min"
            type="radio"
            checked={minSort}
            onChange={onChangeMin}
         />
         <label htmlFor="min">smaller to bigger</label>
      </div>
   );
}
