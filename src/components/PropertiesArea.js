import React, { Component } from 'react';

class PropertiesArea extends Component {
   render() {
      const { value, inputPropertiesRef, onInputChange } = this.props;

      return (
         <div className="properties-field">
            <div className="input-form properties">
               <label htmlFor="properties">Properties</label>
               <textarea
                  cols="65"
                  rows="20"
                  id="description"
                  spellCheck="false"
                  autoComplete="false"
                  onChange={onInputChange}
                  ref={inputPropertiesRef}
                  placeholder="Properties...."
               ></textarea>
            </div>

            <div className="input-form result">
               <label htmlFor="result">Result</label>
               <textarea
                  disabled
                  cols="65"
                  rows="20"
                  id="result"
                  value={value}
                  placeholder="Result...."
               ></textarea>
            </div>
         </div>
      );
   }
}

export default PropertiesArea;