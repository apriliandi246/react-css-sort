import React, { Component } from 'react';
import UnsortPropertyInput from './common/UnsortPrepertyInput';
import SortPropertyField from './common/SortPropertyField';

class PropertiesArea extends Component {
   render() {
      const { sortedProperties, inputPropertiesRef, onChange } = this.props;

      return (
         <div className="properties-field">
            <UnsortPropertyInput
               inputPropertiesRef={inputPropertiesRef}
               onChange={onChange}
            />

            <SortPropertyField
               sortedProperties={sortedProperties}
            />
         </div>
      );
   }
}

export default PropertiesArea;