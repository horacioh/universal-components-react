import React, { Component } from 'react'
import { StyleSheet, Touchable, View, Text } from 'react-primitives'

class Button extends Component {
  render() {
    let { children, onPress } = this.props

    // if children is a function, means the user wants to control whats rendered, so we pass the default.
    if (typeof children === 'function') {
      return children({ button: { padding: 8, backgroundColor: '#0f0' } })
    }
    return (
      <Touchable onPress={onPress}>
        <View style={styles.button}>
          <Text>{this.props.title}</Text>
        </View>
      </Touchable>
    )
  }
}

export default Button

const styles = StyleSheet.create({
  button: {
    padding: 8,
    borderRadius: 4,
    backgroundColor: 'red',
    color: '#fff'
  }
})
