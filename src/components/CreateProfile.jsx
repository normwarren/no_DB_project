import React, { Component } from 'react'

export default class CreateProfileForm extends Component {
  constructor() {
    super()

    this.state = {
      profileTitle: '', 
      profileIntro: '', 
      mugUrl: '',
      profileCost: 0, 
      profileRatings: 0
    }
  }
  handleChange = (e) => {
    let { value, name } = e.target
    this.setState({
      [name]: value
    })
  }

  handleClick = () => {
    let newProfile = this.state
    this.props.createProfile(newProfile)
  }

  render() {
    return(
      <div style={{border: '1px solid black', margin: 20}}>
        <input
        onChange={this.handleChange}
        name='profileTitle'
        type='text'
        placeholder='title'/>
        <input
        onChange={this.handleChange}
        name='profileIntro'
        type='text'
        placeholder='profileIntro'/>
                <input
        onChange={this.handleChange}
        name='mugUrl'
        type='text'
        placeholder='mugUrl'/>
                <input
        onChange={this.handleChange}
        name='profileCost'
        type='text'
        placeholder='cost'/>
                <input
        onChange={this.handleChange}
        name='profileRatings'
        type='text'
        placeholder='rates'/>
        <button onClick={this.handleClick}>add a profile</button>
      </div>
    )
  }
}