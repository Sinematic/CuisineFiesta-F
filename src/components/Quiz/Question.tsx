import "../../styles/Quiz/Question.css"

function Question(props: { 
    question: string, 
    options: Array<string>, 
    answer: string, 
    handleClick: (isCorrect: boolean) => void }) {

    const handleAnswer = (option: string) => props.handleClick(option === props.answer)

    return (
        <div className="quiz-question">
            <h2>{props.question}</h2>
            <ul className="options-wrapper">
                {props.options.map((option) => 
                    <li onClick={() => handleAnswer(option)} key={option}>{option}</li>
                )}
            </ul>
        </div>
    )
}

export default Question