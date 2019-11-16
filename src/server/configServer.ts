import path from 'path';
// eslint-disable-next-line no-unused-vars
import express, { Express } from 'express';
import compression from 'compression';
import helmet from 'helmet';
import favicon from 'serve-favicon';
import routes from '../routes';

export default (app: Express): Promise<void> => {
  return new Promise((resolve) => {
    app
      .use(compression())
      .use(helmet())
      .use(favicon(path.join(__dirname, '../public', 'favicon.ico')))
      .use('/static', express.static(path.join(__dirname, '../public')))
      .use('/', routes);
    resolve();
  });
};