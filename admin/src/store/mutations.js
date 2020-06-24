const matations = {
  SetUserInfo: (state, argData = {}) => {
    if (argData && argData.image) {
      argData.image = argData.image.replace('http://', 'https://')
    }
    state.UserInfo = argData
  },
  SetCodeCount: (state, argData = 0) => {
    state.CodeCount = argData
  }
}

export default matations