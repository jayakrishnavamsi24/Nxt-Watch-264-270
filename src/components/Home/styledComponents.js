import styled from 'styled-components'

export const HomeContainer = styled.div`
  padding: 30px;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  @media (max-width: 767px) {
    margin-top: 24px;
    padding: 30px 0 30px 20px;
  }
`

export const HeadDiv = styled.div`
    border: 1px solid ${props => props.color};
    width: fit-content;
    border-radius: 4px;
    display: flex;
    background-color: ${props => props.bgColor};
    align-items: center;
    width: 90%;
    max-width: 400px;
}`

export const SearchIp = styled.input`
    width: 100%;
    outline: none;
    padding: 4px 13px;
    border: none;
    background-color: ${props => props.bgColor};
    color: ${props => props.color};
    @media (max-width:767px){
        width: 100%;
    }
}`

export const ButtonEl = styled.button`
  border: none;
  outline: none;
  padding: 10px 20px;
  cursor: pointer;
  @media (max-width: 767px) {
    padding: 5px 10px;
  }
`

export const Banner = styled.div`
  display: ${props => (props.bannerDisplay === 'flex' ? 'flex' : 'none')};
  justify-content: space-around;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  width: 95%;
  height: 240px;
  padding: 20px 10px;
  margin-bottom: 30px;
  color: black;
  @media screen and (min-width: 768px) {
    width: 100%;
    padding: 0px;
    padding-top: 20px;
  }
`
export const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
`
export const BannerLogo = styled.img`
  width: 150px;
  @media screen and(max-width:576px) {
    width: 100px;
  }
`
export const BannerDescription = styled.p`
  font-size: 20px;
  width: 250px;
  @media screen and(max-width:576px) {
    width: 100px;
  }
`
export const GetNowButton = styled.button`
  padding: 10px;
  width: 150px;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  color: #181818;
  font-weight: bold;
  border: 1px solid #181818;
  margin-top: 20px;
  margin-bottom: 20px;
`

export const ListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-bottom: 25px;
  @media (min-width: 768px) {
    width: 300px;
    height: 270px;
  }
`

export const ListItem = styled.li`
  margin-right: 20px;
  display: flex;
  cursor: pointer;
`

export const ImageTag = styled.img`
  width: ${props => props.width};
  object-fit: contain;
`
export const ContentDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const ParaTag = styled.p`
  font-size: ${props => props.fontSize};
`

export const NoResults = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  @media (max-width: 767px) {
    justify-content: center;
  }
`

export const NoVideosImage = styled.img`
  width: 40%;
  max-width: 350px;
  object-fit: contain;
  @media (max-width: 767px) {
    width: 100%;
  }
  @media (min-width: 768px) {
    padding-top: 30px;
  }
`
export const NoResultsHeading = styled.h1`
  font-size: 28px;
  margin-bottom: 10px;
  @media (max-width: 767px) {
    font-size: large;
  }
`

export const NoResultsPara = styled.p`
  margin-top: 0px;
  margin-bottom: 20px;
  @media (max-width: 767px) {
    font-size: medium;
  }
`

export const NoResultsButton = styled.button`
  background-color: #4f46e5;
  color: #ffffff;
  outline: none;
  border: none;
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 4px;
`
