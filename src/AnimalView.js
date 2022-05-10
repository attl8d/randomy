import React from "react"

export class AnimalView extends React.Component {
  giphyApiKey = "D31L73ySufmBJ3YBDkmbVnH9TuWXuvMa"

  constructor(props) {
    super(props)
    this.state = { data: null }
  }

  componentDidMount() {
    this.loadAnimal()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.animal !== this.props.animal) {
      this.loadAnimal()
    }
  }

  loadAnimal() {
    fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${this.giphyApiKey}&tag=${this.props.animal}`
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        this.setState({ data: res.data })
      })
  }

  render() {
    return this.state.data ? (
      <img
        className="gif-preview"
        src={this.state.data.images.fixed_height.webp}
      ></img>
    ) : null
  }
}
