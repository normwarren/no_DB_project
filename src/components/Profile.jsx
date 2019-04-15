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
      <table className='ProfileTable' style={{width: '100%',  cellpadding: 4}}>
      <tbody>
        <tr>
            <td width="10%"> <div><b>{profile.profileTitle}</b></div>
              <div>
              	<img src={profile.mugUrl} alt="profile_image" width="150"/>
              </div>
              
              <button backgroundColor="rgb(150, 182, 204)" onClick={this.toggleEdit}>Edit</button>
              <button onClick={this.handleClick}>Delete</button>
            </td>
            <td className="profileIntro" width="60%"><div>
              {profile.profileIntro}
            </div> </td>
            <td width="5%">{profile.profileCost} </td>
            <td width="7%">{profile.profileRatings} </td>
        </tr>
        
      </tbody>
      </table>
      </div>
    )
  }
}