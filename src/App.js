import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Add from './components/add';
import Content from './components/content';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      set:[{title:'sdfs',content:'dsfds',isOn:true}]
    }
    this.handleSave = this.handleSave.bind(this);
  }
  handleSave(set){
    this.setState({set:[set]})
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <p className="App-title">Fidlcn's Todo</p>
        </div>
        <div className='todoBox'>
              <Add onSave={this.handleSave} />
              <Content states = {this.state} />
        </div>
      </div>
    );
  }
}

export default App;
