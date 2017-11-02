import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './style/tt.css';
import Button from 'antd/lib/button';
let formData = new FormData();
formData.append('username', 'John');
formData.append('password', 'John123');

fetch('/api')
fetch('/api/t1')
fetch('/fff')
fetch('/fff/t1')
fetch("/mapi/koala/authorization", {
    method: "POST",
    body:  JSON.stringify({
        username:'halo',
        password:'halobear',
    })
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
            <Button type="primary">Button</Button>
        </p>
          <div className="flex">
              <div className="aaa">
                  saf

              </div>
          </div>
          <div className="tt">
              saf
          </div>
      </div>
    );
  }
}

export default App;
