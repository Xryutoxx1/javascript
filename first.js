function lowercaseCount(str) {
    let arrai = str.split('');
    let contador = 0;
  
    for (let i = 0; i < arrai.length; i++) {
      console.log(arrai[i]);
      if (isNaN(arrai[i])) {
        if (arrai[i].toUpperCase() !== arrai[i]) {
          contador++;
          console.log(contador);
        }
      }
    }
  
    return contador;
  }
  