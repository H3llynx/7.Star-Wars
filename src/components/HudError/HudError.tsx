import Hud from "../../assets/svg/hud-border.svg?react";
import { SectionIntro } from "../SectionIntro/SectionIntro";

export function HudError() {
    return (
        <div className="centered">
            <SectionIntro title="Well… This Is Awkward" />
            <section className="hud">
                <Hud className="hud-border-svg mb-hidden" />
                <img
                    src="jarjar.png"
                    className="error-img"
                    alt="Error: data not found"
                />
            </section>
        </div>
    )
}