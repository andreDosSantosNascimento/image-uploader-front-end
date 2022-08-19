import { ReactNode } from "react";

export interface ProviderData {
    children: ReactNode;
}

export interface fileError {
    code: string;
    message: string;
}

export interface file {
    file: any;
    errors: fileError[];
}