import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: ${props => props.outerBgColor};
`

export const ShadowContainer = styled.div`
  padding: 40px 20px;
  box-shadow: 0px 0px 20px 5px ${props => props.shadowColor};
  width: 100%;
  max-width: 400px;
  border-radius: 10px;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
`

export const ImageEl = styled.img`
  width: 60%;
  object-fit: contain;
  margin-bottom: 20px;
  margin-left: 20%;
`

export const LoginFormContainer = styled.form``

export const LoginDivContainer = styled.div`
  display: flex;
  flex-direction: ${props => (props.direction === 'row' ? 'row' : 'column')};
  margin-top: 10px;
  align-self: center;
`

export const LabelEl = styled.label`
  margin-bottom: 5px;
  margin-top: 2px;
  font-weight: bold;
  font-size: 15px;
  //   color: #545454;
  cursor: ${props => props.cursor};
  outline: none;
`

export const InputEl = styled.input`
    padding: 10px;
    outline: none;
    border: 1px solid ${props => props.color};
    border-radius: 2px;
    color: ${props => props.color};
    background-color: ${props => props.bgColor};
}
`

export const ButtonEl = styled.button`
  color: #ffffff;
  background-color: #3b82f6;
  width: 100%;
  cursor: pointer;
  border: 0px;
  outline: none;
  padding: 10px;
  border-radius: 6px;
  margin-top: 15px;
`
export const ErrorMsg = styled.p`
  color: #ff0b37;
`
