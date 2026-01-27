import Hologram from "../../assets/images/hologram.png";
import { TLink } from "../../components/TLink/TLink";
import "./HomePage.css";

export function HomePage() {
    return (
        <>
            <div className="overlay" />
            <p className="scan terminal home-intro">
                <span className="terminal-prompt" aria-hidden="true">&gt;_</span>
                INITIALIZING TACTICAL INTERFACE
                <span className="terminal-cursor" aria-hidden="true">|</span>
            </p>
            <section className="home-terminal">
                <div className="terminal-block scroll">
                    <h1>TACTICAL STARSHIP DATABASE</h1>
                    <h2>OPERATIONAL RECORDS OF REGISTERED SPACECRAFT</h2>
                    <p className="terminal-text">
                        This terminal provides access to starship technical files.<br />
                        Each record contains vessel classification, performance metrics<br />
                        and operational capacity.
                    </p>
                    <TLink to="starships">
                        Access starship database
                    </TLink>
                    <p className="terminal-status">
                        SYSTEM STATUS<br />
                        DATABASE: ONLINE<br />
                        INTERFACE: ACTIVE<br />
                        SELECT A STARSHIP TO ACCESS ITS TACTICAL RECORD
                    </p>
                </div>
                <div className="droid-hologram">
                    <img src={Hologram} alt="" />
                </div>
            </section>
        </>
    )
}