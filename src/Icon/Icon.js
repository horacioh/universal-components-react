import React from 'react'
import { View, Text, StyleSheet } from 'react-primitives'
import PropTypes from 'prop-types'

const Icon = ({ name, small }) => (
  <View name={name} style={[styles.container, small ? styles.small : null]}>
    <Text>ICON</Text>
  </View>
)

Icon.propTypes = {
  name: PropTypes.string.isRequired
}

export default Icon

const styles = StyleSheet.create({
  container: {
    width: 44,
    height: 44,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  small: {
    backgroundColor: '#f00'
  }
})
