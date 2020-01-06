import express from 'express';
import React from 'react';
import compression from 'compression';
import { renderToString } from 'react-dom/server';
import { readFileSync } from 'fs';

import { App } from '../client/App';
import { getData, modifyAnswerUpvotes } from './database';

const app = new express();
const port = 7777;

app.use(compression());
app.use(express.static("dist"));

app.get("/data", async (_req, res) => {

    res.json(await getData());

});

app.get("/vote/:answerId", (req, res) => {

    const { query, params } = req;
    modifyAnswerUpvotes(params.answerId, parseInt(query.increment));

});

app.get("/", async ( _req, res )=>{

    const { questions, answers } = await getData();

    const rendered = renderToString(<App questions={questions} answers={answers}/>);

    const index = readFileSync(`public/index.html`, `utf8`);

    res.send(index.replace("{{rendered}}", rendered));
    
});

app.listen(port);
console.info(`App listening on port ${port}`);