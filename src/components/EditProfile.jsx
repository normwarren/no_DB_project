import React, { Component } from 'react'

export default class EditProfileForm extends Component {
  constructor(props) {
    super(props)  

    this.state = {
      profileTitle: props.profile.profileTitle, 
      profileIntro: props.profile.profileIntro, 
      mugUrl: props.profile.mugUrl,
      profileCost: props.profile.profileCost, 
      profileRatings: props.profile.profileRatings
    }
  }
  handleChange = (e) => {
    let { value, name } = e.target
    this.setState({
      [name]: value
    })
  }

  handleClick = () => {
    let profile = {...this.props.profile, ...this.state}
    this.props.updateProfile(profile)
  }

  render() {
    return(
      <div style={{border: '1px solid black', margin: 20}}>
        <input
        onChange={this.handleChange}
        name='profileTitle'
        type='text'
        value={this.state.profileTitle}
        placeholder='title'/>
        <input
        onChange={this.handleChange}
        name='profileIntro'
        type='text'
        value={this.state.profileIntro}
        placeholder='profileIntro'/>
                <input
        onChange={this.handleChange}
        name='mugUrl'
        type='text'
        value={this.state.mugUrl}
        placeholder='mugUrl'/>
                <input
        onChange={this.handleChange}
        name='profileCost'
        type='text'
        value={this.state.profileCost}
        placeholder='cost'/>
                <input
        onChange={this.handleChange}
        name='profileRatings'
        type='text'
        value={this.state.profileRatings}
        placeholder='rates'/>
        <button onClick={this.handleClick}>edit profile</button>
      </div>
    )
  }
}