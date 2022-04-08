
import React from 'react';
import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
// EXER 2
// const Task = (value) => {
//   return (
//     <li key={value}>{value}</li>
//   );
// }

// const chores = ['cozinhar','limpar', 'lavar'];

// class App extends React.Component {
//   render() {
//     return (<ul>{chores.map((element) => Task(element))}</ul>)
//   }
// }

// EXER 3
class App extends React.Component {
  render() {
    return (<div>
      <Header />
      <Content />
      <Footer />
    </div>)
  }
}

export default App
