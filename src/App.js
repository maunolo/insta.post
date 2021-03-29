import { Notifyer } from './Notifyer.js'
import { Timer } from './Timer.js'
import { Emitter } from './Emitter.js'

const notify = Notifyer.notifyWithRandomMessage({
  title: 'Hora do Post',
  messages: [
    'Crie', 'De o cu', 'pode pa'
  ]
})

export const App = {
  async start() {
    try {
      await Notifyer.init()

      Emitter.on('countdown-start', notify)

      Emitter.on('countdown-end', Timer.init)

      Timer.init(10 * 60)
    } catch (err) {
      console.log(err.message)
    }
  }
}
