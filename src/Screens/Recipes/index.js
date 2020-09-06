import React, { useState, useEffect } from 'react'
import { View, Image } from 'react-native'
import { Container, Content, Text, Icon } from 'native-base'
import { AdEventType } from '@react-native-firebase/admob'
import FastImage from 'react-native-fast-image'

import { getRecipe } from '../../services/recipes'

import { interstitial } from '../../config/ads'

import styles from './styles'

import SearchBar from '../../Components/SearchBar'
import Step from '../../Components/Step'
import Ingredients from '../../Components/Ingredients'

const Recipe = ({ route, navigation }) => {
  const [id] = useState(route.params.id)
  const [recipe, setRecipe] = useState({
    name: '',
    servings_label: '',
    steps: '',
    image_url: null,
    preparation_time: '',
  })
  const [instructions, setIntructions] = useState([])
  const [ingredientsArr, setIngredients] = useState([])

  const handleGetRecipe = async () => {
    const {
      name,
      servings_label,
      image_url,
      steps,
      ingredients,
      preparation_time,
    } = await getRecipe(id)

    setIngredients(ingredients)
    setIntructions(steps)
    setRecipe({
      name,
      servings_label,
      image_url,
      preparation_time,
    })
  }

  useEffect(() => {
    handleGetRecipe()

    const eventListener = interstitial.onAdEvent((type) => {
      if (type === AdEventType.LOADED) {
        interstitial.show({
          immersiveModeEnabled: true,
        })
      }
    })
    interstitial.load()

    return () => {
      eventListener()
    }
  }, [])

  return (
    <Container style={styles.container}>
      <SearchBar
        page="list"
        title={
          recipe.name.length < 10
            ? recipe.name
            : `${recipe.name.substring(0, 25)}...`
        }
      />
      <Content showsVerticalScrollIndicator={false}>
        <View>
          <View style={styles.img}>
            <FastImage
              resizeMode={FastImage.resizeMode.cover}
              square
              style={styles.img}
              source={{ uri: recipe.image_url }}
            />
            <View style={styles.bgText}>
              <Text style={styles.title}>{recipe.name}</Text>
              <Text style={styles.qtYield}>
                <Icon name="restaurant-outline" style={styles.icon} />
                {recipe.servings_label}
              </Text>
              <Text style={styles.qtYield}>
                <Icon name="alarm-outline" style={styles.icon} />
                {recipe.preparation_time.replace('MIN', 'minutos')}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.viewIngredients}>
          {ingredientsArr && <Ingredients ingredients={ingredientsArr} />}
        </View>
        <View style={styles.viewPreparation}>
          <Text style={styles.preparationMode}>MODO DE PREPARO</Text>
          {instructions &&
            instructions.map((step, index) => (
              <Step step={step} number={index} key={index} />
            ))}
        </View>
      </Content>
    </Container>
  )
}

export default Recipe
