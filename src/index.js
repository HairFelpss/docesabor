import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'

import CodePush from 'react-native-code-push'
import OneSignal from 'react-native-onesignal'

import Routes from './routes'

class App extends Component {
  constructor(props) {
    super(props)
    Icon.loadFont()

    OneSignal.init('9c85bb98-2607-4e1a-ac46-6373bbc6a28c')

    OneSignal.addEventListener('received', this.onReceived)
    OneSignal.addEventListener('opened', this.onOpened)
    OneSignal.addEventListener('ids', this.onIds)
  }

  componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived)
    OneSignal.removeEventListener('opened', this.onOpened)
    OneSignal.removeEventListener('ids', this.onIds)
  }

  onReceived = (data) => {}

  onOpened = (notification) => {}

  onIds = (id) => {}

  render() {
    return (
      <>
        <Routes />
      </>
    )
  }
}

export default CodePush({
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
})(App)
