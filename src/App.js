import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';

//redux preparation
import store from './store';
import { Provider } from 'react-redux';

function App() {
  // function ab() {
  //   console.log(this)
  // }
  // const ab = () => {
  //   console.log(this)
  // }

  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar />
        <ShoppingList />
        {/* <h1>Hello</h1>
      <button onClick={ab}>click</button> */}
      </div>
    </Provider>
  );
}
// class App extends React.Component {
//   // ab() {
//   //   console.log("ab123")
//   // }
//   // ab = () => {
//   //   console.log("123")
//   // }
//   render() {
//     return (
//       <div>
//         <button onClick={() => this.ab()}>click</button>
//       </div>
//     )
//   }
// }

export default App;
