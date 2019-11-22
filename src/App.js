import React from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list'
import {SearchBox} from './components/search-box/serach-box.component'

class App extends React.Component{

  constructor(){
    super();
    this.state = {
      monsters : [],
      searchField: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then( res => res.json())
      .then( users => this.setState({monsters: users}))
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  }

  render(){

    const { monsters, searchField } =  this.state;
    const fileredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    )

    return(
      <div className='App'>
        <h1>monster</h1>
        <SearchBox 
          placeholder='search monster' 
          handleChange={this.handleChange} 
        />
        <CardList monsters={fileredMonsters}/>
      </div>
    )
  }
}

export default App;
