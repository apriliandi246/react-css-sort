import React, { Component } from 'react';

class RadioButton extends Component {
   render() {
      const { minSort, maxSort, onChangeMin, onChangeMax } = this.props;

      return (
         <React.Fragment>
            <div className="min">
               <input
                  id="min"
                  value="min"
                  type="radio"
                  checked={minSort}
                  onChange={onChangeMin}
               />
               <label htmlFor="min">smaller to bigger</label>
            </div>

            <div className="max">
               <input
                  id="max"
                  value="max"
                  type="radio"
                  checked={maxSort}
                  onChange={onChangeMax}
               />
               <label htmlFor="max">bigger to smaller</label>
            </div>
         </React.Fragment>
      );
   }
}

export default RadioButton;