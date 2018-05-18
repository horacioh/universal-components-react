import React from 'react'
//import styled from 'styled-components/primitives'
import { View, Text } from 'react-primitives'

class Button extends React.Component {
  render() {
    return (
      <View>
        <Text>{this.props.children}</Text>
      </View>
    )
  }
}

export default Button
