import { useState, useEffect } from 'react'
import Quote from '../components/Quote'

import '../style.css'

const Index = () => {
    const [quote, setQuote] = useState(null)    

    useEffect(() => {
        const fetchQuote = async () => {
            const result = await fetch('https://api.kanye.rest')
            const json = await result.json()
            setQuote(json.quote)
        }
        const random = Math.floor(Math.random() * 3) + 1
        const body = document.getElementsByTagName('body')[0]
        body.style.background = `url(/static/gif${random}.gif)`
        fetchQuote()
    }, [])

    return (
        <div>
            {quote !== null && <Quote quote={quote.toString()} />}
        </div>
    )
}

export default Index