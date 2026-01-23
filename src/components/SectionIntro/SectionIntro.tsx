import "./SectionIntro.css";

export function SectionIntro({ title }: { title: string }) {
    return (
        <div className="intro-hud">
            <p>{title}</p>
        </div>
    )
}