var btnPlus = document.querySelectorAll('.btnPlus')

for (let i = 0; i<btnPlus.length; i++){
    btnPlus[i].addEventListener('click',function(){

        btnPlus[i].previousElementSibling.innerText++

        sum()

    })
}




var btnMoins = document.querySelectorAll('.btnMoins')

for(let i = 0; i<btnMoins.length; i++){

    btnMoins[i].addEventListener('click', function(){

        if(btnMoins[i].nextElementSibling.innerText>0){

            btnMoins[i].nextElementSibling.innerText--

            sum()

        }

    })
}

var trash= document.querySelectorAll('.fa-trash')
console.log(trash)

for(let i = 0; i<trash.length; i++){

    trash[i].addEventListener('click',function(){

        trash[i].parentElement.remove()
        console.log(trash)
        sum()

    })

}

var heart= document.querySelectorAll('.fa-heart')

for (let i = 0; i < heart.length; i++) {
    
    heart[i].addEventListener('click',function(){

        heart[i].classList.toggle("ahmer") 

    })
    
}

 

function sum(){

    var total = document.getElementById('Total')
    var price = document.querySelectorAll('.price')
    var qtté = document.querySelectorAll('.qtté')

    var tot = 0
    for (let i = 0; i < price.length; i++) {
        
        tot += price[i].innerText*qtté[i].innerText
        
    }

    total.innerText = tot
  

}