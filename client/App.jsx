import React from 'react';

export const App = ({questions, answers, handleVote})=>(
    <div className="container mt-5">
        <h1>

            Dev Team Decision Tool

        </h1>

        {questions.map(({questionId, content})=>(

            <div className="mb-2" key={questionId}>

                <h3>

                    {content}
                    
                </h3>
                <div>

                    {answers.filter(answer => answer.questionId === questionId).sort((a,b) => b.upvotes - a.upvotes).map(({
                        
                        content, 
                        upvotes, 
                        answerId
                    
                    })=>(

                        <div key={answerId}>

                            <div className="answerContent">

                                <span>
                                    {content} - {upvotes}
                                </span>
                                <span className="ml-2">
                                    <button className="btn btn-sm btn-outline-secondary" onClick={()=>handleVote(answerId, 1)}>+</button>
                                    <button className="btn btn-sm btn-outline-secondary ml-1" onClick={()=>handleVote(answerId, -1)}>-</button>
                                </span>

                            </div>

                            <div className="buttonContainer">

                                
                            </div>
                            
                        </div>
                    
                    ))}

                </div>

            </div>

        ))}
        
    </div>
)