import firebase from '@react-native-firebase/app'

const config = {
  apiKey: 'AIzaSyCBFDS7IrjLacOo3c-g08RwzrYXxCgmzUg',
  authDomain: 'receitas-natalinas-android.firebaseapp.com',
  databaseURL: 'https://receitas-natalinas-android.firebaseio.com',
  projectId: 'receitas-natalinas-android',
  storageBucket: 'receitas-natalinas-android.appspot.com',
  messagingSenderId: '645409414274',
  appId: '1:645409414274:web:3005bbb238efc9c7b9289b',
  measurementId: 'G-L9GBH1HJYM',
}
if (!firebase.apps.length) {
  firebase.initializeApp(config)
}
export default firebase
