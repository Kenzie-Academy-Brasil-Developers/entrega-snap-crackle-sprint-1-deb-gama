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
    let resultado = '';
   

  for (let i = 1; i <= maxValue; i++){
    
    if(ehImpar(i)=== true && multiploDeCinco(i)===true){
      resultado +='SnapCrackle, '
    }else if(multiploDeCinco(i) === true && ehImpar(i) === false){
      resultado += 'Crackle, '
    } else if(ehImpar(i) === true && multiploDeCinco(i) === false){
      resultado += 'Snap, '
    } else if(ehImpar(i) === false && multiploDeCinco(i) === false){
      resultado += i + ", "
    }
    
  }
    return resultado
}   