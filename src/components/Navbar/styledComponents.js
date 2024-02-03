import styled from 'styled-components'

export const DivContainer = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 30px;
  @media (max-width: 767px) {
    display: none;
  }
`

export const ContactSection = styled.div`
  width: 80%;
  color: ${props => props.color};
  display: flex;
  flex-direction: column;
  padding: 20px;
`

export const ContactHeading = styled.h1`
  font-size: 16px;
  font-weight: 700;
`

export const SocialMediaSection = styled.div`
  margin-top: 15px;
  margin-bottom: 10px;
`

export const SocialMediaImage = styled.img`
  width: 30px;
  margin-right: 10px;
  margin-bottom: 5px;
  cursor: pointer;
  outline: none;
`

export const ContactDescription = styled.p`
  color: ${props => props.color};
  font-size: 14px;
  font-weight: 500;
`

export const ListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  @media (max-width: 767px) {
    position: absolute;
    width: 100%;
    height: 100vh;
    opacity: 1;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #ffffff;
    display: none;
  }
`

export const ListItems = styled.li`
  color: ${props => props.color};
  padding: 10px 0;
  display: flex;
  align-items: center;
  padding: 10px 25px;
  transition: background-color 0.5s;
  transform-origin: center center;

  :hover {
    background-color: ${props => props.bgColor};
    color: black;
    .nav-icons {
      color: red;
    }
  }
`

export const SpanEl = styled.span`
  padding: 0 15px;
  margin-top: -5px;
`
