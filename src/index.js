import express from "express";
import fetch from "node-fetch";
import React from "react";
import { renderToString } from "react-dom/server";
import { ServerStyleSheet } from 'styled-components';
import fs from 'fs';
import compression from 'compression';
import cors from 'cors';
import bodyParser from 'body-parser';
import passport from 'passport';
import session from 'express-session';
import mongoose from 'mongoose';
import cron from 'node-cron';
import Cryptr from 'cryptr';
const cryptr = new Cryptr(config.key);
import config from './config';
import path from 'path';
import passportConfig from './config/passport';

import userCtrl from './controllers/userCtrl';
import menuCtrl from './controllers/menuCtrl';
import eventCtrl from './controllers/eventCtrl';
import promotionCtrl from './controllers/promotionCtrl';

import { MainRoot, CmslistRoot, CmscontentRoot } from './roots';

var PORT = process.env.PORT || 3003;
passportConfig(passport);

const app = express();
app.use(session({
    secret: 'banana',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(compression());
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

cron.schedule('* * 1 * *', () => {
  fetch('http://www.cafejuniperslc.com/')
  .then(res => console.log("requested at " + new Date()));
});

var dataObj = {},
mainBundle = "",
cmslistBundle = "",
cmscontentBundle = "";
fs.readFile('./dist/js/main.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  mainBundle = data || "";
})
fs.readFile('./dist/js/cmslist.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  cmslistBundle = data || "";
})
fs.readFile('./dist/js/cmscontent.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  cmscontentBundle = data || "";
})
app.get('/', (req, res) => {
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, mainBundle, MainRoot, "Hopkins Brewing Co."));
});
app.get('/cmslist', (req, res) => {
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, cmslistBundle, CmslistRoot, "cmslist"));
});
app.get('/cmscontent', (req, res) => {
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, cmscontentBundle, CmscontentRoot, "cmscontent"));
});;

app.get('/images/:id', (req, res) => {
  res.set('Cache-Control', 'public, max-age=31557600');
  res.sendFile(path.join(__dirname, '../images/' + req.params.id));
});
app.post('/auth', passport.authenticate('local-signup'), userCtrl.login);
app.get('/getMe', userCtrl.getMe);
app.get('/logout', userCtrl.logout);
app.get('/users', userCtrl.read);
app.put('/users/:id', userCtrl.update);

app.get('/menus', menuCtrl.read);
  app.get('/menus/:id', menuCtrl.readOne);
  app.post('/menus', menuCtrl.create);
  app.put('/menus/:id', menuCtrl.update);
  app.delete('/menus/:id', menuCtrl.destroy);

app.get('/events', eventCtrl.read);
  app.get('/events/:id', eventCtrl.readOne);
  app.post('/events', eventCtrl.create);
  app.put('/events/:id', eventCtrl.update);
  app.delete('/events/:id', eventCtrl.destroy);

app.get('/promotions', promotionCtrl.read);
  app.get('/promotions/:id', promotionCtrl.readOne);
  app.post('/promotions', promotionCtrl.create);
  app.put('/promotions/:id', promotionCtrl.update);
  app.delete('/promotions/:id', promotionCtrl.destroy);


app.get('/health', (req, res) => res.send('OK'));

//var mongoUri = 'mongodb+srv://'+cryptr.decrypt(config.dbuser)+':'+cryptr.decrypt(config.dbpass)+'@hopkinsbrewery.bjixf.mongodb.net/hopkinsbrewery?retryWrites=true&w=majority';
//mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });
//mongoose.connection.on('error', console.error.bind(console, 'connection error'));
//mongoose.connection.once('open', function(){
//  console.log("Connected to mongoDB");
//});

app.listen( PORT, () => {
  console.log('Running on http://localhost:' + PORT)
});


// functions!!!!!!!!!!!!!

function getQueries(req, res){
  const qOb = {};
  const queries = req && req._parsedUrl && req._parsedUrl.query && req._parsedUrl.query.split('&') ? req._parsedUrl.query.split('&') : [];
  if(queries.length){
    queries.forEach((x) => {
        var y = x.split('=');
        qOb[y[0]] = y[1];
    });
  }
  return qOb;
}

function fetcher(url){
	return fetch(url)
    .then((response) => {
        if(response.status !== 200) throw Error(response.statusText);
        return response.json();
    }).then((json) => {
        return json;
    }).catch(errHandle)
}

function returnHTML(data, bundle, Page, title){
    const dataString = JSON.stringify(data);
    const sheet = new ServerStyleSheet();
    const body = renderToString(sheet.collectStyles(<Page data={data}/>));
    const styles = sheet.getStyleTags();

    return `
            <html lang="en">
              <head>
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <title>${title}</title>
                <meta name="Description" content="${title}">
                <meta property="og:site_name" content=" Hopkins Brewing Co.">
                <meta property="og:title" content="Home">
                <meta property="og:url" content="http://hopkinsbrewingcompany.com/">
                <meta property="og:type" content="website">
                <link data-default-icon="/images/hops.ico" data-badged-icon="/images/hops.ico" rel="shortcut icon" href="/images/hops.ico">
                <link rel="canonical" href="http://hopkinsbrewingcompany.com/">
                <link rel="preconnect" href="https://fonts.gstatic.com">
                <link href="https://fonts.googleapis.com/css2?family=Antic+Slab&display=swap" rel="stylesheet">
                <style>

                  body { margin: 0; font-family: 'Antic Slab', serif; letter-spacing: 1.2; }
                  a, button { text-decoration: none; color: #000; font-family: 'Antic Slab', serif; letter-spacing: 1.2; }
                </style>
                ${styles}
              </head>
              <body>
                <script>window.os = window.os || {};</script>
                <script>window.__DATA__=${dataString}</script>
                <div id="app" role="main">${body}</div>
                <script>${bundle}</script>
              </body>
            </html>
          `;
}

function errHandle(err){
    console.log(err);
}
