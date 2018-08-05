const bpm = document.getElementById('rangeBPM')       
const h1 = document.getElementById('bpm')
const play = document.getElementById('Play')
const audio = document.getElementById('audioMetro')

let currentBpm = 40
let isPlaying = false
let timer = null

function tick(){
    audio.currentTime = 0
    audio.play()
}

bpm.addEventListener('change', function(){
    h1.innerHTML = this.value + ' bpm'
    // console.log(this.value)
    currentBpm = parseInt(this.value)
    if(isPlaying){
        clearInterval(timer)
        timer = setInterval(tick, (60*1000)/currentBpm)
    }
})

play.addEventListener('click', function(){
    if(isPlaying){
        play.innerHTML = 'Play'
        clearInterval(timer)
    }else{
        play.innerHTML = 'Stop'
        tick()
        timer = setInterval(tick, (60*1000)/currentBpm)
    }
    isPlaying = !isPlaying
})