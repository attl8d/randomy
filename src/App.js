import "./App.css"
import React from "react"
import { AnimalView } from "./AnimalView"

export class App extends React.Component {
  animals = ["cats", "dogs", "elephants", "lions", "monkeys"]
  animalCount = Array.apply(null, Array(10))

  constructor(props) {
    super(props)
    this.state = { loadedAnimals: [], selectedAnimal: this.animals[0] }
  }

  render() {
    return (
      <div className="App">
        <section className="animal-list-section">
          {this.animals.map((animal, index) => {
            return (
              <button
                onClick={() => this.setState({ selectedAnimal: animal })}
                key={index}
              >
                {animal}
              </button>
            )
          })}
        </section>
        <section>
          {this.animalCount.map((n, i) => {
            return (
              <AnimalView animal={this.state.selectedAnimal} key={i}></AnimalView>
            )
          })}
        </section>
      </div>
    )
  }
}

export default App
