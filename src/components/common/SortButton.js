import React from 'react';

const SortButton = ({ minSort, maxSort, unSortedProperties, onSort }) => {
   return (
      <button
         onClick={onSort}
         className="btn-one"
         disabled={unSortedProperties.length !== 0 && (minSort === true || maxSort === true) ? false : true}
      >
         Sort
      </button>
   );
}

export default SortButton;