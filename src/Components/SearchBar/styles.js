import { StyleSheet, Platform } from 'react-native'
import { colors, metrics } from '../../styles'

const styles = StyleSheet.create({
  headerHome: {
    backgroundColor: colors.secondary,
    height: metrics.baseHeight * 1.6,
  },
  header: {
    backgroundColor: colors.secondary,
  },
  itemStyle: {
    marginLeft: metrics.baseMargin * 5,
    marginRight: metrics.baseMargin * 5,
    height: metrics.baseHeight,
    borderRadius: metrics.baseRadius * 6,
    paddingLeft: metrics.basePadding,
  },
  btn: {
    height: metrics.baseHeight,
    width: metrics.baseWidth * 2,
    marginTop: Platform.OS === 'ios' ? 1 : null,
    backgroundColor: colors.primary,
    borderTopRightRadius: metrics.baseRadius * 6,
    borderBottomRightRadius: metrics.baseRadius * 6,
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0,
  },
  headerWithoutSearchBody: {
    color: colors.quaternary,
  },
  icon: {
    width: 45,
  },
})

export default styles
