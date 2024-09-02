import React from 'react'
import { Pressable, Text, Alert } from 'react-native'
import { buttonStyles } from '../styles/styles'

export default function ButtonComponent({title, onPress}) {
  return (
    <Pressable style={({ pressed }) => [
        {
          opacity: pressed ? 0.8 : 1,
        },
        buttonStyles.button,
        ,
      ]} onPress={onPress}>
        <Text style = {buttonStyles.buttonText}>{title}</Text>
    </Pressable>
  )
}
