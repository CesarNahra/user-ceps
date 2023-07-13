import styled from 'styled-components';

export const InputGroup = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
`

export const Label = styled.label`
    display: flex;
    align-items: flex-start;
    gap: 10px;
    align-self: stretch;
    color: ${({$color}) => {return $color === 'danger' ? '#BE2E2E' : '#5281DC'}};
    font-family: Segoe UI;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export const Input = styled.input`
    display: flex;
    padding: 8px;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 5px;
    border: 1px solid ${({$color}) => {return $color === 'danger' ? '#BE2E2E' : '#5281DC'}};
    width: 100%;
`

export const TextArea = styled.textarea`
    display: flex;
    padding: 8px;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 5px;
    border: 1px solid ${({$color}) => {return $color === 'danger' ? '#BE2E2E' : '#5281DC'}};
    width: 100%;
`

export const InputContainer = styled.div`
    position: relative;
    width: 100%;
`

export const Icon = styled.button`
    position: absolute;
    top: 0.7rem;
    right: 0.7rem;
    cursor: pointer;
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({$color}) => {return $color === 'danger' ? '#BE2E2E' : '#5281DC'}};
`