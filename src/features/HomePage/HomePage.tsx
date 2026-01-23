import Hud from "../../assets/svg/hud-border.svg?react";

export function HomePage() {
    return (
        <section className="neon-block centered">
            <Hud className="hud-border-svg" />
            <h1>Homepage</h1>
            <h3>Header 2</h3>
            <p>This will be the main text font and size</p>
        </section>
    )
}