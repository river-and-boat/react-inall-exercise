import React, {Component} from 'react';
import './app.less';
import Header from "./header/Header";

class App extends Component {
  render() {
    return (
      <div className="app">
          <Header />
      </div>
    );
  }
}

export default App;
