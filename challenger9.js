function getAverage(marks){
    let calc;
    for(let x = 0; x<= marks.length; x++){
      calc = calc + marks[x];
    }
    calc = calc/marks.length;
    return calc;
  }


  getAverage(2,2,2,2);