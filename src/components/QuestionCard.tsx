import React from 'react'
import {AnswerObject} from '../App'
type Props = {
    question: string,
    answers:string[],
    callback:any,
    userAnswer:AnswerObject | undefined,
    questionNumber:number,
    totalQuestion:number
}

const QuestionCard = ({question, answers, callback, userAnswer, questionNumber, totalQuestion} : Props) => 
(
<div>
<p className="number">Question : {questionNumber}/{totalQuestion}</p>
<p>{question}</p> 
<div>
    {answers.map(answer => (
        <div key={answer}> 
            <button disabled={userAnswer ? true : false} value={answer}  onClick={callback}>
                <span>{answer} </span> 
            </button>
        </div>
    )) }
    
</div>
</div>

)

export default QuestionCard