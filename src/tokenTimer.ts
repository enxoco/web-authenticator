
function Timer(runningTime: number, secondsTillExpiration: number) {

const color = 'cream'
  return (
    `<div class="timer" style="background: conic-gradient(transparent ${(100 / 30) * runningTime}%, gainsboro 0)">
      ${secondsTillExpiration}
    </div>`
  )
}

export default Timer
