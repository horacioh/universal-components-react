import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from '../index'

storiesOf('Button', module).add('Default', () => (
  <div style={{ padding: 16 }}>
    <Button>Hello World</Button>
  </div>
))
