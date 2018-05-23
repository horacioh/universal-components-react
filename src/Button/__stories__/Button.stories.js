import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import Button from '../index'

const Wrapper = storyFn => <div style={{ padding: 16 }}>{storyFn()}</div>

storiesOf('Button', module)
  .addDecorator(Wrapper)
  .addDecorator(withKnobs)
  .add('Default Button', () => (
    <Button onPress={action('Default Button Clicked')} title="default Button" />
  ))
  .add('Control render (render props)', () => (
    <Button>
      {styles => {
        return (
          <button
            disabled={boolean('Disabled', false)}
            style={{
              ...styles.button,
              backgroundColor: '#333',
              display: 'block',
              color: 'white'
            }}
            onClick={action('Custom button Clicked')}
          >
            {text('Label', 'Custom Button')}
          </button>
        )
      }}
    </Button>
  ))
