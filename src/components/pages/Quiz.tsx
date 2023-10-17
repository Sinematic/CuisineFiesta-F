import Data from "../../assets/files/quiz-questions.json"
import { useEffect, useState } from "react"
import Cover from "../Cover/Cover"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import Nav from "../Nav/Nav"
import Banner from "../../assets/images/fruits-exotiques.webp"
import "../../styles/pages/Quiz.css"
import Question from "../Quiz/Question"
import Button from "../FormElements/Button"

function Quiz() {

    type Question = {
        question: string,
        options: Array<string>,
        answer: string
    }

    function shuffleArray(array: Question[]) {

        const newArray = [...array];

        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]]
        }

        return newArray
    }

    const [questions, setQuestions] =  useState<Question[]>([])
    const [score, setScore] = useState(0)
    const [questionIndex, setQuestionIndex] = useState(0)
    const [scoreMessage, setScoreMessage] = useState("")

    useEffect(() => {
        const shuffledQuestions = Data.questions.length > 10 ? 
            shuffleArray(Data.questions).slice(0,10) : shuffleArray(Data.questions)
        setQuestions(shuffledQuestions)
    }, [])

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
        } else if (ratioScore >= 0.7) {
            setScoreMessage("C'est pas parfait, mais c'est pas mal ! 😉");
        } else if (ratioScore >= 0.5) {
            setScoreMessage("Bon, tu as la moyenne mais peux mieux faire ! 🥲");
        } else if (ratioScore > 0.25) {
            setScoreMessage("Tu feras mieux la prochaine fois ! 🥹 ");
        } else if (ratioScore < 0.25 && ratioScore > 0) {
            setScoreMessage("Le plus important, c'est de participer ! 😭");
        } else setScoreMessage("Tu as fait exprès de répondre faux partout j'espère ?! 🫣");
    }

    const resetQuiz = () => {
        setScore(0)
        setQuestionIndex(0)
        setScoreMessage("")
    }

    const [percentDone, setPercentDone] = useState(0)

    useEffect(() => {
        setPercentDone((questionIndex / questions.length) * 100)
    }, [questionIndex, questions.length])

    return (
        <>
            <Header />
            <Cover type="title" text="Quiz en Cuisine" src={Banner} 
            alt="Bannière accueil CuisineFiesta" format="reduced" />

            <div className="quiz">
                <div className="quiz-game">
                    <div className="progress-bar">
                        <div className="bar-filler" style={{width: `${percentDone}%`}} />
                    </div>
                    {questions && questionIndex < questions.length ?   
                        <Question question={questions[questionIndex].question} 
                        options={questions[questionIndex].options} 
                        answer={questions[questionIndex].answer} 
                        handleClick={handleClick}
                        />
                    : <div className="score-wrapper">
                        <p className="score">{score}/{questions.length}</p>
                        <p className="score-message">{scoreMessage}</p>

                        <Button value="Rejouer" onClick={resetQuiz} identifier="play-again" />
                    </div>}

                </div>
            </div>

            <Nav />
            <Footer />
        </>
    )
}

export default Quiz