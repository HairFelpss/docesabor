import { StyleSheet } from 'react-native'
import { colors, metrics } from '../../styles'

const styles = StyleSheet.create({
  card: {
    width: metrics.screenWidth / 2 - 15,
    paddingHorizontal: 3,
    paddingBottom: 15,
  },
  img: {
    height: 110,
    flex: 1,
  },
  title: {
    color: '#232323',
    textAlign: 'left',
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    paddingLeft: 2,
  },
  carditem: {
    height: 25,
  },
})

export default styles
