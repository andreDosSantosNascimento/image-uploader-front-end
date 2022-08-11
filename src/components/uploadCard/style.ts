import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: auto;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    width: 402px;
    min-height: 469px;
    border-radius: 12px;
    background-color: #ffffff;
    text-align: center;
    letter-spacing: -0.035em;
    h1 {
        font-family: "Poppins", sans-serif;
        font-weight: 500;
        font-size: 18px;
        line-height: 27px;
        color: #4f4f4f;
    }
    span {
        font-family: "Poppins";
        font-weight: 500;
        font-size: 10px;
        line-height: 15px;
        color: #828282;
    }
    form {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        height: 70%;
        div {
            background-color: #f6f8fb;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 338px;
            height: 218px;
            border: 1px dashed #97bef4;
            border-radius: 12px;
            img {
                width: 114px;
                height: 88px;
                margin-bottom: 37px;
            }
        }
        button{
            border: none;
            width: 100px;
            height: 32px;
            border-radius: 8px;
            font-size: 12px;
            line-height: -0.035em;
            font-weight: 500;
            color: #ffffff;
            font-family: "Poppins";
            background-color: #2F80ED;
        }
    }
`;
