import React from 'react';

const CopyButton = ({ sortedProperties, onCopy }) => {
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

export default CopyButton;