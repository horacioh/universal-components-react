import React from 'react'
import { storiesOf } from '@storybook/react'
import Icon from '../index'

storiesOf('Icon', module)
  .add('Default', () => (
    <div style={{ padding: 16 }}>
      <Icon />
    </div>
  ))
  .add('Small', () => (
    <div style={{ padding: 16 }}>
      <Icon small />
    </div>
  ))
