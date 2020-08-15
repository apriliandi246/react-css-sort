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
      min: false,
      max: false,
      result: ``,
      properties: ``
   }

   inputProperties = React.createRef();


   onChangeMin = () => {
      this.setState({ min: true, max: false });
   }

   onChangeMax = () => {
      this.setState({ min: false, max: true });
   }

   onInputChange = (event) => {
      this.setState({ properties: event.target.value });
   }

   onClick = () => {
      const { min, max, properties } = this.state;

      if (!min && !max) {
         return;
      }

      const arrProperties = properties.split('\n');

      const format = {
         smallerToBigger: min,
         biggerToSmaller: max
      }

      this.setState({ result: sortProperties(arrProperties, format) });
   }

   onCopy = () => {
      copy(this.state.result);
      alert('Copied');
   }

   onClear = () => {
      this.inputProperties.current.value = "";

      this.setState({
         min: false,
         max: false,
         result: ``,
         properties: ``
      });
   }

   render() {
      const { min, max, result, properties } = this.state;

      return (
         <div className="container">
            <Head />

            <RadioButton
               min={min}
               max={max}
               onChangeMin={this.onChangeMin}
               onChangeMax={this.onChangeMax}
            />

            <PropertiesArea
               value={result}
               inputPropertiesRef={this.inputProperties}
               onInputChange={this.onInputChange}
            />

            <Buttons
               min={min}
               max={max}
               result={result}
               properties={properties}
               onCopy={this.onCopy}
               onClick={this.onClick}
               onClear={this.onClear}
            />
         </div>
      );
   }
}

export default App;