import { StyleSheet } from 'react-native'
import { colors, metrics } from '../../styles'

const styles = StyleSheet.create({
  card: {
    width: metrics.screenWidth - 20,
  },
  cardItem: {
    backgroundColor: colors.quaternary,
    borderRadius: 15,
  },
  img: {
    height: 160,
    width: 150,
    borderBottomLeftRadius: 15,
    borderTopLeftRadius: 15,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginHorizontal: metrics.baseMargin,
    marginVertical: metrics.baseMargin / 2,
  },
  intro: {
    marginHorizontal: metrics.baseMargin,
    marginVertical: metrics.baseMargin,
  },
  introText: {
    fontSize: 16,
  },
  icon: {
    fontSize: 20,
    color: colors.primary,
  },
})

export default styles
