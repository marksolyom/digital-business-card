export default function Header() {
    return (
        <header>
            <img src="./img/sword.jpg" alt="guy with a sword" className="sword-img" />
            <h1>Mark Solyom</h1>
            <h2>Frontend Developer</h2>
            <p>marksolyom.website</p>
            <button className="mail-button">
                <img src="./img/mail-logo.png" alt="mail logo" className="mail-logo" />
                Email
            </button>
        </header>
    )
}