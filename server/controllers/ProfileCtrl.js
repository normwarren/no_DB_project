let id = 1
let profiles = [
  {
    id: id++,
    profileTitle: 'Entrepreneur',
    profileIntro: 'Managed customer base and grew business from 100 customers to 250',
    mugUrl: 'https://udemy-images.udemy.com/course/750x422/715660_7d08_2.jpg', 
    profileCost: 20,
    profileRatings: 0,
    numRatings: 0
  },
  {
    id: id++,
    profileTitle: 'CEO',
    profileIntro: 'Highly proficient negotiation and persuasion skills make it easy to come to agreements and persuade people, organizations, and vendors to meet the company in the middle.',
    mugUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgzAP0pajttETufh3jUPenUNDJ7UwAN6aoHhBV71SagTop2gxU',
    profileCost: 28,
    profileRatings: 5, 
    numRatings: 2,
  }
]
module.exports = {
  get: (req, res) => res.send(profiles),

  create: (req, res) => {
    let newProfile = req.body
    newProfile.id = id++

    profiles.push(newProfile)
    res.send(profiles)
  },
  update: (req, res) => {
    //console.log(req.params)
    let { id } = req.params
    let updateProfile = req.body
    updateProfile.id = id
    //console.log(updateProfile.id)

    let index = profiles.findIndex(a => +a.id === +id)
    
    profiles.splice(index, 1, updateProfile)
    res.send(profiles)
  }
  }