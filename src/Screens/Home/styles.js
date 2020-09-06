import { StyleSheet } from 'react-native'
import { colors, metrics } from '../../styles'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
  content: {
    marginHorizontal: metrics.baseMargin * 1.5,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 25,
    paddingTop: 10,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 15,
    paddingTop: 5,
    paddingBottom: 5,
  },
})

export default styles
