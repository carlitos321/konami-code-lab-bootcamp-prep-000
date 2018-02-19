const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

const body = document.querySelector('body')

function init() {
<<<<<<< HEAD
  let index = 0;

  document.body.addEventListener('keydown', function(e) {
    const key = parseInt(e.which || e.detail);

    if (code[index] === key) {
      index++;

      if (index === code.length) {
        alert('Hurray!');

        index = 0;
      }
    } else {
      index = 0;
    }
  });
=======
  body.addEventListener('keydown', function(e) {
    // if user types the code in order, then send x alert
    const key = parseInt(e.detail || e.which);

    for (let i = 0, l = code.length; i < l; i++) {
      console.log(code[i])
    }
  } )

>>>>>>> 7fc23a676c99d27b4d4fd599706c2a1d29be4e18
}
