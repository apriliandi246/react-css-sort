import React, { Component } from 'react';
import SortButton from './common/SortButton';
import CopyButton from './common/CopyButton';
import ClearButton from './common/ClearButton';

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