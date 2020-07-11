import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

// Container Component
class App extends Component {
  state = {
    ninjas: [
      { name: 'Ryu', age:30, belt: 'black', id: 1 },
      { name: 'Yoshi', age:20, belt: 'green', id: 2 },
      { name: 'Crystal', age:25, belt: 'pink', id: 3 }
    ]
  }
  addNinja = ninja => {
    ninja.id = Math.random();
    this.setState({
      ninjas: [...this.state.ninjas, ninja]
    })
  }
  deleteNinja = id => {
    this.setState({
      ninjas: [...this.state.ninjas.filter(ninja => ninja.id !== id)]
    })
  }
  componentDidMount() {
    console.log('component mounted');
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('component updated', prevProps, prevState);
  }
  render() {
    return(
      <div className="App">
        <header className="App-header">
          <h1>My first React app!</h1>
          <p>Welcome :)</p>
          <Ninjas deleteNinja={ this.deleteNinja } ninjas={ this.state.ninjas }/>
          <AddNinja addNinja={ this.addNinja }/>
        </header>
      </div>
    );
  }
}

export default App;
