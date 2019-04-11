let id = 1
let profiles = [
  {
    id: id++,
    profileLabel: 'Entrepreneur',
    profileIntro: 'Managed customer base and grew business from 100 customers to 250',
    mugUrl: 'https://udemy-images.udemy.com/course/750x422/715660_7d08_2.jpg'
  },
  {
    id: id++,
    profileLabel: 'CEO',
    profileIntro: 'Highly proficient negotiation and persuasion skills make it easy to come to agreements and persuade people, organizations, and vendors to meet the company in the middle.',
    mugUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgzAP0pajttETufh3jUPenUNDJ7UwAN6aoHhBV71SagTop2gxU'
  }
]
module.exports = {
  get: (req, res) => res.send(profiles),

  create: (req, res) => {
    let newProfile = req.body
    newProfile.id = id++

    profiles.push(newProfile)
    res.send(profiles)
  }
  }