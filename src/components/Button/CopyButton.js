import React from 'react';


export default function CopyButton({ onCopy, sortedProperties }) {
   return (
      <button
         onClick={onCopy}
         className="btn-two"
         disabled={sortedProperties.length === 0 ? true : false}
      >
         Copy
      </button>
   );
}
