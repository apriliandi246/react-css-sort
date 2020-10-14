import React from "react";
import MinMaxRadioButton from "./MinMaxRadioButton";
import MaxMinRadioButton from "./MaxMinRadioButton";

export default function RadioButton({
   minSort,
   maxSort,
   onChangeMin,
   onChangeMax,
}) {
   return (
      <React.Fragment>
         <MinMaxRadioButton minSort={minSort} onChangeMin={onChangeMin} />

         <MaxMinRadioButton maxSort={maxSort} onChangeMax={onChangeMax} />
      </React.Fragment>
   );
}
