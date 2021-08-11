function ehImpar(num){
    if (num % 2 !== 0){
      return true;
    }
  return false;
}   


function multiploDeCinco(num){
    if (num % 5 === 0){
      return true;
    }
  return false;
}      

function ehPrimo(num){
    divisores = [];
  
    for(let i = 1; i <= num; i++){
      if (num % i === 0){
        divisores.push(i)
      }
      if(divisores.length > 2){
        return false;
      }
    }
  return true;
}


  function snapCrackle(maxValue){
    let arr = [];
  
    for (let i = 1; i <= maxValue; i++){
      let resultado = '';
      
      if(ehImpar(i)=== true && multiploDeCinco(i)===true){
        resultado +='SnapCrackle'
      }
      if(multiploDeCinco(i) === true && ehImpar(i) === false){
        resultado += 'Crackle'
      }
      if(ehImpar(i) === true && multiploDeCinco(i) === false){
        resultado += 'Snap'
      }
      if(ehImpar(i) === false && multiploDeCinco(i) === false){
        resultado += i 
      }
      
      arr.push(resultado)
    }
    
    return arr.join(', ')
  }   
  
  function snapCracklePrime(maxValue){
    let arr = [];
  
    for (let i = 1; i <= maxValue; i++){
      let resultado = '';
      
      if(ehImpar(i)=== true && multiploDeCinco(i)===true){
        resultado +='SnapCrackle'
      }
      if(multiploDeCinco(i) === true && ehImpar(i) === false){
        resultado += 'Crackle'
      }
      if(ehImpar(i) === true && multiploDeCinco(i) === false){
        resultado += 'Snap'
      }
      if (ehPrimo(i) === true && i > 1){
        resultado += 'Prime'
      }
      if(ehImpar(i) === false && multiploDeCinco(i) === false && ehPrimo(i) === false){
        resultado += i 
      }
      
      arr.push(resultado)
    }
  
    return arr.join(', ')
  }   