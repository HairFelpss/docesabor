import { StyleSheet } from 'react-native'
import { colors, metrics } from '../../styles'

const styles = StyleSheet.create({
  card: {
    width: metrics.screenWidth / 1.3,
  },
  cardItem: {
    backgroundColor: colors.quaternary,
    borderRadius: 15,
    margin: metrics.baseMargin / 2,
  },
  cardView: {
    marginVertical: metrics.baseHeight / 4,
    marginHorizontal: metrics.baseMargin / 2,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
  },
  ingredients: {
    marginVertical: metrics.baseHeight / 3,
  },
  ingredient: {
    marginHorizontal: metrics.baseMargin * 2,
    textAlign: 'justify',
    fontSize: 12,
  },
})

export default styles
