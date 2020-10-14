import React from "react";
import copy from "copy-to-clipboard";
import { sortProperties } from "./util/sort";
import Head from "./components/Head/index";
import Buttons from "./components/Button/index";
import RadioButton from "./components/RadioButton/index";
import PropertiesArea from "./components/PropertiesArea/index";
import "./style/main.css";

export default function App() {
   const [minSort, setMinSort] = React.useState(false);
   const [maxSort, setMaxSort] = React.useState(false);
   const [sortedProperties, setSortedProperties] = React.useState(``);
   const [unSortedProperties, setUnsortedProperties] = React.useState(``);

   function onChangeMin() {
      setMinSort(true);
      setMaxSort(false);
   }

   function onChangeMax() {
      setMaxSort(true);
      setMinSort(false);
   }

   function onInputChange(event) {
      setUnsortedProperties(event.target.value);
   }

   function onSort() {
      if (minSort === false && maxSort === false) {
         return;
      }

      const format = {
         smallerToBigger: minSort,
         biggerToSmaller: maxSort,
      };

      const sortedProperties = sortProperties(
         unSortedProperties.trim().split(";"),
         format
      );

      setSortedProperties(sortedProperties);
   }

   function onCopy() {
      copy(sortedProperties);
      alert("Copied....");
   }

   function onClear() {
      setMinSort(false);
      setMaxSort(false);
      setSortedProperties(``);
      setUnsortedProperties(``);
   }

   return (
      <div className="container">
         <Head />

         <RadioButton
            minSort={minSort}
            maxSort={maxSort}
            onChangeMin={onChangeMin}
            onChangeMax={onChangeMax}
         />

         <PropertiesArea
            value={unSortedProperties}
            sortedProperties={sortedProperties}
            onChange={onInputChange}
         />

         <Buttons
            minSort={minSort}
            maxSort={maxSort}
            onCopy={onCopy}
            onClick={onSort}
            onClear={onClear}
            sortedProperties={sortedProperties}
            unSortedProperties={unSortedProperties}
         />
      </div>
   );
}
