import React from 'react';

const SortPropertyField = ({ result }) => {
   return (
      <div className="input-form result">
         <label htmlFor="result">Result</label>
         <textarea
            disabled
            cols="65"
            rows="20"
            id="result"
            value={result}
            placeholder="Result...."
         ></textarea>
      </div>
   );
}

export default SortPropertyField;