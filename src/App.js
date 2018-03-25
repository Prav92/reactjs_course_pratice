import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Radium, {StyleRoot} from 'radium'
import Person from './Person/Person'


class App extends Component {
  state = {
    persons: [
    { id: 1,name: "Arun", age: 25},
    { id: 2,name: "Manu", age: 29},
    { id: 3,name: "Steve", age: 39}
    ],
    otherState: 'some other value',
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }


  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    });
    
    const person = {
      ...this.state.persons[personIndex]
    }

    // 
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;



    this.setState({
      persons: persons
    })
  }
  
  togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});
    }

  render() {

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      curser: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;

    if (this.state.showPersons){
      persons = (
          <div>
            {this.state.persons.map((person, index) => {
              return <Person
              click={() => this.deletePersonHandler(index)} 
              name={person.name} 
              age={person.age}
              key={person.id} 
              changed = {(event) => this.nameChangeHandler(event, person.id)}
              />
            })}
          </div>
          );
          style.backgroundColor = 'red'
          style[':hover'] = {
            backgroundColor: 'salmon',
            color: "black"
          } 
        };
    
    const classes = [];

    if(this.state.persons.length <=2 ){
      classes.push('red') // classes = ['red']
     }

    if(this.state.persons.length <=1){
      classes.push('bold') // classes = ['red', 'bold']
    }
    return (
      <StyleRoot>
        <div className="App">
          <h1>Hi This is starting</h1> 
          <p className={classes.join(' ')}>This is really working!</p>   
             <button style={style} onClick={this.togglePersonsHandler}> Toggle Person</button>  
          {persons}
        </div>
      </StyleRoot>
    );
    // return React.createElement('div', null, React.createElement('h1', null, "To get started, edit and save to reload."))
  }
}




export default Radium(App);
