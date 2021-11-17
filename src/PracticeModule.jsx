import { useState } from "react";

const numbers = ["one", "two", "three", "four", "five"]

export default function PracticeModule({questions, correctCallback}) {

    const [unanswered, setUnanswered] = useState([...Array(questions.length).keys()])
    const [correct, setCorrect] = useState(undefined)
    const [index, setIndex] = useState(0)
    const [help, setHelp] = useState(undefined)

    function answer(index, answer) {
        const question = questions[unanswered[index]]
        const correct = question.answer === answer

        if (correct) {
            setHelp(undefined)
        } else {
            setHelp((typeof question.help) === "string" ? question.help : question.help[index - index > answer ? 1 : 0])
        }

        setCorrect(correct)
    }
    function next() {
        const newUnanswered = [...unanswered]
        newUnanswered.splice(index, 1)
        setUnanswered(newUnanswered)
        reset(newUnanswered)
    }
    function reset(unanswered) {
        setCorrect(undefined)
        setIndex(pickQuestion(unanswered))
    }
    function pickQuestion(unanswered) {
        if (unanswered.length === 0) return undefined
        else return Math.floor(Math.random() * unanswered.length)
    }

    if (unanswered.length === 0) {
        return (
            <div>
                <p>{`Congratulations! You have answered all questions of this module correctly!`}</p>
                <button onClick={correctCallback}>Next</button>
            </div>
        )
    }

    const question = questions[unanswered[index]]

    let content
    if (correct === undefined) {
        if (typeof question.answer === "boolean") {
            content = (
                <div>
                    <div>
                        <button className="yes" onClick={() => answer(index, true)}>Yes</button>
                        <button className="no" onClick={() => answer(index, false)}>No</button>
                    </div>
                </div>
            )
        } else {
            content = (
                <div className={`multiple-choice ${numbers[question.options.length - 1]}`}>
                    {question.options.map((option, i) => {
                        return (
                            <button key={i} onClick={() => answer(index, i)}>{option}</button>
                        )
                    })}
                </div>
            )
        }
        
    } else if (correct) {
        content = (
            <div>
                <p>That is correct!</p>
                <button onClick={next}>Next</button>
            </div>
        )
    } else {
        content = (
            <div>
                <p>
                    That is incorrect.
                </p>
                <p className="help">
                    {help}
                </p>
                <button onClick={() => reset(unanswered)}>
                    Retry
                </button>
            </div>
        )
    }
    
    
    return (
        <div className="practice">
            <h3>
                {question.question}
            </h3>
            {content}
        </div>
    )
}