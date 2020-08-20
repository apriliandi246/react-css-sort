import React from 'react';

const CopyButton = ({ result, onCopy }) => {
   return (
      <button
         onClick={onCopy}
         className="btn-two"
         disabled={result.length === 0 ? true : false}
      >
         Copy
      </button>
   );
}

export default CopyButton;