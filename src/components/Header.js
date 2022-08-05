export default function Header() {
    return (
        <header>
            <img src="./img/sword.jpg" alt="guy with a sword" className="sword-img" />
            <h1 className="name">Mark Solyom</h1>
            <h2 className="dev">Frontend Developer</h2>
            <a href="https://www.google.com/" target="_blank" rel="noreferrer" className="website">
                marksolyom.website
                </a>
            <a href="https://mail.google.com/" target="_blank" rel="noreferrer">
                <button className="mail-button">
                    <img src="./img/mail-logo.png" alt="mail logo" className="mail-logo" />
                    Email
                </button>
            </a>
        </header>
    )
}