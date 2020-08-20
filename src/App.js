import React from 'react';
import copy from 'copy-to-clipboard';
import RadioButton from './components/RadioButton';
import PropertiesArea from './components/PropertiesArea';
import Buttons from './components/Buttons';
import Head from './components/Head';
import { sortProperties } from './util/sort';
import './style/main.css';


class App extends React.Component {
   state = {
      minSort: false,
      maxSort: false,
      sortedProperties: ``,
      unSortedProperties: ``
   }

   inputProperties = React.createRef();


   onChangeMin = () => {
      this.setState({ minSort: true, maxSort: false });
   }

   onChangeMax = () => {
      this.setState({ minSort: false, maxSort: true });
   }

   onInputChange = (event) => {
      this.setState({ unSortedProperties: event.target.value });
   }

   onClick = () => {
      const { minSort, maxSort, unSortedProperties } = this.state;

      if (!minSort && !maxSort) {
         return;
      }

      const arrProperties = unSortedProperties.split('\n');

      const format = {
         smallerToBigger: minSort,
         biggerToSmaller: maxSort
      }

      this.setState({ sortedProperties: sortProperties(arrProperties, format) });
   }

   onCopy = () => {
      copy(this.state.sortedProperties);
      alert('Copied');
   }

   onClear = () => {
      this.inputProperties.current.value = "";

      this.setState({
         minSort: false,
         maxSort: false,
         sortedProperties: ``,
         unSortedProperties: ``
      });
   }

   render() {
      const { minSort, maxSort, sortedProperties, unSortedProperties } = this.state;

      return (
         <div className="container">
            <Head />

            <RadioButton
               minSort={minSort}
               maxSort={maxSort}
               onChangeMin={this.onChangeMin}
               onChangeMax={this.onChangeMax}
            />

            <PropertiesArea
               sortedProperties={sortedProperties}
               inputPropertiesRef={this.inputProperties}
               onChange={this.onInputChange}
            />

            <Buttons
               minSort={minSort}
               maxSort={maxSort}
               sortedProperties={sortedProperties}
               unSortedProperties={unSortedProperties}
               onCopy={this.onCopy}
               onClick={this.onClick}
               onClear={this.onClear}
            />
         </div>
      );
   }
}

export default App;