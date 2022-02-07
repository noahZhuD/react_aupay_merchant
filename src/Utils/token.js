export function setToken(value, name = 'loginToken') {
  sessionStorage.setItem(name, value)
}

export function getToken(name = 'loginToken') {
  return sessionStorage.getItem(name)
}

export function delToken(name = 'loginToken') {
  sessionStorage.removeItem(name)
}