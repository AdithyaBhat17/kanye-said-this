import { useState, useEffect } from 'react'
import Quote from '../components/Quote'
import Head from 'next/head'

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
            <Head>
                <title>Kanye said this lol!</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </Head>
            {quote !== null && <Quote quote={quote.toString()} />}
        </div>
    )
}

export default Index