import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'
import Cookies from 'js-cookie'
import {Link, Redirect} from 'react-router-dom'
import {AiOutlineSearch} from 'react-icons/ai'
import {MdClose} from 'react-icons/md'
import LoaderComp from '../Loader'

import './index.css'

import AppTheme from '../../context/Theme'

import ErrorImage from '../ErrorImage'

import {
  HomeContainer,
  HeadDiv,
  SearchIp,
  ButtonEl,
  ListContainer,
  ListItem,
  ImageTag,
  ContentDiv,
  ParaTag,
  NoVideosImage,
  NoResults,
  NoResultsHeading,
  NoResultsPara,
  NoResultsButton,
  Banner,
  BannerContent,
  BannerLogo,
  BannerDescription,
  GetNowButton,
} from './styledComponents'

class Home extends Component {
  state = {
    dataArray: [],
    isLoading: false,
    status: '',
    searchIp: '',
    bannerDisplay: 'flex',
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async (searchVal = '') => {
    this.setState({isLoading: true})
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchVal}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    try {
      const response = await fetch(url, options)
      if (response.ok) {
        const data = await response.json()
        await this.setState({dataArray: data.videos, status: true})
      }
    } catch {
      this.setState({status: false})
    }
    this.setState({isLoading: false})
  }

  onChange = e => {
    this.setState({searchIp: e.target.value})
  }

  onSearch = () => {
    const {searchIp} = this.state
    this.getVideos(searchIp)
  }

  onKey = e => {
    if (e.key.toLowerCase() === 'enter') {
      this.onSearch()
    }
  }

  closeBanner = () =>
    this.setState({
      bannerDisplay: 'none',
    })

  retry = () => {
    this.onSearch()
  }

  render() {
    const {dataArray, isLoading, status, searchIp, bannerDisplay} = this.state

    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
      return <Redirect to="/login" />
    }

    return (
      <AppTheme.Consumer>
        {value => {
          const {activeTheme} = value
          const color = activeTheme === 'light' ? '#000000' : '#ffffff'
          const bgColor = activeTheme === 'light' ? '#f9f9f9' : '#181818'

          return (
            <HomeContainer
              data-testid="home"
              bgColor={`${bgColor}`}
              color={`${color}`}
            >
              <Banner
                // bgImage="https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png"
                bannerDisplay={bannerDisplay}
                data-testid="banner"
              >
                <BannerContent>
                  <BannerLogo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                    alt="nxt watch logo"
                  />
                  <BannerDescription>
                    Buy NxtWatch Premium prepaid plans with UPI{' '}
                  </BannerDescription>
                  <GetNowButton>GET IT NOW</GetNowButton>
                </BannerContent>
                <MdClose
                  cursor="pointer"
                  onClick={this.closeBanner}
                  data-testid="close"
                />
              </Banner>
              <HeadDiv bgColor={`${bgColor}`} color={`${color}`}>
                <SearchIp
                  placeholder="Search"
                  type="search"
                  value={searchIp}
                  onChange={this.onChange}
                  onKeyDown={this.onKey}
                  bgColor={`${bgColor}`}
                  color={`${color}`}
                />
                <ButtonEl onClick={this.onSearch} data-testid="searchButton">
                  <AiOutlineSearch size={20} />
                </ButtonEl>
              </HeadDiv>
              {isLoading ? (
                <LoaderComp />
              ) : (
                <>
                  {status ? (
                    <>
                      {dataArray.length === 0 ? (
                        <NoResults>
                          <NoVideosImage
                            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                            alt="no videos"
                          />
                          <NoResultsHeading>
                            No Search results found
                          </NoResultsHeading>
                          <NoResultsPara>
                            Try different keywords or remove search filter
                          </NoResultsPara>
                          <NoResultsButton onClick={this.retry}>
                            Retry
                          </NoResultsButton>
                        </NoResults>
                      ) : (
                        <ContentDiv>
                          {dataArray.map(item => {
                            let VideoAddedTime = formatDistanceToNow(
                              new Date(item.published_at),
                            )
                            VideoAddedTime = VideoAddedTime.split(' ')
                              .slice(1)
                              .join(' ')
                            return (
                              <Link
                                to={`/videos/${item.id}`}
                                className={
                                  activeTheme === 'light'
                                    ? 'link-light'
                                    : 'link-dark'
                                }
                                key={item.id}
                              >
                                <ListContainer>
                                  <ListItem>
                                    <ImageTag
                                      src={`${item.thumbnail_url}`}
                                      alt="video thumbnail"
                                      width="100%"
                                    />
                                  </ListItem>
                                  <ListItem>
                                    <div className="logo-div">
                                      <ImageTag
                                        src={`${item.channel.profile_image_url}`}
                                        alt="channel logo"
                                        width="30px"
                                      />
                                    </div>
                                    <div>
                                      <ParaTag fontSize="15px">
                                        {item.title}
                                      </ParaTag>
                                      <ParaTag fontSize="12px">
                                        {item.channel.name}
                                      </ParaTag>
                                      <ParaTag fontSize="12px">
                                        {item.view_count} views .{' '}
                                        <span>{`${VideoAddedTime} ago`}</span>
                                      </ParaTag>
                                    </div>
                                  </ListItem>
                                </ListContainer>
                              </Link>
                            )
                          })}
                        </ContentDiv>
                      )}
                    </>
                  ) : (
                    <ErrorImage refresh={this.getVideos} />
                  )}
                </>
              )}
            </HomeContainer>
          )
        }}
      </AppTheme.Consumer>
    )
  }
}

export default Home
