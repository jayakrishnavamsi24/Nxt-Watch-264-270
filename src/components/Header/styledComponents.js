import styled, {keyframes} from 'styled-components'

const FadeIn = keyframes`
    0%{
        opacity:0;
    }
    100%{
        opacity:1;
    }
`

export const HeaderContainer = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 15px;
  background-color: ${props => props.bgColor};
  @media (max-width: 767px) {
    padding-bottom: 29px;
  }
`

export const HeaderContentsSmallContainer = styled.div`
  display: flex;
  align-items: center;
  @media (min-width: 768px) {
    display: none;
  }
`
export const HeaderContentsLargeContainer = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 767px) {
    display: none;
  }
`

export const ImageEl = styled.img`
  cursor: ${props => props.cursor};
  @media (max-width: 767px) {
    height: ${props => props.height};
    display: ${props => props.display};
  }
  @media (min-width: 768px) {
    height: 30px;
    margin: 0px ${props => props.margin};
  }
`

export const ButtonElSmall = styled.button`
    background: none;
    border: none;
    outline: none;
    color: ${props => props.color};
}
`

export const ButtonElLarge = styled.button`
  color: ${props => props.color};
  border: ${props => props.border};
  border-color: ${props => props.color};
  background: transparent;
  outline: none;
  padding: ${props => props.padding};
  cursor: pointer;
`
export const ListContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  background: ${props => props.bgColor};
  width: 103%;
  height: 100vh;
  top: -16px;
  left: -9px;
  padding-left: 40%;
  @media (min-width: 768px) {
    display: none;
  }
`
export const PopUp = styled.div`
  display: ${props => props.display};
  animation: ${FadeIn} 0.5s;
`

export const HamburgerLogoutPopup = styled.div`
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  padding: 20px 26px;
  padding-top: 15px;
  padding-bottom: 30px;
  border-radius: 7px;
  margin: 0px;
`

export const HamburgerQuestion = styled.p`
  //   background-color: black;
  //   color: white;
  //   padding: 20px 30px;
  //   padding-top: 10px;
  //   padding-bottom: 25px;
  //   border-radius: 7px;
  margin-bottom: 35px;
`

export const HamburgerPopUpButtonsContainer = styled.div`
  //   background-color: black;
  //   color: white;
  //   padding: 20px 30px;
  //   padding-top: 10px;
  //   padding-bottom: 25px;
  //   border-radius: 7px;
  width: 100%;
  display: flex;
  justify-content: space-around;
`

export const PopUpCancelButton = styled.button`
  padding: 10px 18px;
  border: 1px solid ${props => props.color};
  border-radius: 2px;
  background-color: transparent;
  color: ${props => props.color};
  cursor: pointer;
  outline: none;
`

export const PopUpConfirmButton = styled.button`
  padding: 10px 18px;
  border: none;
  border-radius: 2px;
  background-color: #3b82f6;
  color: white;
  cursor: pointer;
  outline: none;
`

export const ListItem = styled.li`
  padding: 10px 0;
  :hover {
    background-color: ${props => props.bgColor};
    color: ${props => props.color};
    .nav-icons {
      color: red;
    }
  }
`
export const Para = styled.p`
  position: absolute;
  top: 45px;
  right: 50px;
  color: ${props => props.color};
`
