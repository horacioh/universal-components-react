import React from 'react'
import { Text } from 'react-primitives'
import { storiesOf } from '@storybook/react'
import Button from '../index'

storiesOf('Button', module).add('Default', () => (
  <div style={{ padding: 16 }}>
    <Button onPress={() => {}}>
      <Text>Hello World</Text>
    </Button>
  </div>
))
