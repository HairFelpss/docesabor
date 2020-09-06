import React from 'react'
import { Card, CardItem, Body, Text, Icon, View } from 'native-base'
import { useNavigation } from '@react-navigation/native'
import FastImage from 'react-native-fast-image'

import styles from './styles'

const CardForList = ({ name, title, photo, id, rating, time, labels }) => {
  const navigation = useNavigation()

  return (
    <Card style={styles.card} transparent>
      <CardItem
        cardBody
        style={styles.cardItem}
        button
        onPress={() => navigation.navigate('Recipe', { id })}
      >
        <FastImage
          square
          source={{ uri: photo.replace('small_list', 'original') }}
          style={styles.img}
        />
        <Body>
          <Text style={styles.title}>{name}</Text>
          <View style={styles.intro}>
            <Text style={styles.introText} note>
              <Icon name="alarm-outline" style={styles.icon} /> {time}
            </Text>
            <Text style={styles.introText} note>
              <Icon name="restaurant-outline" style={styles.icon} /> {labels}
            </Text>
          </View>
        </Body>
      </CardItem>
    </Card>
  )
}

export default CardForList
