import * as React from 'react';
import { getState } from 'client/domain/store';
import { HomePage } from 'client/containers/HomePage';
import { DetailPage } from 'client/containers/DetailPage';
import { Notfound } from 'client/containers/Notfound';
import { Nav } from 'client/components/Nav';

function getPage(state) {
  if (!state) {
    return <Notfound />;
  }
  switch (state.currentPage.name) {
    case 'HOME_PAGE':
      return <HomePage />;
    case 'DETAIL_PAGE':
      return <DetailPage />;
    default:
      return <Notfound />;
  }
}

export function App() {
  const state = getState();
  const content = getPage(state);
  return (
    <>
      <h1>SSR Starter kit</h1>
      <Nav />
      <div>{content}</div>
    </>
  );
}
