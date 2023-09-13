import Questions from "../../assets/quiz-questions.json"
import "../../styles/Quiz/Quiz.css"

function Quiz() {

    const questions = Questions

    return (
        <div>{questions}</div>
    )
}

export default Quiz