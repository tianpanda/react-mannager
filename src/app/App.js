
import React, { Component } from 'react';
// import { Button } from 'antd';
import './App.less';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Button type="primary">Button</Button>
//       </div>
//     );
//   }
// }

// export default App;



// export default React.createClass({
	class App extends Component {
  render() {
    return <div>
      {this.props.children}
    </div>
  }
}
export default App;