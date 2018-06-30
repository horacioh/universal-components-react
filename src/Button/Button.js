import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components/primitives'
import { Touchable } from 'react-primitives'
import Theme, { defaultTheme } from '../theme'

const UIButton = styled.View`
  background-color: ${({ theme, primary }) =>
    primary ? theme.colors.primary : theme.colors.secondary};
  padding: ${({ theme }) => theme.gutter.default}px;
  border-radius: ${({ theme }) => theme.gutter.xsmall}px;
  margin: ${({ theme }) => theme.gutter.default}px;
`

const Label = styled.Text``

function Button(props) {
  console.log('props == ', props)
  let { onPress, children, theme } = props
  if (typeof children === 'function') {
    return children({ theme, onPress })
  }

  let isText = typeof children === 'string'

  return (
    <Touchable onPress={onPress}>
      <UIButton>{isText ? <Label>{children}</Label> : children}</UIButton>
    </Touchable>
  )
}

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  children: PropTypes.element
}

export default withTheme(Button)
