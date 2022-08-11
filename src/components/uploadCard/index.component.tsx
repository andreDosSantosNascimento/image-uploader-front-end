import { Container } from "./style";
import uploadCardIcon from "../../assets/imgs/uploadCardIcon.svg";
import { useDropzone } from "react-dropzone";
import { FormEvent, useCallback } from "react";

const UploadCard = () => {
    const onDrop = useCallback((acceptedFiles: object) => {}, []);
    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
    });
    return (
        <Container>
            <div>
                <h1>Upload your image</h1>
                <span>File should be Jpeg, Png...</span>
            </div>
            <form >
                <div {...getRootProps()}>
                    <input type="file" {...getInputProps()} />
                    <img
                        src={uploadCardIcon}
                        alt="Icone para o card de upload."
                    />
                    <span>Drag & Drop your image here</span>
                </div>
                <span>Or</span>
                <button type="submit" {...getRootProps()}>
                    Choose a file
                </button>
            </form>
        </Container>
    );
};

export default UploadCard;
