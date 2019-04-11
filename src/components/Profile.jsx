import React, { Component } from 'react'

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

  render() {
      let { profile } = this.props
    return(
      
      <div style={{border: '1px solid #eee', margin: 10}}>
       <img src={profile.mugUrl} alt="profile_image" width="200"/>
        <p>Profile Title: {profile.profileTitle} </p>
        <p>Profile Intro: {profile.profileIntro} </p>
        <p>Mentor Cost: {profile.profileCost} </p>
        <p>Profile Ratings: {profile.profileRatings} </p>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    )
  }
}