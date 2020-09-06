import { StyleSheet } from 'react-native'
import { colors, metrics } from '../../styles'

const styles = StyleSheet.create({
  card: {
    width: metrics.screenWidth - 20,
  },
  cardItem: {
    backgroundColor: colors.quaternary,
    borderRadius: 15,
    margin: metrics.baseMargin / 2,
  },
  cardView: {
    flex: 1,
    marginVertical: metrics.baseHeight / 4,
    marginHorizontal: metrics.baseMargin / 2,
  },
  title: {
    textAlign: 'center',
    marginHorizontal: metrics.baseMargin,
    paddingBottom: metrics.baseHeight / 4,
    fontWeight: 'bold',
    fontSize: 18,
  },
  step: {
    marginHorizontal: metrics.baseMargin,
    marginVertical: metrics.baseMargin / 2,
    textAlign: 'justify',
  },
})

export default styles
