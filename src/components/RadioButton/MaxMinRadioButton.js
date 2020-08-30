import React from 'react';

const MaxMinRadioButton = ({ maxSort, onChangeMax }) => {
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

export default MaxMinRadioButton;