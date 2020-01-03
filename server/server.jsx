import express from 'express';
import React from 'react';
import compression from 'compression';
import { renderToString } from 'react-dom/server';

import { App } from '../client/App';
import { getData, modifyAnswerUpvotes } from './database';

const app = new express();

app.use(compression());

app.use(express.static("dist"));

app.get("/data", async (_req, res) => {

    res.json(await getData());

});

app.get("/vote/:answerId", (req, res) => {

    const { query, params } = req;
    console.log(query, params);
    modifyAnswerUpvotes(params.answerId, parseInt(query.increment));

})

app.get("/", async ( _req, res )=>{

    const { questions, answers } = await getData();

    const rendered = renderToString(<App questions={questions} answers={answers}/>);
    // TODO... consider loading an external HTML file to streamline templating

    res.send(

        `<html>

            <div id="Container">${rendered}</div>
            <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
            <script src="client.js"></script>

        </html>`
    )
    
})

app.listen(7777);
console.info("App listening on port 7777");