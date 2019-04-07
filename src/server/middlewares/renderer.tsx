import * as React from 'react';
import { renderToString } from "react-dom/server";
import Routing from 'shared/routing';
import { createStore, getState } from 'client/domain/store';
import { updateCurrentPage } from 'client/domain/reducers';
import { App } from 'client/containers/App';

function getRouteState(path) {
  return Routing[path] || Routing['*'];
}

export default (req, res, next) => {
  const routeState = getRouteState(req.url);
  createStore();
  updateCurrentPage(routeState);
  const state = getState();
  const content = renderToString(<App />);
  req.client = { state, content };
  next();
};
