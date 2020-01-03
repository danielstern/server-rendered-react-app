export function copyAnswersWithModifiedUpvotes (answers, answerId, increment) {

    return answers.map(answer => {

        if (answer.answerId === answerId) {

            return {

                ... answer,
                upvotes: answer.upvotes + increment
            }


        } else {

            return answer;

        }

    });

}