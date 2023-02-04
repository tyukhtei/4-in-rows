let field = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
]

let greenBackground = document.querySelector('.greenBackground')
let blueBackground = document.querySelector('.blueBackground')
let gameFieldHTML = document.querySelector('.gameField')
let winnerField = document.querySelector('.winnerField')
let winner = document.querySelector('.winner')

let colorCount = 0

for (let i = 0; i < field.length; i++){
    for (let n = 0; n < field[i].length; n++){

        gameFieldHTML.innerHTML += '<div class="cell" onclick="insertToken(this.id)" id='+i+','+n+'>\n' +
                                        '<div class="hole">\n'+
                                        '</div>\n' +
                                    '</div>'
    }
}


function start(){
    field = [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0]
    ]
        console.log(field)

    for(let b = 0; b < field.length; b++){
        for(let c = 0; c < field.length; c++){
            document.getElementById(+b+','+c).classList.remove('green')
            document.getElementById(+b+','+c).classList.remove('blue')
        }
    }


    winnerField.style.display = 'none'
}

function insertToken(id) {
    let numberAfter = id.split(",")[1]

    for (let j = field.length-1; j >= 0; j--){
        let column = document.getElementById(j+','+numberAfter)

        if (!column.classList.contains('green') && !column.classList.contains('blue')){
            colorCount++

            if (colorCount % 2){
                column.classList.add('green')
                field[j][numberAfter] = 'g'
                greenBackground.style.width = '0'
                blueBackground.style.width = '100%'
                checkTheVictory()
                break
            }
            else{
                column.classList.add('blue')
                field[j][numberAfter] = 'b'
                greenBackground.style.width = '100%'
                blueBackground.style.width = '0'
                checkTheVictory()
                break
            }
        }
    }

}

function checkTheVictory(){
    for (let v = 0; v < field.length; v++){
        for (let m = 3; m < field[v].length; m++){
            if (field[v][m] != 0){
                if (field[v][m] == field[v][m-1] && field[v][m-1] == field[v][m-2] && field[v][m-2] == field[v][m-3]){
                    if(field[v][m] == 'b'){
                        blueWin()
                    }
                    else{
                        greenWin()
                    }
                }
            }
        }
    }

    for (let q = 3; q < field.length; q++){
        for (let r = 0; r < field[q].length; r++){
            if (field[q][r] != 0){
                if (field[q][r] == field[q-1][r] && field[q-1][r] == field[q-2][r] && field[q-2][r] == field[q-3][r]){
                    if(field[q][r] == 'b'){
                        blueWin()
                    }
                    else{
                        greenWin()
                    }
                }
            }
        }
    }

    for (let t = 3; t < field.length; t++){
        for (let u = 3; u < field[t].length; u++){
            if (field[t][u] != 0){
                if (field[t][u] == field[t-1][u-1] && field[t-1][u-1] == field[t-2][u-2] && field[t-2][u-2] == field[t-3][u-3]){
                    if(field[t][u] == 'b'){
                        blueWin()
                    }
                    else{
                        greenWin()
                    }
                }
            }
        }
    }

    for (let k = field.length-4; k >= 0; k--){
        for (let p = 3; p < field[k].length; p++){
            if (field[k][p] != 0){
                if (field[k][p] == field[k+1][p-1] && field[k+1][p-1] == field[k+2][p-2] && field[k+2][p-2] == field[k+3][p-3]){
                    if(field[k][p] == 'b'){
                        blueWin()
                    }
                    else{
                        greenWin()
                    }
                }
            }
        }
    }
}

function blueWin() {
    winnerField.style.display = 'flex'
    winner.style.boxShadow = '0 0 10px 2px aqua'
    winner.style.color = 'aqua'
    winner.innerHTML = 'Синие победили!\n<button class="winBtn" onclick="start()">сначала</button>'
}

function greenWin() {
    winnerField.style.display = 'flex'
    winner.style.boxShadow = '0 0 10px 2px #4dff4d'
    winner.style.color = '#4dff4d'
    winner.innerHTML ='Зеленые победили!\n<button class="winBtn" onclick="start()">сначала</button>'
}