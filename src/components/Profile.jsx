import React, { Component } from 'react'

export default class Profile extends Component {

  render() {
      let { profile } = this.props
    return(
      <div style={{border: '1px solid #eee', margin: 10}}>
       <img src={profile.mugUrl} alt="profile_image" width="200"/>
        <p>Profile Title: {profile.title} </p>
        <p>Profile Intro: {profile.intro} </p>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    )
  }
}