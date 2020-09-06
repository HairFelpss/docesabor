import React from 'react'
import { Card, CardItem, Thumbnail, Text, Button } from 'native-base'
import { useNavigation } from '@react-navigation/native'
import styles from './styles'

const RecipeCard = ({ name, photo }) => {
  const navigation = useNavigation()
  return (
    <Card style={styles.card} transparent>
      <CardItem
        cardBody
        button
        onPress={() => navigation.navigate('RecipeList', { title: name })}
      >
        <Thumbnail square source={{ uri: photo }} style={styles.img} />
      </CardItem>
      <Button style={styles.carditem} transparent>
        <Text style={styles.title}>{name}</Text>
      </Button>
    </Card>
  )
}

export default RecipeCard
