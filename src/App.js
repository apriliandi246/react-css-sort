import React from 'react';
import copy from 'copy-to-clipboard';
import './style/main.css';


class App extends React.Component {
   state = {
      min: false,
      max: false,
      properties: ``,
      result: ``
   }

   onChangeMin = () => {
      this.setState({
         min: true,
         max: false
      });
   }

   onChangeMax = () => {
      this.setState({
         min: false,
         max: true
      });
   }

   onInputChange = (event) => {
      this.setState({ properties: event.target.value.trim() });
   }

   onClick = () => {
      this.setState({ result: this.state.properties });
   }

   onCopy = () => {
      copy(this.state.result);
      alert('Copied');
   }

   render() {
      return (
         <div className="container">
            <h1>Make it Pretty</h1>

            <hr />

            <div className="min">
               <input onChange={this.onChangeMin} checked={this.state.min} type="radio" id="min" value="min" />
               <label htmlFor="min">smaller to bigger</label>
            </div>

            <div className="max">
               <input onChange={this.onChangeMax} checked={this.state.max} type="radio" id="max" value="max" />
               <label htmlFor="max">bigger to smaller</label>
            </div>

            <div className="properties-field">
               <div className="input-form">
                  <label htmlFor="properties">Properties</label>
                  <textarea
                     onChange={this.onInputChange}
                     placeholder="properties...."
                     autoComplete="false"
                     spellCheck="false"
                     id="description"
                     cols="65"
                     rows="20"
                  ></textarea>
               </div>

               <div className="input-form">
                  <label htmlFor="result">Result</label>
                  <textarea
                     value={this.state.result}
                     placeholder="result...."
                     id="result"
                     cols="65"
                     rows="20"
                     disabled
                  ></textarea>
               </div>
            </div>

            <div className="buttons">
               <button
                  className="btn-one"
                  onClick={this.onClick}
                  disabled={this.state.properties.length === 0 ? true : false}>
                  Make it pretty
                  </button>

               <button
                  className="btn-two"
                  onClick={this.onCopy}
                  disabled={this.state.result.length === 0 ? true : false}>
                  Copy
                  </button>
            </div>
         </div>
      );
   }
}

export default App;