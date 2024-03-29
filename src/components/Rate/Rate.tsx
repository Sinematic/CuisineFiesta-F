import "../../styles/Rate/Rate.css"

function Rate(props: { rate: number | null, display?: boolean, setRate?: (rating: number) => void }) {

    const range = [1, 2, 3, 4, 5]

    return (
        <div className="stars">
            {range.map((option) => (
                <li key={option} onClick={!props.display ? () => props.setRate && props.setRate(option) : undefined} className="star-element">


                    {props.rate === null || props.rate < option ?
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 24 24" 
                            className="neutral"
                            strokeWidth="3" 
                            strokeLinecap="round" 
                            strokeLinejoin="round">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                        </svg>
                    :
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 24 24"
                            className="colored"
                            strokeWidth="3" 
                            strokeLinecap="round" 
                            strokeLinejoin="round">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                        </svg>
                    }
                </li>
            ))}
        </div>
    )
}

export default Rate
