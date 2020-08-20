import React from 'react';

const SortButton = ({ min, max, properties, onSort }) => {
   return (
      <button
         onClick={onSort}
         className="btn-one"
         disabled={properties.length !== 0 && (min === true || max === true) ? false : true}
      >
         Sort
      </button>
   );
}

export default SortButton;