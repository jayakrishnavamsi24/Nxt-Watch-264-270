import React from 'react'

const AppTheme = React.createContext({
  activeTheme: 'light',
  savedVideos: [],
  addSavedVideos: () => {},
  removeSavedVideos: () => {},
  onChangeTheme: () => {},
})

export default AppTheme
