let globalVariable = 'Welcome ';
function outer(gV) {
  alert(gV);
  let course = 'Holberton';
  function inner(global, coursE) {
    alert(global + coursE)
    let exclamation = '!';
    function inception (g, c, e) {
      alert(g + c + e);
    }
    inception(global, coursE, exclamation);
  }
  inner(gV, course);
}
outer(globalVariable);
