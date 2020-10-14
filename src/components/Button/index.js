import React from "react";
import SortButton from "./SortButton";
import CopyButton from "./CopyButton";
import ClearButton from "./ClearButton";

export default function Buttons({
   minSort,
   maxSort,
   sortedProperties,
   unSortedProperties,
   onCopy,
   onClick,
   onClear,
}) {
   return (
      <div className="buttons">
         <SortButton
            minSort={minSort}
            maxSort={maxSort}
            unSortedProperties={unSortedProperties}
            onSort={onClick}
         />

         <CopyButton sortedProperties={sortedProperties} onCopy={onCopy} />

         <ClearButton
            unSortedProperties={unSortedProperties}
            onClear={onClear}
         />
      </div>
   );
}
