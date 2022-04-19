/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
const img = '/to-do-notifications/img/icon-128.png'
const text = `HEY! Your task "test" is now overdue.`
const notificationBody = new Notification('To do list', {
  body: text,
  icon: img,
})

function notifyMe(): void {
  // Let's check if the browser supports notifications
  console.log(Notification.permission)
  if (!('Notification' in window)) {
    console.log('This browser does not support desktop notification')
  }

  // Let's check whether notification permissions have alredy been granted
  else if (Notification.permission === 'granted') {
    // If it's okay let's create a notification
    const notification = new Notification('To do list', {
      body: text,
      icon: img,
    })
  }
  // Otherwise, we need to ask the user for permission
  else if (Notification.permission !== 'denied') {
    Notification.requestPermission((permission) => {
      // If the user accepts, let's create a notification
      if (permission === 'granted') {
        const notification = new Notification('To do list', {
          body: text,
          icon: img,
        })
      }
    })
  }

  // At last, if the user has denied notifications, and you
  // want to be respectful there is no need to bother them any more.
}

export default notifyMe
