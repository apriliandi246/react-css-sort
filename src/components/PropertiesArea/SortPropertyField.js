import React from "react";

export default function SortPropertyField({ sortedProperties }) {
   return (
      <div className="input-form result">
         <label>Result</label>

         <textarea
            disabled
            cols="65"
            rows="20"
            value={sortedProperties}
            placeholder="Result...."
         ></textarea>
      </div>
   );
}
