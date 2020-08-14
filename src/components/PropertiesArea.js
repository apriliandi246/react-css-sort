import React, { Component } from 'react';

class PropertiesArea extends Component {
   render() {
      const { value, onInputChange } = this.props;

      return (
         <div className="properties-field">
            <div className="input-form">
               <label htmlFor="properties">Properties</label>
               <textarea
                  onChange={onInputChange}
                  placeholder="properties...."
                  autoComplete="false"
                  spellCheck="false"
                  id="description"
                  cols="65"
                  rows="20"
               ></textarea>
            </div>

            <div className="input-form">
               <label htmlFor="result">Result</label>
               <textarea
                  value={value}
                  placeholder="result...."
                  id="result"
                  cols="65"
                  rows="20"
                  disabled
               ></textarea>
            </div>
         </div>
      );
   }
}

export default PropertiesArea;