import React from 'react';
import copy from 'copy-to-clipboard';
import { sortProperties } from './util/sort';
import RadioButton from './components/RadioButton';
import PropertiesArea from './components/PropertiesArea';
import Buttons from './components/Buttons';
import Head from './components/Head';
import './style/main.css';


class App extends React.Component {
   state = {
      minSort: false,
      maxSort: false,
      sortedProperties: ``,
      unSortedProperties: ``
   }

   onChangeMin = () => {
      this.setState({ minSort: true, maxSort: false });
   }

   onChangeMax = () => {
      this.setState({ minSort: false, maxSort: true });
   }

   onInputChange = (event) => {
      this.setState({ unSortedProperties: event.target.value });
   }

   onSort = () => {
      const { minSort, maxSort, unSortedProperties } = this.state;

      if (!minSort && !maxSort) {
         return;
      }

      const format = {
         smallerToBigger: minSort,
         biggerToSmaller: maxSort
      };

      const arrProperties = unSortedProperties.split('\n');

      this.setState({ sortedProperties: sortProperties(arrProperties, format) });
   }

   onCopy = () => {
      copy(this.state.sortedProperties);
      alert('Copied');
   }

   onClear = () => {
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
               value={unSortedProperties}
               sortedProperties={sortedProperties}
               onChange={this.onInputChange}
            />

            <Buttons
               minSort={minSort}
               maxSort={maxSort}
               sortedProperties={sortedProperties}
               unSortedProperties={unSortedProperties}
               onCopy={this.onCopy}
               onClick={this.onSort}
               onClear={this.onClear}
            />
         </div>
      );
   }
}

export default App;