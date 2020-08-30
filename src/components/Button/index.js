import React, { Component } from 'react';
import SortButton from './SortButton';
import CopyButton from './CopyButton';
import ClearButton from './ClearButton';

class Buttons extends Component {
   render() {
      const { minSort, maxSort, sortedProperties, unSortedProperties, onCopy, onClick, onClear } = this.props;

      return (
         <div className="buttons">
            <SortButton
               minSort={minSort}
               maxSort={maxSort}
               unSortedProperties={unSortedProperties}
               onSort={onClick}
            />

            <CopyButton
               sortedProperties={sortedProperties}
               onCopy={onCopy}
            />

            <ClearButton
               unSortedProperties={unSortedProperties}
               onClear={onClear}
            />
         </div>
      );
   }
}

export default Buttons;