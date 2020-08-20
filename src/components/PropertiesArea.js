import React, { Component } from 'react';
import UnsortPropertyInput from './common/UnsortPrepertyInput';
import SortPropertyField from './common/SortPropertyField';

class PropertiesArea extends Component {
   render() {
      const { value, inputPropertiesRef, onInputChange } = this.props;

      return (
         <div className="properties-field">
            <UnsortPropertyInput
               inputPropertiesRef={inputPropertiesRef}
               onInputChange={onInputChange}
            />

            <SortPropertyField
               result={value}
            />
         </div>
      );
   }
}

export default PropertiesArea;