function welcomeMessage(fullName) {
  return (() => {
    alert(fullName);
  });
}

let guillaume = welcomeMessage('Guillaume');
let alex = welcomeMessage('Alex');
let fred = welcomeMessage('Fred');
