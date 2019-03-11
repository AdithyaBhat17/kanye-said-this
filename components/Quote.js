const reload = () => {
    location.reload()
}
const openApp = () => {
    window.open('https://play.google.com/store/apps/details?id=com.bapspatil.kutin')
}

const Quote = ({quote}) => (
    <div className="quote">
        <p>{quote}</p>
        <img onClick={openApp} className="google-play" src="./static/google-play-badge.png" alt="Our app is now available on Google Play."/> <br/>
        <button onClick={reload}>Another One!</button>
    </div>
)

export default Quote