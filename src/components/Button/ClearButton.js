import React from "react";

export default function ClearButton({ onClear, unSortedProperties }) {
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
