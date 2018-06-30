import React from 'react'

import { addDecorator, configure } from '@storybook/react'
import { withInfo, setDefaults } from '@storybook/addon-info'
import { ThemeProvider } from 'styled-components/primitives'
import theme from '../src/theme'

//addDecorator((story, context) => withInfo(``)(story)(context))
setDefaults({
  inline: true,
  header: false
})
const Context = storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
)

addDecorator(Context)

// automatically import all files ending in *.stories.js
const req = require.context(
  '../src/', // path where stories live
  true, // recursive?
  /\__stories__\/.*.stories.js$/ // story files match this pattern
)

function loadStories() {
  req.keys().forEach(module => req(module))
}

configure(loadStories, module)
