import * as React from 'react'

export default function DisplayContent(props) {
  return (
    <div>
      <img src={this.state.image} alt="dog"></img>
      <li text={this.state.breeds[0]}></li>
      <li text={this.state.breeds[1]}></li>
      <li text={this.state.breeds[2]}></li>
    </div>
  )
}
