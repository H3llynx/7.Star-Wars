import "./SectionIntro.css";

export function SectionIntro({ title }: { title: string }) {
    return (
        <div className="intro-hud">
            <h2>{title}</h2>
        </div>
    )
}