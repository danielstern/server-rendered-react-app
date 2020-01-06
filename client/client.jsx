import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './App';
import { copyAnswersWithModifiedUpvotes } from '../shared/utility';

let state = undefined;

console.info("Client:: Fetching data from server");

fetch("http://localhost:7777/data")
    .then(data => data.json())
    .then(json => {

        state = json;
        render();

    });

function handleVote(answerId, increment){

    state.answers = copyAnswersWithModifiedUpvotes(state.answers, answerId, increment);

    fetch(`vote/${answerId}?increment=${increment}`);

    render();

};

function render(){

    console.info("Client:: Rendering application with remote data", state);
    ReactDOM.hydrate(<App {...state} handleVote={handleVote}/>, document.querySelector("#Container"));

}

