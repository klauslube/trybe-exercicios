const fs = require('fs').promises

function doMath(n1,n2,n3) {
  return new Promise((resolve, reject) => {
    if(typeof n1 != 'number' || typeof n2 != 'number' || typeof n3 != 'number') {
      return reject (new Error('Informe apenas números'));
    }
    const result = (n1 + n2) * n3;
    if(result < 50) {
      return reject (new Error('Valor muito baixo'));
    }
    if(result > 50) {
      return resolve (result);
    }
    if(typeof n1 == 'number' || typeof n2 == 'number' || typeof n3 == 'number') {
      return resolve ((n1 + n2)* n3);
    }
  })
}

doMath(10, 10, 10)
  .then((resolve) => console.log(resolve))
  .catch((error) => console.log(error.message));

doMath(1, 1, 'a')
  .then((resolve) => console.log(resolve))
  .catch((error) => console.log(error.message));

doMath(1, 1, 1)
  .then((resolve) => console.log(resolve))
  .catch((error) => console.log(error.message));