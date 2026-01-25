import type { Decorator, Preview } from '@storybook/react-vite';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import { store } from "../src/app/store";
import "../src/styles/index.css";

const withProviders: Decorator = (Story) => (
  <MemoryRouter>
    <Provider store={store}>
      {Story()}
    </Provider>
  </MemoryRouter>
);

const preview: Preview = {
  decorators: [withProviders],
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