import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Form = styled.form`
    display: inline-flex;
    padding: 32px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 16px;
    border-radius: 10px;
    background: #FFF;
    box-shadow: 10px 10px 10px 0px rgba(82, 129, 220, 0.25);
    min-width: 320px;
`

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;
`

export const InputGroup = styled.div`
    display: flex;
    padding: 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 100%;
`

export const Button = styled.button`
    display: flex;
    padding: 8px 16px;
    justify-content: center;
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    padding: 8px 16px;
    justify-content: center;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 5px;
    background: ${({$outlined}) => {return $outlined ? 'transparent' : 'rgba(82, 129, 220, 0.50)'}};
    border: ${({$outlined}) => {return !$outlined ? 'none' : '1px solid rgba(82, 129, 220, 0.50)'}};

    color: ${({$outlined}) => {return !$outlined ? '#efefef' : 'rgba(82, 129, 220, 0.50)'}};
    font-family: Segoe UI;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    &:disabled {
        cursor: not-allowed;
    }
`

Button.propTypes = {
    $outlined: PropTypes.bool
}

export const Action = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
`

export const Title = styled.legend`
    color: #5281DC;
    font-family: Segoe UI;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

export const SubTitle = styled.p`
    color: rgba(105, 105, 105, 0.93);
    font-family: Segoe UI;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`


export const EsqueciSenha = styled.a`
    color: #666;
    font-family: Segoe UI;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`