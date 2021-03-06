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
  },
  {
    id: id++,
    profileTitle: 'Data Pro',
    profileIntro: '5 years experience implementing data warehouse in the cloud.',
    mugUrl: 'https://github.com/normwarren/images/blob/master/DataWarehouseGuy.png?raw=true ',
    profileCost: 35,
    profileRatings: 5, 
    numRatings: 2,
  }
]
module.exports = {

  get: (req, res, next) => {

    let newProfiles = profiles;
    if(req.query.profileTitle) {
      newProfiles = profiles.filter( function(el){
        return el.profileTitle === req.query.profileTitle;
      })
      res.send(newProfiles)
    } else {res.send(profiles)}
    
  },

  create: (req, res) => {
    let newProfile = req.body
    newProfile.id = id++

    profiles.push(newProfile)
    res.status(200).send(profiles)
  },

  update: (req, res) => {
    let { id } = req.params
    let updateProfile = req.body
    updateProfile.id = id

    let index = profiles.findIndex(a => +a.id === +id)
    
    profiles.splice(index, 1, updateProfile)
    res.status(200).send(profiles)
  },
  delete: (req, res) => {
    let { id } = req.params
    let updateProfile = req.body
    updateProfile.id = id

    let index = profiles.findIndex(a => +a.id === +id)
    
    profiles.splice(index, 1)
    res.status(200).send(profiles)
  }

  }