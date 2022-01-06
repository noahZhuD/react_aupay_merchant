const state = {
  userInfo: {}
}

const LoginReducer = (state = state, action) => {
  switch(action.type) {
    case 'LOGIN': {
      console.log(state, '调用登录reducer')
      return { ...state }
      break
    }
  }
}

export default LoginReducer