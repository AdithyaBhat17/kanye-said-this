import { useState, useEffect } from 'react'
import Quote from '../components/Quote'

const Index = () => {
    const [quote, setQuote] = useState(null)

    useEffect(() => {
        const fetchQuote = async () => {
            const result = await fetch('https://api.kanye.rest')
            const json = await result.json()
            setQuote(json.quote)
        }

        fetchQuote()
    }, [])
    return (
        <div>
            {quote !== null && <Quote quote={quote.toString()} />}
        </div>
    )
}

export default Index