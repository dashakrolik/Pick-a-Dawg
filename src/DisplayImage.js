import React, {Component} from 'react'
import request from 'superagent'
import { connect } from 'react-redux'

class DisplayImage extends Component {
  state = { images: null }
  //select one of the 3 breeds that are already in the the state.
  //randomly pick one
  //use vncent's Link
  //and it takes the picture of the corresponding breed

//get data from the api
componentDidMount() {
  const randomNumber = Math.floor(Math.random()*3)
  const randomBreed =  breeds[randomNumber]
  request
    .get(`https://dog.ceo/api/breed/${randomBreed}/images/random`)
    .then(breedImageUrl => this.updateImages(breedImageUrl.message))
    .catch(console.err)
}

updateImages(images) {
  this.setState({
    image: image
  })
}

//display the image
  render() {
    return (
      <img src={this.state.image} alt={this.props.randomBreed}>{this.props.randomBreed}</img>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    breeds: state.breeds,
    image: state.image
  }
}

export default connect(mapStateToProps)(DisplayImage)
  //2 breeds are incorrect
