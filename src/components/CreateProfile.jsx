import React, { Component } from 'react'

export default class CreateProfileForm extends Component {
  constructor() {
    super()

    this.state = {
      title: '', 
      intro: '', 
      mugUrl: '',
      cost: 0, 
      rates: 0
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
        name='title'
        type='text'
        placeholder='title'/>
        <input
        onChange={this.handleChange}
        name='intro'
        type='text'
        placeholder='intro'/>
                <input
        onChange={this.handleChange}
        name='mugUrl'
        type='text'
        placeholder='mugUrl'/>
                <input
        onChange={this.handleChange}
        name='cost'
        type='text'
        placeholder='cost'/>
                <input
        onChange={this.handleChange}
        name='rates'
        type='text'
        placeholder='rates'/>
        <button onClick={this.handleClick}>add a profile</button>
      </div>
    )
  }
}