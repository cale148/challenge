function BaseSocialNetwork (data) {
  this.id = data.id
  this.name = data.name
}
BaseSocialNetwork.prototype.constructor = BaseSocialNetwork

BaseSocialNetwork.prototype.getInfo = function () {
  console.log('this:', this)
}

// Kinder

function SocialNetworkWithTextField (data) {
  BaseSocialNetwork.call(this, data)
  this.text = data.text
}

SocialNetworkWithTextField.prototype = Object.create(BaseSocialNetwork.prototype)

SocialNetworkWithTextField.prototype.constructor = SocialNetworkWithTextField

function FacebookSocialNetwork (data) {
  SocialNetworkWithTextField.call(this, data)
  this.likes = data.likes
}

FacebookSocialNetwork.prototype = Object.create(SocialNetworkWithTextField.prototype)

FacebookSocialNetwork.prototype.constructor = FacebookSocialNetwork

function GooglePlusSocialNetwork (data) {
  SocialNetworkWithTextField.call(this, data)
  this.plus = data.plus
}

GooglePlusSocialNetwork.prototype = Object.create(SocialNetworkWithTextField.prototype)

GooglePlusSocialNetwork.prototype.constructor = GooglePlusSocialNetwork

function InstagramSocialNetwork (data) {
  BaseSocialNetwork.call(this, data)
  this.image = data.image
}

InstagramSocialNetwork.prototype = Object.create(BaseSocialNetwork.prototype)

InstagramSocialNetwork.prototype.constructor = InstagramSocialNetwork

// Usage

var sourceData = [{
  "id": "51F361A4-08A4-4113-8045-9B09F84572FF",
  "name": "facebook",
  "text": "Facebook Lorem Ipsum Dolor",
  "likes": 91
}, {
  "id": "8994458D-28E0-4925-82B3-83E9BB05906D",
  "name": "google",
  "text": "Google+ Lorem Ipsum Dolor",
  "plus": 101
}, {
  "id": "6EA36600-D130-472A-87C8-124EB27B4BD2",
  "name": "instagram",
  "image": {
    "caption": "new picture",
    "url": "//new-picture.jpg"
  }
}]

var socialNetworkMap = {
  facebook: FacebookSocialNetwork,
  google: GooglePlusSocialNetwork,
  instagram: InstagramSocialNetwork
}

var socialNetworks = []

sourceData.forEach(function (data) {
  socialNetworks.push(new socialNetworkMap[data.name](data))
})

socialNetworks.forEach(function (network) {
  network.getInfo()
})
