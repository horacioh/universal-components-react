import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'
import Title, { FontSize } from '../index'

const Wrapper = storyFn => <div style={{ padding: 16 }}>{storyFn()}</div>

storiesOf('Title', module)
  .addDecorator(Wrapper)
  .add('Default', () => <Title size={FontSize.H1}>Default Title</Title>)
  .add('Sizes', () => (
    <div>
      <Title size={FontSize.H1}>H1 Title</Title>
      <Title size={FontSize.H2}>H2 Title</Title>
      <Title size={FontSize.H3}>H3 Title</Title>
      <Title size={FontSize.H4}>H4 Title</Title>
      <Title size={FontSize.H5}>H5 Title</Title>
      <Title size={FontSize.H6}>H6 Title</Title>
    </div>
  ))
  .add('Italic Titles', () => (
    <div>
      <Title size={FontSize.H1} italic>
        H1 Italic Title
      </Title>
      <Title size={FontSize.H2} italic>
        H2 Italic Title
      </Title>
      <Title size={FontSize.H3} italic>
        H3 Italic Title
      </Title>
      <Title size={FontSize.H4} italic>
        H4 Italic Title
      </Title>
      <Title size={FontSize.H5} italic>
        H5 Italic Title
      </Title>
      <Title size={FontSize.H6} italic>
        H6 Italic Title
      </Title>
    </div>
  ))
