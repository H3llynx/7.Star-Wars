import Hub from "../../assets/svg/hub-border.svg?react"

export function HomePage() {
    return (
        <main>
            <Hub className="hub-border" />
            <div className="hub-container">
                <h1>Homepage</h1>
                <h2>Header 2</h2>
                <p>This will be the main text font and size</p>
            </div>
        </main>
    )
}