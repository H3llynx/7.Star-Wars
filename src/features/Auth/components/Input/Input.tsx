import React from "react";
import Error from "../../../../assets/svg/error.svg?react";
import "./input.css";

type Input = {
    label?: string;
    error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>

export function Input({ id, label, type, value, onChange }: Input) {
    return (
        <label htmlFor={id} className="terminal">
            <span className="terminal-prompt" aria-hidden="true">&gt;_</span>
            <span className="form-label">{label}</span>
            <input
                id={id}
                type={type}
                value={value}
                onChange={onChange}
                placeholder="▮"
                required />
            <Error className="invalid-svg" aria-hidden="true" />
        </label>
    )
}