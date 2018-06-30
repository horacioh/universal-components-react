import React from 'react'
import { View } from 'react-primitives'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import Button from '../Button'
import { clearDecorators } from '@storybook/react/dist/client/preview'

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('Default Button', () => (
    <Button primary onPress={action('Default Button Clicked')}>
      default Button
    </Button>
  ))
  .add('Inline Button', () => (
    <View>
      <Button inline onPress={action('Inline Button Clicked')}>
        Inline Button
      </Button>
      <Button inline onPress={action('Inline Button Clicked')}>
        Inline Button
      </Button>
    </View>
  ))
  .add('Control render (render props)', () => (
    <Button>
      {props => (
        <button
          style={{
            borderRadius: props.theme.gutter.large,
            backgroundColor: props.theme.colors.danger
          }}
          disabled={boolean('Disabled', false)}
          onClick={action('Custom button Clicked')}
        >
          <span style={{ color: 'white' }}>
            {text('Label', 'Custom Button')}
          </span>
        </button>
      )}
    </Button>
  ))
