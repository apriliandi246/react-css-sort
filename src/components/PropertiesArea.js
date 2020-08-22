import React, { Component } from 'react';
import UnsortPropertyInput from './common/UnsortPrepertyInput';
import SortPropertyField from './common/SortPropertyField';

class PropertiesArea extends Component {
   render() {
      const { value, sortedProperties, onChange } = this.props;

      return (
         <div className="properties-field">
            <UnsortPropertyInput
               value={value}
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