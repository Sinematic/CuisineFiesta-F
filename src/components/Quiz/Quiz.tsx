import Data from "../../assets/quiz-questions.json"
import { useState } from "react"
import Cover from "../Cover/Cover"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import Nav from "../Nav/Nav"
import Banner from "../../assets/images/fruits-exotiques.webp"
import "../../styles/Quiz/Quiz.css"
import Question from "./Question"
import Button from "../Button/Button"

function Quiz() {

    const questions = Data.questions

    const [score, setScore] = useState(0)
    const [questionIndex, setQuestionIndex] = useState(0)
    const [scoreMessage, setScoreMessage] = useState("")

    const handleClick = (isCorrect: boolean) => {     
        if (isCorrect) setScore(score + 1)
        setQuestionIndex(questionIndex + 1)
        questionIndex < questions.length - 1 ? null : handleScore()

    }

    const handleScore = () => {
        const ratioScore = score / questions.length
    
        if (ratioScore === 1 ) {
            setScoreMessage("Tu as eu tout bon ! Impressionnant ! 🤯");
        } else if (ratioScore > 0.9) {
            setScoreMessage("Quasi sans fautes, bravo ! 👏");
        } else if (ratioScore > 0.7) {
            setScoreMessage("C'est pas parfait, mais c'est pas mal ! 😉");
        } else if (ratioScore > 0.5) {
            setScoreMessage("Bon, tu as la moyenne mais peux mieux faire ! 🥲");
        } else if (ratioScore > 0.25) {
            setScoreMessage("Ça arrive de rater un test ! 🥹 ");
        } else if (ratioScore === 0) setScoreMessage("Tu as fait exprès de répondre faux partout j'espère ?! 🫣");
    }

    const resetQuiz = () => {
        setScore(0)
        setQuestionIndex(0)
        setScoreMessage("")
    }
    

    return (
        <>
            <Header />
            <Cover type="title" text="Quiz en Cuisine" src={Banner} alt="Bannière accueil CuisineFiesta"/>

            <div className="quiz">
                <div className="quiz-game">
                    <div className="progress-bar" />
                    {questions && questionIndex < questions.length ? 
                        <>  
                            <Question question={questions[questionIndex].question} options={questions[questionIndex].options} 
                            answer={questions[questionIndex].answer} handleClick={handleClick}
                            /> 
                        </> 
                    : <div className="score-wrapper">
                        <span className="score">{score}/{questions.length}</span>
                        <p className="score-message">{scoreMessage}</p>

                        <Button value="Rejouer" onClick={resetQuiz}/>
                    </div>}

                </div>
            </div>

            <Nav />
            <Footer />
        </>
    )
}

export default Quiz