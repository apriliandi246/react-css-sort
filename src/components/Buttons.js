import React, { Component } from 'react';

class Buttons extends Component {
   render() {
      const { min, max, result, properties, onCopy, onClick, onClear } = this.props;

      return (
         <div className="buttons">
            <button
               onClick={onClick}
               className="btn-one"
               disabled={properties.length !== 0 && (min === true || max === true) ? false : true}
            >
               Make it pretty
            </button>

            <button
               onClick={onCopy}
               className="btn-two"
               disabled={result.length === 0 ? true : false}
            >
               Copy
            </button>

            <button
               onClick={onClear}
               className="btn-three"
               disabled={properties.length === 0 ? true : false}
            >
               Clear
            </button>
         </div>
      );
   }
}

export default Buttons;