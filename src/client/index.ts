import { createStore, subscribe } from 'client/domain/store';
import render from 'client/renderer';
import startRouters from 'client/domain/middleware/router';

createStore();
subscribe('renderLoop', render);
startRouters();
