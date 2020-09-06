import { StyleSheet, Dimensions } from 'react-native'
import { colors, metrics } from '../../styles'

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#23232326',
  },
  img: {
    flex: 1,
    width,
    height: height / 3.5,
  },
  bgText: {
    backgroundColor: '#0000004D',
    height: height / 10,
    position: 'absolute',
    top: 150,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  title: {
    paddingLeft: 15,
    color: colors.light,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  qtYield: {
    paddingLeft: 15,
    color: colors.light,
    fontSize: 14,
  },
  icon: {
    color: colors.quaternary,
    fontSize: 16,
  },
  viewIngredients: {
    paddingTop: metrics.baseHeight / 2,
    marginHorizontal: metrics.baseMargin * 5,
  },
  viewPreparation: {
    marginHorizontal: metrics.baseMargin,
  },
  preparationMode: {
    textAlign: 'center',
    fontSize: 22,
    paddingVertical: metrics.baseHeight / 2.5,
  },
})

export default styles
