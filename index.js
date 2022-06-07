'use strict'
// Widgets

module.exports = async () => {
  return {
    widgets: {
      main: require('./widgets/main'),
      header: require('./widgets/header'),
      footer: require('./widgets/footer')
    },
    listeners: {
      increment: require('./listeners/increment'),
      decrement: require('./listeners/decrement'),
      newCounter: require("./listeners/newCounter"),
      deleteCounter: require("./listeners/deleteCounter"),
      onEnvStart: require('./listeners/onEnvStart'),
      onUserFirstJoin: require('./listeners/onUserFirstJoin')
    },
    rootWidget: 'main'
  }
}
