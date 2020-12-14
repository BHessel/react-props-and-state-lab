import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

onChangeType = (filter) => this.setState({filters: {type: filter}})

  
onFindPetsClick(){
  const petsURL = '/api/pets'
  fetch(petsURL).then(r => r.json()).then((data) => this.setState.pets)
}
  
componentDidMount() {
  this.getPets()
}

render() {
  return (
    <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
                onChangeType={this.onChangeType}
                onFindPetsClick={this.componentDidMount}
                />
            </div>
            <div className="twelve wide column">
              <PetBrowser />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
