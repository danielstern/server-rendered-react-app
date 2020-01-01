import React from 'react';

export const App = ({questions, answers})=>(
    <div>
        <h1>Dev Team Decision Tool</h1>

        {questions.map(({questionId, content})=>(

            <div className="question" key={questionId}>

                <div>

                    {content}
                    
                </div>
                <div>

                    {answers.filter(answer => answer.questionId === questionId).map(({
                        
                        content, 
                        upvotes, 
                        answerId
                    
                    })=>(

                        <div key={answerId}>

                            <div className="answerContent">

                                {content} - {upvotes}

                            </div>

                            <div className="buttonContainer">

                                <button>+</button>
                                <button>-</button>

                            </div>
                            
                        </div>
                    
                    ))}

                </div>

            </div>

        ))}
        {/* <h1>Welcome to Server Rendered Content</h1> */}
        {/* <h2>Welcome, {username || "N/A"}</h2> */}
    </div>
)