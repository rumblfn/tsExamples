enum Membership {
    Simple,
    Standart,
    Premium
}

const membership = Membership.Standart
const membershipReverse = Membership[2]
console.log(membership)

enum SocialMedia {
    VK = 'VK',
    FACEBOOK = 'FACEBOOK',
    INSTGRAM = 'INSTGRAM'
}

const social = SocialMedia.VK