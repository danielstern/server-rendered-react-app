import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './App';
import { copyAnswersWithModifiedUpvotes } from '../shared/utility';

console.info("Client:: Fetching data from server");

let state = {

};

fetch("http://localhost:7777/data")
    .then(data => data.json())
    .then(json => {

        state = json;
        render();

    });

function handleVote(answerId, increment){

    // console.log("You voted", answerId, increment);
    // console.log(state.answers, answerId);

    state.answers = copyAnswersWithModifiedUpvotes(state.answers, answerId, increment);
    // state.answers = state.answers.map(answer => {

    //     if (answer.answerId === answerId) {

    //         return {

    //             ... answer,
    //             upvotes: answer.upvotes + increment
    //         }


    //     } else {

    //         return answer;

    //     }

    // });

    fetch(`vote/${answerId}?increment=${increment}`);
    render();

};

function render(){

    console.info("Client:: Rendering application with remote data", state);
    ReactDOM.hydrate(<App {...state} handleVote={handleVote}/>, document.querySelector("#Container"));

    

}

