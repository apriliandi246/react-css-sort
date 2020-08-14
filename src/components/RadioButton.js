import React, { Component } from 'react';

class RadioButton extends Component {
   render() {
      const { min, max, onChangeMin, onChangeMax } = this.props;

      return (
         <React.Fragment>
            <div className="min">
               <input onChange={onChangeMin} checked={min} type="radio" id="min" value="min" />
               <label htmlFor="min">smaller to bigger</label>
            </div>

            <div className="max">
               <input onChange={onChangeMax} checked={max} type="radio" id="max" value="max" />
               <label htmlFor="max">bigger to smaller</label>
            </div>
         </React.Fragment>
      );
   }
}

export default RadioButton;