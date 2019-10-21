import React, { Component } from 'react';
import { Row, Col} from 'antd';
import FormApp from './components/FormApp';
import TableDisplay from './components/TableDisplay';

import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
       <Row>
      <Col span={4}></Col>
      <Col span={16}>
        <h1>Emmanuel form App</h1>
        
        < FormApp/>
      </Col>
      <Col span={4}></Col>
    </Row>
    <Row>
      <Col span={4}></Col>
      <Col span={16}>
        <h1>Table</h1>
        
        < TableDisplay/>
      </Col>
      <Col span={4}></Col>
    </Row>
        
      </div>
    );
  }
}

export default App;
