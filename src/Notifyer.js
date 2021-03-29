export const Notifyer = {
  async init() {
    const permission = await Notification.requestPermission()
    if (permission !== 'granted') {
      throw new Error('Permissão negada')
    }
  },

  notify({ title, body, icon }) {
    return () => new Notification(title, {
      body,
      icon
    })
  },

  notifyWithRandomMessage({ title, messages, icon }) {
    return () => {
      const messageIndex = Math.floor(Math.random() * messages.length)

      new Notification(title, {
        body: messages[messageIndex],
        icon
      })
    }
  }
}