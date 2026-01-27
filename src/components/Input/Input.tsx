import React from "react";
import Error from "../../assets/svg/error.svg?react";
import "./input.css";

type Input = {
    label?: string;
    error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>

export function Input({ id, label, type, value }: Input) {
    return (
        <label htmlFor={id} className="terminal">
            <span className="terminal-prompt" aria-hidden="true">&gt;_</span>
            {label}:
            <input
                id={id}
                type={type}
                value={value}
                required />
            <Error className="invalid-svg" aria-hidden="true" />
        </label>
    )
}