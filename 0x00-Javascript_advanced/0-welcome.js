function welcome(firstName, lastName) {
  let fullName = ''
  let space = ' '
  let excl = '!'

  fullName = fullName + firstName + space + lastName;
  function displayFullName(fName) {
    let welStr = 'Welcome' + space + fName + excl;
    alert(welStr)
  }
  displayFullName(fullName)
}
welcome('Holberton', 'School')
