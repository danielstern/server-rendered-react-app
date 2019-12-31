import express from 'express';
import React from 'react';
import compression from 'compression';
import { renderToString } from 'react-dom/server';

import { App } from '../client/client';

const app = new express();

app.use(compression());
app.get("/", (req,res)=>{
    //res.send("Hello world!");
    const rendered = renderToString(<App username="Bert"/>);
    console.log("Rednered?", rendered);
    // const rendered = `<div>I am rendered.</div>`
    res.send(
        `<div>
            <h1>Hello world</h1>
            ${rendered}
        </div>`
    )
    
})

app.listen(7777);
console.info("App listening on port 7777");