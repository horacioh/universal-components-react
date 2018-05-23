import React from 'react'
import styled from 'styled-components/primitives'
import PropTypes from 'prop-types'

export const FontSize = {
  H1: 7,
  H2: 6,
  H3: 5,
  H4: 4,
  H5: 3,
  H6: 2
}

export const LINE_HEIGHT = 1.5

const Title = styled.Text`
  font-size: ${({ size = 2 }) => size * 8}px;
  line-height: ${({ size = 2 }) => Math.floor(size * 8 * LINE_HEIGHT)}px;
  font-weight: bold;
  display: flex;
  font-style: ${({ italic = false }) => (italic ? 'italic' : 'normal')};
`

Title.PropTypes = {
  size: PropTypes.number
}

export default Title
