const routerFiles = require.context('@/Pages', true, /\.js$/)
const routerAry = []
routerFiles.keys().map(item => {
  if (item.includes('/404') || item.includes('/Layout') || item.includes('/Home') || item.includes('/Login')) return false
  let pathAry = item.split('/')
  let path = '/index/' + (pathAry.slice(1, pathAry.length - 1).join('/')).toLowerCase()
  let component = routerFiles(item).default
  routerAry.push({
    path,
    component
  })
  return true
})
export default routerAry