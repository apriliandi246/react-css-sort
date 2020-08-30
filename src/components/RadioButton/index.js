import React, { Component } from 'react';
import MinMaxRadioButton from './MinMaxRadioButton';
import MaxMinRadioButton from './MaxMinRadioButton';

class RadioButton extends Component {
   render() {
      const { minSort, maxSort, onChangeMin, onChangeMax } = this.props;

      return (
         <React.Fragment>
            <MinMaxRadioButton
               minSort={minSort}
               onChangeMin={onChangeMin}
            />

            <MaxMinRadioButton
               maxSort={maxSort}
               onChangeMax={onChangeMax}
            />
         </React.Fragment>
      );
   }
}

export default RadioButton;