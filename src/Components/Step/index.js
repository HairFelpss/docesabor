import React from 'react'
import { View } from 'react-native'
import { Card, CardItem, Text } from 'native-base'

import styles from './styles'

const Step = ({ step, number }) => {
  return (
    <Card style={styles.card} transparent>
      <CardItem cardBody style={styles.cardItem}>
        <View style={styles.cardView}>
          <Text style={styles.title}>Passo {number + 1}:</Text>
          <Text style={styles.step}>{step.step}</Text>
        </View>
      </CardItem>
    </Card>
  )
}

export default Step
