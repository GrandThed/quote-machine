import React, {Component} from 'react';
import './App.css';
import processedData from "./quotes/quotes-processed.json"



class App extends Component {
  render(){
    return (
      <div className="App">
        <Quote/>
      </div>
    );
  }
}

const randomQuote = (data) => {
  // const processedData = await parseJson(readJson)
  return data[Math.floor(Math.random() * data.length)]
}


class Quote extends Component {
  constructor(props) {
    super(props)

    this.state = {
      quote : randomQuote(processedData)
    }
    this.handleChange = this.handleChange.bind(this)
  }
  

  handleChange() {
    this.setState({
      quote : randomQuote(processedData)
    })
  }
  

  render(){
    return(
    <div className="quote">
      <h1 className="text" >{this.state.quote.quote}</h1>
      <h3 className="text" >{this.state.quote.author}</h3>
      <div className="btns" >
        <button className="btn-twitter"><a href={`https://twitter.com/intent/tweet?text="${this.state.quote.quote}"%0A${this.state.quote.author}`} target="_blank" rel="noopener noreferrer">tweet</a></button>
        <button className="btn-next" onClick={this.handleChange}>Next</button>
      </div>
    </div>)
  }
}

export default App;


