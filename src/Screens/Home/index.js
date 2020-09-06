import React from 'react'
import { View, FlatList, Text } from 'react-native'
import { Container } from 'native-base'
import styles from './styles'

import SearchBar from '../../Components/SearchBar'
import Card from '../../Components/Card'

import types from '../../config/types'
import '../../config/fb'
import { AdsBanner } from '../../config/ads'

export default function Home() {
  return (
    <Container style={styles.container}>
      <SearchBar page="home" />
      <View style={styles.content}>
        <Text style={styles.title}>ESCOLHA SUA RECEITA</Text>
        <Text style={styles.subtitle}>NAVEGUE POR CATEGORIA</Text>
        <FlatList
          data={types}
          renderItem={({ item }) => (
            <Card name={item.type} photo={item.photo} />
          )}
          keyExtractor={(item) => item.id}
          numColumns={2}
        />
        <AdsBanner />
      </View>
    </Container>
  )
}
