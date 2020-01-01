import express from 'express';
import React from 'react';
import compression from 'compression';
import { renderToString } from 'react-dom/server';

import { App } from '../client/client';
import { getData } from './database';

const app = new express();

app.use(compression());
app.get("/", async ( _req, res )=>{

    const { questions, answers } = await getData();

    const rendered = renderToString(<App username="Bert" questions={questions} answers={answers}/>);
    // todo... load proper html page? more overhead but rehydration is easier..
    res.send(
        `<html>
            ${rendered}
        </html>`
    )
    
})

app.listen(7777);
console.info("App listening on port 7777");