import type { ReactNode } from "react";

export type Button = {
    children: ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export type Auth = {
    name?: string;
    email: string;
    password: string;
}
