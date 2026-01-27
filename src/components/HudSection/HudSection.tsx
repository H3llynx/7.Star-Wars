import type { ReactNode } from "react";
import Hud from "../../assets/svg/hud-border.svg?react";
import { SectionIntro } from "../SectionIntro/SectionIntro";

export function HudSection({ title, children }: { title: string, children: ReactNode }) {
    return (
        <div className="centered">
            <SectionIntro title={title} />
            <section className="hud">
                <Hud className="hud-border-svg mb-hidden" aria-hidden="true" />
                {children}
            </section>
        </div>
    )
}