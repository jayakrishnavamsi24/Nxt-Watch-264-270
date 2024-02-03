import {Component} from 'react'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import {formatDistanceToNow} from 'date-fns'

import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {MdPlaylistAdd} from 'react-icons/md'

import {
  VideoFrameContainer,
  VideoContainer,
  ParaEl,
  AttributesContainer,
  ChannelContainer,
  ImageEl,
  ContentContainer,
  IconParas,
} from './styledComponents'

import AppTheme from '../../context/Theme'

import './index.css'

class VideoCard extends Component {
  state = {
    videoDetails: {},
    channelDataObj: {},
    liked: false,
    disliked: false,
    // saved: false,
  }

  componentDidMount() {
    this.getData()
  }

  componentWillUnmount() {
    this.mounted = false
  }

  getData = async () => {
    this.mounted = true
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const responseData = await response.json()
      const data = responseData.video_details
      const convertedData = {
        channel: data.channel,
        description: data.description,
        id: data.id,
        publishedAt: data.published_at,
        thumbnailUrl: data.thumbnail_url,
        title: data.title,
        videoUrl: data.video_url,
        viewCount: data.view_count,
      }
      const VideoAddedTime = await formatDistanceToNow(
        new Date(data.published_at),
      )
        .split(' ')
        .slice(1)
        .join(' ')

      convertedData.publishedAt = `${VideoAddedTime} ago`
      const channelData = {
        name: data.channel.name,
        profileImageUrl: data.channel.profile_image_url,
        subscriberCount: data.channel.subscriber_count,
      }
      if (this.mounted) {
        await this.setState({
          videoDetails: convertedData,
          channelDataObj: channelData,
        })
      }
    }
  }

  isDisliked = () => {
    const {liked, disliked} = this.state
    if (liked) {
      this.setState({liked: false})
    }
    if (disliked) {
      this.setState({disliked: false})
    } else {
      this.setState({disliked: true})
    }
  }

  isLiked = () => {
    const {liked, disliked} = this.state
    if (disliked) {
      this.setState({disliked: false})
    }
    if (liked) {
      this.setState({liked: false})
    } else {
      this.setState({liked: true})
    }
  }

  //   videoAlreadySaved = async () => {
  //     await this.setState({saved: true})
  //   }

  //   isSaved = async vidRemove => {
  //     // const {saved} = this.state
  //     if (vidRemove) {
  //       await this.setState({saved: false})
  //     } else {
  //       await this.setState({saved: true})
  //     }
  //   }

  //   getFormattedData = async publishedAt => {
  //     const VideoAddedTime = await formatDistanceToNow(new Date(publishedAt))
  //       .split(' ')
  //       .slice(1)
  //       .join(' ')
  //     return `${VideoAddedTime} ago`
  //   }

  render() {
    const {videoDetails, channelDataObj, liked, disliked} = this.state
    // let {saved} = this.state
    const {videoUrl, title, viewCount, publishedAt, description} = videoDetails
    const {match} = this.props
    const {params} = match
    const {id} = params

    return (
      <AppTheme.Consumer>
        {values => {
          const {
            activeTheme,
            savedVideos,
            addSavedVideos,
            removeSavedVideos,
          } = values
          const bgColor = activeTheme === 'light' ? '#f9f9f9' : '#0f0f0f'
          const color = activeTheme === 'light' ? '#000000' : '#ffffff'
          let saved

          const onSave = vidRemove => {
            console.log('save clicked')
            // this.isSaved(vidRemove)
            if (vidRemove) {
              saved = false
              removeSavedVideos(videoDetails)
            } else {
              saved = true
              addSavedVideos(videoDetails)
            }
          }

          console.log(id)

          const isVideoAlreadySaved = savedVideos.filter(
            eachVideo => eachVideo.id === id,
          )

          if (isVideoAlreadySaved.length > 0) {
            saved = true
          } else {
            saved = false
          }

          console.log(savedVideos)
          return (
            <VideoContainer
              data-testid="videoItemDetails"
              bgColor={bgColor}
              color={color}
            >
              <VideoFrameContainer>
                <ReactPlayer url={videoUrl} controls className="react-player" />
                <ParaEl>
                  <b>{title}</b>
                </ParaEl>
              </VideoFrameContainer>
              <AttributesContainer>
                <ParaEl>
                  {viewCount} views <b>.</b> {publishedAt}
                </ParaEl>
                <ChannelContainer color={color}>
                  <IconParas
                    onClick={this.isLiked}
                    iconColor={liked ? '#2563eb' : '#64748b'}
                  >
                    <AiOutlineLike size={20} /> Like
                  </IconParas>
                  <IconParas
                    onClick={this.isDisliked}
                    iconColor={disliked ? '#2563eb' : '#64748b'}
                  >
                    <AiOutlineDislike size={20} /> Dislike
                  </IconParas>
                  <IconParas
                    onClick={() => onSave(saved)}
                    iconColor={saved ? '#2563eb' : '#64748b'}
                  >
                    <MdPlaylistAdd size={20} /> {saved ? 'Saved' : 'Save'}
                  </IconParas>
                </ChannelContainer>
              </AttributesContainer>
              <ChannelContainer>
                <ImageEl src={channelDataObj.profileImageUrl} />
                <ContentContainer>
                  <ParaEl>
                    <b>{channelDataObj.name}</b>
                  </ParaEl>
                  <ParaEl>{channelDataObj.subscriberCount}</ParaEl>
                </ContentContainer>
              </ChannelContainer>
              <ParaEl padding="30px">{description}</ParaEl>
            </VideoContainer>
          )
        }}
      </AppTheme.Consumer>
    )
  }
}

export default VideoCard
