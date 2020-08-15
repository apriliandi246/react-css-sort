import React, { Component } from 'react';

class PropertiesArea extends Component {
   state = {
      inputPlaceholder: `
         font-family: monospace;
         font-size: 35px;
         letter-spacing: 10px;
         color: white;
         font-weight: bolder;
         text-align: center;
         margin-bottom: 25px;
      `,

      resultPlaceholder: `
         color: white;
         font-size: 35px;
         text-align: center;
         font-weight: bolder;
         margin-bottom: 25px;
         letter-spacing: 10px;
         font-family: monospace;

         OR

         font-family: monospace;
         letter-spacing: 10px;
         font-weight: bolder;
         margin-bottom: 25px;
         text-align: center;
         font-size: 35px;
         color: white;
      `
   }

   render() {
      const { inputPlaceholder, resultPlaceholder } = this.state;
      const { value, inputPropertiesRef, onInputChange } = this.props;

      return (
         <div className="properties-field">
            <div className="input-form">
               <label htmlFor="properties">Properties</label>
               <textarea
                  cols="65"
                  rows="20"
                  id="description"
                  spellCheck="false"
                  autoComplete="false"
                  onChange={onInputChange}
                  ref={inputPropertiesRef}
                  placeholder={inputPlaceholder.trim()}
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
                  placeholder={resultPlaceholder.trim()}
               ></textarea>
            </div>
         </div>
      );
   }
}

export default PropertiesArea;