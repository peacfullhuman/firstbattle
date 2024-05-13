const redBtn = document.getElementById('firstBtn')
const blueBtn = document.getElementById('secondBtn')
const redImg = document.getElementById('firstImg')
const blueImg = document.getElementById('secondImg')

function swapPhotos(){

    let score = 2
    let number = ''

    redBtn.addEventListener('click', function(){
        score+=1
        number = redImg.src
        if (score == 9){
            show(number)
            score=8
        }else{
            blueImg.src=`images/${score}.png`
            console.log(number)
        }
    })

    blueBtn.addEventListener('click', function(){
        score+=1
        number = blueImg.src
        if (score == 9){
            show(number)
            score=8
        }else{
            console.log(number)
            redImg.src=`images/${score}.png`
        }
    })
}

function show(number){
    const winner = document.getElementById('winImg')
    const container = document.getElementById('cont')

    winner.src = number

    container.style.filter = 'blur(5px)'
    winner.style.display = 'block'

    console.log(number)
}

swapPhotos()