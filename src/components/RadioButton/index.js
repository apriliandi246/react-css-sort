import React from "react";

export default function RadioButton({ minSort, maxSort, setMenu }) {
   return (
      <React.Fragment>
         <div className="min">
            <input
               id="min"
               value="min"
               type="radio"
               checked={minSort}
               onChange={() => setMenu("min")}
            />
            <label htmlFor="min">smaller to bigger</label>
         </div>

         <div className="max">
            <input
               id="max"
               value="max"
               type="radio"
               checked={maxSort}
               onChange={() => setMenu("max")}
            />
            <label htmlFor="max">bigger to smaller</label>
         </div>
      </React.Fragment>
   );
}
