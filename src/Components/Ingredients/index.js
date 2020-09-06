import React from 'react'
import { View } from 'react-native'
import { Card, CardItem, Text } from 'native-base'

import styles from './styles'

const Ingredients = ({ ingredients }) => {
  return (
    <Card style={styles.card} transparent>
      <CardItem cardBody style={styles.cardItem}>
        <View style={styles.cardView}>
          <Text style={styles.title}>Ingredientes</Text>
          <View style={styles.ingredients}>
            {ingredients &&
              ingredients.map((ingredient, index) => (
                <Text style={styles.ingredient} key={index}>
                  - {ingredient.ingredient}
                </Text>
              ))}
          </View>
        </View>
      </CardItem>
    </Card>
  )
}

export default Ingredients
