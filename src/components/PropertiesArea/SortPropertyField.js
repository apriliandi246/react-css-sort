import React from "react";

export default function SortPropertyField({ sortedProperties }) {
   return (
      <div className="input-form result">
         <label htmlFor="result">Result</label>
         <textarea
            disabled
            cols="65"
            rows="20"
            id="result"
            value={sortedProperties}
            placeholder="Result...."
         ></textarea>
      </div>
   );
}
