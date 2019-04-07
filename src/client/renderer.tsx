import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { getLogger } from 'client/domain/logger';

const logger = getLogger('Renderer');

export default async function render() {
  logger.time('DOM Render');
  const App = (await import('client/containers/App')).App;
  ReactDOM.render(<App />, document.getElementById('app'));
  logger.timeEnd('DOM Rendered');
}

declare const module: {
  hot: {
    accept: (string, Function) => void
  }
};

if (module.hot) {
  module.hot.accept('client/containers/App', () => {
    logger.time('Hot update applied');
    render();
    logger.timeEnd('Hot update applied');
  });
}
