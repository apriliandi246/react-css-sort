import React from 'react';

const ClearButton = ({ unSortedProperties, onClear }) => {
   return (
      <button
         onClick={onClear}
         className="btn-three"
         disabled={unSortedProperties.length === 0 ? true : false}
      >
         Clear
      </button>
   );
}

export default ClearButton;