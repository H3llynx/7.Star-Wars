import type { Decorator, Preview } from '@storybook/react-vite';
import { initialize, mswLoader } from 'msw-storybook-addon';
import { Provider } from 'react-redux';
import { withRouter } from 'storybook-addon-remix-react-router';
import { store } from "../src/app/store";
import { ScreenContext } from "../src/context/ScreenContext";
import "../src/styles/index.css";

initialize();
const isPortrait = window.matchMedia("(orientation: portrait)").matches;

const withProviders: Decorator = (Story) => (
  <ScreenContext value={{ isPortrait }}>
    <Provider store={store}>
      {Story()}
    </Provider>
  </ScreenContext>
);

const preview: Preview = {
  decorators: [withProviders, withRouter],
  loaders: [mswLoader],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
};


export default preview;