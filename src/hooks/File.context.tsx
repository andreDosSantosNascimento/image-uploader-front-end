import { createContext, ReactNode, useContext, useState } from "react";
import * as types from "../types";

interface FileData {
    setFile: React.Dispatch<React.SetStateAction<object | null>>;
    setFileError: React.Dispatch<React.SetStateAction<string | null>>;
    file: object | null;
    fileError: string | null;
}
const FileContext = createContext<FileData>({} as FileData);

export const FileProvider = ({ children }: types.ProviderData) => {
    const [file, setFile] = useState<object | null>(null);
    const [fileError, setFileError] = useState<string | null>(null);

    return (
        <FileContext.Provider
            value={{ setFile, setFileError, fileError, file }}
        >
            {children}
        </FileContext.Provider>
    );
};

export const useFileContext = () => useContext(FileContext);
