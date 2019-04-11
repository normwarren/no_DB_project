import React, { Component } from 'react'
import axios from 'axios'

import Profile from './Profile'
import CreateProfileForm from './CreateProfile'

export default class Profiles extends Component {
  constructor() {
    super()

    this.state = {
      profiles: []
    }
  }

componentDidMount() {
  axios.get('/api/profiles').then(res => {
    this.setState({
      profiles: res.data
    })
  }).catch(err => console.log('we have a problem:', err))
}

createProfile = (newProfile) => {
  axios.post('/api/profiles', newProfile).then(res => {
    this.setState({
      profiles: res.data
    })
  }).catch(err => console.log('we have a problem:', err))
}

updateProfile = (profile) => {
  axios.put(`/api/profiles/${profile.id}`, profile).then(res => {
    this.setState({
      profiles: res.data
    })
  }).catch(err => console.log('we have a problem:', err))
}

deleteProfile = (profile) => {
  axios.delete(`/api/profiles/${profile.id}`, profile).then(res => {
    this.setState({
      profiles: res.data
    })
  }).catch(err => console.log('we have a problem:', err))
}

render() {
  return(
    <div>
    <CreateProfileForm createProfile={this.createProfile}/>
    {this.state.profiles.map(profile => {
        return <Profile 
          key={profile.id}
          profile={profile}
          updateProfile={this.updateProfile}
          deleteProfile={this.deleteProfile}
          />
    })}
    </div>
  )
}
}