export function verifyCount($event) {
  let value = $event.target.value
  switch ($event.target.dataset.nrule) {
    // 用户名 只能输入数字、字母、下划线
    case 'user': {
      let userReg = /^[a-zA-Z0-9_]{1,}$/g
      if (!userReg.test(value)) {
        $event.target.value = $event.target.value.slice(0, $event.target.value.length - 1)
        return false
      }
      return true
    }
    // 密码 不能输入汉字和空格
    case 'pass': {
      console.log('start')
      // 汉字的过滤
      let passReg = /[\u4E00-\u9FA5]/g
      // 标点符号
      let punctuationReg = /[\u3002|\uff1f|\uff01|\uff0c|\u3001|\uff1b|\uff1a|\u201c|\u201d|\u2018|\u2019|\uff08|\uff09|\u300a|\u300b|\u3008|\u3009|\u3010|\u3011|\u300e|\u300f|\u300c|\u300d|\ufe43|\ufe44|\u3014|\u3015|\u2026|\u2014|\uff5e|\ufe4f|\uffe5]/g;
      
      console.log($event.target.value, 1)
      value = value.replace(passReg, '')
      console.log(value, 2)
      value = value.replace(punctuationReg, '')
      console.log(value, 3)
      value = value.replace(' ', '')
      console.log(value, 5)
      $event.target.value = value
      console.log($event.target.value, 4)
      // console.log($event.target.value, 1)
      // $event.target.value = $event.target.value.replace(passReg, '')
      // console.log($event.target.value, 2)
      // $event.target.value = $event.target.value.replace(punctuationReg, '')
      // console.log($event.target.value, 3)
      // $event.target.value = $event.target.value.replace(' ', '')
      // console.log($event.target.value, 4)
      return true
    }
    default:
      break;
  }
}