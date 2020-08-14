import React, { Component } from 'react';

class Buttons extends Component {
   render() {
      const { result, properties, onCopy, onClick } = this.props;

      return (
         <div className="buttons">
            <button
               className="btn-one"
               onClick={onClick}
               disabled={properties.length === 0 ? true : false}>
               Make it pretty
            </button>

            <button
               className="btn-two"
               onClick={onCopy}
               disabled={result.length === 0 ? true : false}>
               Copy
            </button>
         </div>
      );
   }
}

export default Buttons;