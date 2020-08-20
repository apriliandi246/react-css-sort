import React, { Component } from 'react';
import SortButton from './common/SortButton';
import CopyButton from './common/CopyButton';
import ClearButton from './common/ClearButton';

class Buttons extends Component {
   render() {
      const { min, max, result, properties, onCopy, onClick, onClear } = this.props;

      return (
         <div className="buttons">
            <SortButton
               min={min}
               max={max}
               properties={properties}
               onSort={onClick}
            />

            <CopyButton
               result={result}
               onCopy={onCopy}
            />

            <ClearButton
               properties={properties}
               onClear={onClear}
            />
         </div>
      );
   }
}

export default Buttons;