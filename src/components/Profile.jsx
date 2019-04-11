import React, { Component } from 'react'
import EditProfileForm from './EditProfile'

export default class Profile extends Component {
  constructor(){
    super()

    this.state = {
      edit: false
    }
  }

  toggleEdit = () => {
    this.setState({
      edit: !this.state.edit 
    })
  }
  handleClick = () => {
    let { profile } = this.props
    this.props.deleteProfile(profile)
  }

  render() {
    console.log(this.props)
      let { profile } = this.props
    return(
        this.state.edit ? 
        <EditProfileForm profile = {profile} updateProfile = {this.props.updateProfile}/>
        :
      <div style={{border: '1px solid #eee', margin: 10}}>
       <img src={profile.mugUrl} alt="profile_image" width="200"/>
        <p>Profile Title: {profile.profileTitle} </p>
        <p>Profile Intro: {profile.profileIntro} </p>
        <p>Mentor Cost: {profile.profileCost} </p>
        <p>Profile Ratings: {profile.profileRatings} </p>
        <button onClick={this.toggleEdit}>Edit</button>
        <button onClick={() => this.handleClick()}>Delete</button>
      </div>
    )
  }
}