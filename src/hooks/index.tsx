import { ReactNode } from "react";
import { ProviderData } from "../types";
import { FileProvider } from "./File.context";

export const Provider = ({ children }: ProviderData) => {
    return <FileProvider>{children}</FileProvider>;
};
