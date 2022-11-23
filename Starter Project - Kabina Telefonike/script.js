const acc = document.getElementById('llogaria')

let balanci = 0

acc.innerText = 'Llogaria $' + balanci

let koha

function addcredit() {
    const input = document.getElementById('mbushje')
    const vlera = input.value
    balanci += parseInt(vlera);
    acc.innerText = "Llogaria $" + balanci
}

function call() {
  const numberInput = document.getElementById('number')
  const number = numberInput.value.split(' ').join('')

  if (!number) {
    return alert('Shkruani numrin qe doni te therritni')
  }

  if ((number.startsWith('044') || number.startsWith('049')) && number.length === 9) {
    koha = setInterval(function() {
    if(balanci > 0) {
      balanci -= 1
      acc.innerText = 'Llogaria $' + balanci
    } else {
      balanci = 0
      nocredit('Linja eshte shkeput per shkak te llogaris tuaj')
      acc.innerText = 'Llogaria $' + balanci
    }
}, 1000)

  } else if (number.startsWith('+1') && number.length === 12) {
    koha = setInterval(function() {
      if(balanci > 1) {
      balanci -=2
      acc.innerText = 'Llogaria $' + balanci

      } else {
        balanci = 0
        alert('Ju nuk keni kredi te mjaftueshme')
      acc.innerText = 'Llogaria $' + balanci
      end()
      }
    }, 1000)
    
  } else {
    return alert('Ky numer nuk ekziston')
  }
}

function end() {
  clearInterval(koha)
}

function endcall() {
  clearInterval(koha)
  alert('Ju keni shkeputur linjen')
}

