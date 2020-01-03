/** A blackbox wrapper containing a dummy data set and database. 
 * Can be modified to use production data without affecting the rest of the application. */

import { copyAnswersWithModifiedUpvotes } from '../shared/utility';

const data = {

    questions:[{

        questionId:"Q1",
        content:"Which back end solution should we use for our application?"

    },{

        questionId:"Q2",
        content:"What percentage of developer time should be devoted to end-to-end testing?"

    }],
    answers:[{

        answerId:"A1",
        questionId:1,
        upvotes:2,
        content: "Apache"

    },{

        answerId:"A2",
        questionId:"Q1",
        upvotes:0,
        content:"Java"

    },{

        answerId:"A3",
        questionId:"Q1",
        upvotes:4,
        content:"Node.js"

    },{

        answerId:"A4",
        questionId:"Q2",
        upvotes:2,
        content:"25%"

    },{

        answerId:"A5",
        questionId:"Q2",
        upvotes:1,
        content:"50%"

    },{

        answerId:"A6",
        questionId:"Q2",
        upvotes:1,
        content:"75%"

    }]
    
}

export async function getData() {
    
    return data;

}

export function modifyAnswerUpvotes(answerId, increment) {

    console.log("Modifying data", answerId, increment);

    data.answers = copyAnswersWithModifiedUpvotes(data.answers, answerId, increment);

}