import React from 'react';

const ClearButton = ({ properties, onClear }) => {
   return (
      <button
         onClick={onClear}
         className="btn-three"
         disabled={properties.length === 0 ? true : false}
      >
         Clear
      </button>
   );
}

export default ClearButton;