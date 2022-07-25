let user = {
  hobby: 'Caligraphy',
  favoriteSport: 'Hockey',
  astrologicalSign: 'Aries',
  firstName: 'Buillaume',
  lastName: 'Ialva',
  location: 'Telaviv',
  occupation: 'Engineer'
};
function logWelcomeUser (welcomString) {
  console.log(welcomString + ', ' + this.firstName + '. Your occupation is: ' + this.occupation);
}
let bindLogWelcomeUser = logWelcomeUser.bind(user);
bindLogWelcomeUser('Welcome');
