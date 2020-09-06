import React, { useState, useCallback, useEffect } from 'react'
import { View, FlatList } from 'react-native'
import { Container, Content, List } from 'native-base'
import { getRecipes, searchRecipe } from '../../services/recipes'

import SearchBar from '../../Components/SearchBar'
import CardForList from '../../Components/CardForList'
import { AdsBanner } from '../../config/ads'

import styles from './styles'

const RecipeList = ({ route, navigation }) => {
  const [list, setList] = useState([])
  const [param] = useState(route.params.title)
  const [title] = useState(
    route.params.title
      ? route.params.title.length < 10
        ? route.params.title
        : `${route.params.title.substring(0, 23)}...`
      : null
  )
  const [input, setInput] = useState(
    route.params.input
      ? route.params.input.length < 10
        ? route.params.input
        : `${route.params.input.substring(0, 23)}...`
      : null
  )
  const [offset, setOffset] = useState(0)

  const destroyComponent = () => {
    setOffset(0)
    setInput('')
  }

  const handleLazyLoad = () => {
    setOffset(offset + 10)
  }

  const handleInput = useCallback((event) => {
    if (event) {
      setInput(event)
    }
  }, [])

  const handleGetRecipes = async () => {
    setList(
      !input
        ? await getRecipes(param, offset)
        : await searchRecipe(input, offset)
    )
  }

  useEffect(() => {
    handleGetRecipes()

    return destroyComponent()
  }, [offset])

  useEffect(() => {
    handleGetRecipes()

    return destroyComponent()
  }, [input])

  return (
    <Container style={styles.container}>
      <SearchBar page="list" title={title || input} handleInput={handleInput} />
      <View style={styles.content}>
        <FlatList
          ItemSeparatorComponent={() => <View style={styles.container} />}
          data={list}
          keyExtractor={(list) => list.id}
          renderItem={({ item }) => {
            const time =
              item.recipes.length > 0
                ? item.recipes[0].preparation_time.toLowerCase()
                : '?'
            const labels =
              item.recipes.length > 0
                ? item.recipes[0].servings_label.toLowerCase()
                : '?'
            return (
              <CardForList
                name={item.name}
                rating={item.rating}
                key={item.id}
                id={item.id}
                title={item.title}
                photo={item.image_url}
                time={time}
                labels={labels}
              />
            )
          }}
          onEndReached={handleLazyLoad}
          onEndReachedThreshold={0.5}
          initialNumToRender={10}
        />
        <AdsBanner />
      </View>
    </Container>
  )
}

export default RecipeList
