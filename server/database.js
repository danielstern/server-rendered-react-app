/** A blackbox wrapper containing a dummy data set and database. Can be modified to use production data without affecting the rest of the application. */

const data = {

    questions:[{

        questionId:1,
        content:"Which back end solution should we use for our application?"

    },{

        questionId:2,
        content:"What percentage of developer time should be devoted to end-to-end testing?"

    }],
    answers:[{

        answerId:10,
        questionId:1,
        upvotes:2,
        content: "Apache"

    },{

        answerId:11,
        questionId:1,
        upvotes:0,
        content:"Java"

    },{

        answerId:12,
        questionId:1,
        upvotes:4,
        content:"Node.js"

    },{

        answerId:13,
        questionId:2,
        upvotes:2,
        content:"25%"

    },{

        answerId:14,
        questionId:2,
        upvotes:1,
        content:"50%"

    },{

        answerId:15,
        questionId:2,
        upvotes:1,
        content:"75%"

    }]
    
}

export async function getData() {
    
    return data;

}