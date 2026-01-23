import "./SectionIntro.css";

export function SectionIntro({ title }: { title: string }) {
    return (
        <div className="intro-hud">
            <span className="hud-label">{title}</span>
            <div className="hud-line" />
        </div>
    )
}