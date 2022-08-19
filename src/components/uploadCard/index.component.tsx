import { Container, Button } from "./style";
import uploadCardIcon from "../../assets/imgs/uploadCardIcon.svg";
import { useDropzone } from "react-dropzone";
import { useCallback } from "react";
import { useFileContext } from "../../hooks/File.context";
import * as types from "../../types";

const UploadCard = () => {
    const { setFile, setFileError, file, fileError } = useFileContext();
    const onDropAccepted = useCallback((acceptedFiles: object[]) => {
        setFile(acceptedFiles[0]);
    }, []);
    const onDropRejected = useCallback((error: types.file[]) => {
        const errorMessage: types.file = error[0];
        setFileError(errorMessage.errors[0].message);
    }, []);
    const { getRootProps, getInputProps } = useDropzone({
        onDropAccepted,
        onDropRejected,
        maxFiles: 1,
    });
    return (
        <Container>
            {file || fileError ? (
                <>
                    {fileError ? (
                        <Container center>
                            <h1>{fileError}</h1>
                            <Button
                                onClick={() => {
                                    setFileError(null);
                                    setFile(null);
                                }}
                            >
                                Back
                            </Button>
                        </Container>
                    ) : (
                        <>
                            <Button
                                onClick={() => {
                                    setFileError(null);
                                    setFile(null);
                                }}
                            >
                                Reset
                            </Button>
                        </>
                    )}
                </>
            ) : (
                <>
                    <div>
                        <h1>Upload your image</h1>
                        <span>File should be Jpeg, Png...</span>
                    </div>
                    <form>
                        <div {...getRootProps()}>
                            <input type="file" {...getInputProps()} />
                            <img
                                src={uploadCardIcon}
                                alt="Icone para o card de upload."
                            />
                            <span>Drag & Drop your image here</span>
                        </div>
                        <span>Or</span>
                        <Button type="button" {...getRootProps()}>
                            Choose a file
                        </Button>
                    </form>
                </>
            )}
        </Container>
    );
};

export default UploadCard;
