import React from 'react'
import styled from 'styled-components/primitives'

import { View, Text, StyleSheet } from 'react-primitives'
import PropTypes from 'prop-types'

class Button extends React.Component {
  render() {
    return (
      <View style={styles.container} onPress={this.props.onPress}>
        {this.props.children}
      </View>
    )
  }
}

Button.propTypes = {
  onPress: PropTypes.func.isRequired
}

export default Button

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F00',
    padding: 8,
    borderRadius: 4
  }
})
