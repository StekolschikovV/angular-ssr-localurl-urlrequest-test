import 'zone.js/dist/zone-node';

import { ngExpressEngine } from '@nguniversal/express-engine';
import * as express from 'express';
import { join } from 'path';

import { AppServerModule } from './src/main.server';
import { APP_BASE_HREF } from '@angular/common';
import { existsSync } from 'fs';
const request = require('request');

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();
  const distFolder = join(process.cwd(), 'dist/ssr-prerender-test/browser');
  const indexHtml = existsSync(join(distFolder, 'index.original.html')) ? 'index.original.html' : 'index';

  // Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
  server.engine('html', ngExpressEngine({
    bootstrap: AppServerModule,
  }));

  server.set('view engine', 'html');
  server.set('views', distFolder);

  server.all('*', function (req, res, next) {
    let fullUrl = req.headers.host + req.originalUrl;
    console.log("full url ==> ",fullUrl);
    next(); // pass control to the next handler
  });

  server.use('/api/*', function(req, res) {
    const url = 'http://jsonplaceholder.typicode.com' + req.originalUrl.replace('/api', '');
    req.pipe(request(url)).pipe(res);
  })

  // server.get('*api*', (req, res) => {
  //   // console.log(req, res);
  //   res.status(200).json([
  //     {
  //       "ccy": "USD",
  //       "base_ccy": "UAH",
  //       "buy": "35.20000",
  //       "sale": "35.60000"
  //     },
  //     {
  //       "ccy": "EUR",
  //       "base_ccy": "UAH",
  //       "buy": "36.20000",
  //       "sale": "37.30000"
  //     },
  //     {
  //       "ccy": "BTC",
  //       "base_ccy": "USD",
  //       "buy": "18555.2586",
  //       "sale": "20508.4438"
  //     }
  //   ]);
  // });
  // https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5

  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });
  // Serve static files from /browser
  server.get('*.*', express.static(distFolder, {
    maxAge: '1y'
  }));

  // All regular routes use the Universal engine
  server.get('*', (req, res) => {
    res.render(indexHtml, { req, providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }] });
  });

  return server;
}

function run(): void {
  const port = process.env['PORT'] || 4000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = mainModule && mainModule.filename || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run();
}

export * from './src/main.server';
