import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import { Layout, Icon } from 'antd';

const { Header, Sider, Content } = Layout;

import 'antd/dist/antd.min.css';



export default class Index extends Component {
  render() {
    //Check if logged-in
    return (
      <h1>Prova</h1>
    )
  }
}

if (document.getElementById('example')) {
  ReactDOM.render(<Index />, document.getElementById('example'));
}
