import { View } from './View.js'
import { Emitter } from './Emitter.js'

export const Timer = {
  time: 60 * 60,
  currentTime: 0,
  interval: null,

  timeToMinutes: time => Math.floor(time / 60),
  timeToSeconds: time => time % 60,

  formatTime: time => String(time).padStart(2, '0'),

  init(time) {
    Emitter.emit('countdown-start')
    Timer.time = time || Timer.time
    Timer.currentTime = Timer.time
    Timer.interval = setInterval(Timer.update, 1000)
  },

  update() {
    Timer.countdown()
    Timer.render()
  },

  countdown() {
    Timer.currentTime -= 1    

    if (Timer.currentTime === 0) {
      clearInterval(Timer.interval)
      Emitter.emit('countdown-end')
    }
  },

  render() {
    const minutes = Timer.formatTime(Timer.timeToMinutes(Timer.currentTime))
    const seconds = Timer.formatTime(Timer.timeToSeconds(Timer.currentTime))

    View.render({
      minutes,
      seconds
    })
  }
}