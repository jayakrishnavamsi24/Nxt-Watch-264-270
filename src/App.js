import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import './App.css'

import AppTheme from './context/Theme'
import Login from './components/Login'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideoCard from './components/VideoCard'
import NotFound from './components/NotFound'

class App extends Component {
  state = {activeTheme: 'light', savedVideos: []}

  changeTheme = activeTheme => {
    this.setState({activeTheme})
  }

  addSavedVideos = async videoData => {
    const {savedVideos} = this.state
    await this.setState({
      savedVideos: [...savedVideos, videoData],
    })
  }

  removeSavedVideos = async videoData => {
    const {savedVideos} = this.state
    const filteredVideosList = savedVideos.filter(
      eachVideo => eachVideo.id !== videoData.id,
    )
    await this.setState({savedVideos: filteredVideosList})
  }

  render() {
    const {activeTheme, savedVideos} = this.state
    const bgColor = activeTheme === 'light' ? 'light' : 'dark'

    return (
      <AppTheme.Provider
        value={{
          activeTheme,
          savedVideos,
          addSavedVideos: this.addSavedVideos,
          removeSavedVideos: this.removeSavedVideos,
          changeTheme: this.changeTheme,
        }}
      >
        <>
          <div className="app-container">
            <Switch>
              <Route exact path="/login" component={Login} />
              <>
                <Header />
                <div className={`${bgColor} main-frame-container`}>
                  <Navbar />
                  <div className="content">
                    <Switch>
                      <Route exact path="/" component={Home} />
                      <Route exact path="/trending" component={Trending} />
                      <Route exact path="/gaming" component={Gaming} />
                      <Route
                        exact
                        path="/saved-videos"
                        component={SavedVideos}
                      />
                      <Route exact path="/videos/:id" component={VideoCard} />
                      <Route component={NotFound} />
                    </Switch>
                  </div>
                </div>
              </>
            </Switch>
          </div>
        </>
      </AppTheme.Provider>
    )
  }
}

export default App
