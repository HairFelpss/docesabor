import React, { useState } from 'react'
import { Image, Keyboard } from 'react-native'
import {
  Header,
  Item,
  Input,
  Button,
  Left,
  Body,
  Right,
  Title,
} from 'native-base'

import { useNavigation } from '@react-navigation/native'

import styles from './styles'
import { colors } from '../../styles'

const SearchBar = ({ page, title, handleInput }) => {
  const navigation = useNavigation()
  const [clicked, setClicked] = useState(false)
  const [input, setInput] = useState('')

  const handleChangeClicked = () => {
    setClicked(!clicked)
    setInput('')
  }

  const handleTwoFunctions = () => {
    if (input === '') return
    navigation.navigate('RecipeList', { input })
    if (page === 'list' && input) {
      handleInput(input)
      setInput(input)
    }
    Keyboard.dismiss()
  }

  if (page === 'home' || !!clicked || input !== '') {
    return (
      <Header
        androidStatusBarColor={colors.tertiary}
        style={styles.header}
        searchBar
        rounded
      >
        <Item style={styles.itemStyle}>
          <Input
            type="text"
            value={input}
            onChangeText={(inputText) => setInput(inputText)}
          />
          <Right>
            <Button style={styles.btn} onPress={() => handleTwoFunctions()}>
              <Image
                resizeMode="center"
                source={require('../../assets/icons/ic_pesquisa.png')}
                style={styles.icon}
              />
            </Button>
          </Right>
        </Item>
      </Header>
    )
  }

  return (
    <Header androidStatusBarColor={colors.tertiary} style={styles.header}>
      <Left style={{ flex: 0.5 }}>
        <Button transparent onPress={() => navigation.goBack()}>
          <Image
            resizeMode="center"
            source={require('../../assets/icons/ic_voltar.png')}
            style={styles.icon}
          />
        </Button>
      </Left>
      <Body style={{ flex: 3, flexDirection: 'row', justifyContent: 'center' }}>
        <Title style={styles.headerWithoutSearchBody}>{title || input}</Title>
      </Body>
      <Right style={{ flex: 0.5 }}>
        <Button transparent onPress={handleChangeClicked}>
          <Image
            resizeMode="center"
            source={require('../../assets/icons/ic_pesquisa.png')}
            style={styles.icon}
          />
        </Button>
      </Right>
    </Header>
  )
}
export default SearchBar
