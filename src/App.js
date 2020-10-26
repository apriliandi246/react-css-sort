import React from "react";
import Head from "./components/Head";
import Buttons from "./components/Button";
import RadioButton from "./components/RadioButton";
import PropertiesArea from "./components/PropertiesArea";
import "./style/main.css";

export default function App() {
   const [minSort, setMinSort] = React.useState(false);
   const [maxSort, setMaxSort] = React.useState(false);
   const [sortedProperties, setSortedProperties] = React.useState(``);
   const [unSortedProperties, setUnsortedProperties] = React.useState(``);

   function setMenu(format) {
      if (format === "min") {
         setMinSort(true);
         setMaxSort(false);
      } else if (format === "max") {
         setMinSort(false);
         setMaxSort(true);
      } else {
         return;
      }
   }

   function onInputChange(event) {
      setUnsortedProperties(event.target.value);
   }

   function onSort() {
      if (minSort === false && maxSort === false) {
         return;
      }

      const result = unSortedProperties
         .trim()
         .split(";")
         .filter((property) => property.toString().trim() !== "")
         .map((property) => property.toString().trim() + ";")
         .sort((a, b) =>
            minSort === true ? a.length - b.length : b.length - a.length
         )
         .join("\n");

      setSortedProperties(result);
   }

   function onCopy() {
      navigator.clipboard.writeText(sortedProperties);
      alert("Copied....");
   }

   return (
      <div className="container">
         <Head />

         <RadioButton minSort={minSort} maxSort={maxSort} setMenu={setMenu} />

         <PropertiesArea
            value={unSortedProperties}
            sortedProperties={sortedProperties}
            onChange={onInputChange}
         />

         <Buttons
            minSort={minSort}
            maxSort={maxSort}
            onCopy={onCopy}
            onSort={onSort}
            sortedProperties={sortedProperties}
            unSortedProperties={unSortedProperties}
         />
      </div>
   );
}
