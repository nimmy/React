import React from "react";
import QandA from "./QandA";
import QuestionBankJson from './../JsonData/questionBank';

function QuestionBank() {
    
    //const qus = QuestionBankJson.map(singleQues => <QandA key={singleQues.id} question={singleQues.question} answer={singleQues.answer} />);
    const questionBankComponent = QuestionBankJson.map(function (singleQues) {
        return <QandA key={singleQues.id} question={singleQues.question} answer={singleQues.answer} />;
    });

    //console.log(questionBankArray);

    return (
        <div className="container">
            {questionBankComponent}
        </div>
    )
}

export default QuestionBank;