import {debounce, throttle} from 'lodash/function'
import {cloneDeep} from 'lodash-es'
import config from '@/config'

/* eslint-disable */
const Utils = {}

/** 参数说明：
 * 根据长度截取先使用字符串，超长部分追加…
 * str 对象字符串
 * len 目标字节长度
 * 返回值： 处理结果字符串
 */
Utils.cutString = (str, len) => {
  if (str.length * 2 <= len) {
    return str
  }
  let strlen = 0
  let s = ''
  for (let i = 0; i < str.length; i++) {
    // eslint-disable-line
    s += str.charAt(i)
    if (str.charCodeAt(i) > 128) {
      strlen += 2
      if (strlen >= len) {
        return `${s.substring(0, s.length - 1)}...`
      }
    } else {
      strlen += 1
      if (strlen >= len) {
        return `${s.substring(0, s.length - 2)}...`
      }
    }
  }
  return s
}

Utils.solveUploadImg = (imgArr = []) => {
  let imgUrl = ''
  const len = imgArr.length
  if(len === 1){
    imgUrl = imgArr[0]['src']
  } else if(len > 1){
    imgUrl = imgArr.reduce((arr, item) => {
      arr.push(item.src)
    }, [])
  }
  return imgUrl
}

// 解析响应图片
Utils.solveShowImg = (imgUrl) => {
  if(!imgUrl) return [];

  let json = {},
    arr = []
  if(Array.isArray(imgUrl)){

  } else {
    json.display = imgUrl
    json.src = imgUrl.replace(config.imgBaseURL, '')
    json.id = Utils.getRandomStr(3)
    json.imgId = Utils.getRandomStr(3)
    arr.push(json)
    json = null
  }
  return arr
}

// 解析请求多图
Utils.solveUploadMultipleImg = (imgArr = []) => {
  if(!Array.isArray(imgArr)) imgArr = [imgArr]
  let index = 1,
    imgUrl = imgArr.reduce((arr, item) => {
      arr.push({src: item.src, index})
      index++
      return arr
    }, [])

  return imgUrl
}

// 解析响应多图
Utils.solveReponseMultipleImg = (imgArr = []) => {
  if(!imgArr || imgArr.length <= 0) return [];
  let json = {};
  let imgUrl = imgArr.reduce((arr, item) => {
    json.display = item.src
    json.src = item.src.replace(config.imgBaseURL, '')
    json.id = Utils.getRandomStr(3)
    json.imgId = Utils.getRandomStr(3)
    arr.push(json)
    json = {}
    return arr
  }, [])
  return imgUrl
}


/**
 * 简单数组的交集
 * @param {Array} a
 * @param {Array} b
 */
Utils.getIntersect = (a, b) => {
  if (a.constructor === Array && b.constructor === Array) {
    const set1 = new Set(a)
    const set2 = new Set(b)
    return Array.from(new Set([...set1].filter(x => set2.has(x))))
  }
  return null
}

/**
 * 防抖函数
 * @param {*} func 函数体
 * @param {*} wait 延时
 */
Utils.debounce = (func, wait = 50) => debounce(func, wait)

/**
 * 节流函数
 * @param {*} func 函数体
 * @param {*} wait 延时
 */
Utils.throttle = (func, wait = 50) => throttle(func, wait)

/**
 * 返回 n 位的随机字符串
 * @param {Number} n
 */
Utils.getRandomStr = (n = 6) => {
  let str = ''
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890'
  for (let i = 0; i < n; i += 1) {
    str += chars.charAt(Math.floor(Math.random() * 62))
  }
  return str
}

function getTypeOf(obj) {
  const { toString } = Object.prototype
  const map = {
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object RegExp]': 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]': 'null',
    '[object Object]': 'object',
    '[object Symbol]': 'symbol',
  }
  return map[toString.call(obj)]
}

function insertItem(item, arr) {
  const { order } = item
  if (typeof arr[order] !== 'number') {
    arr[order] = item
    return
  }
  let moveBegin
  let moveEnd
  let pos
  let i = order + 1

  while (arr[i]) {
    if (arr[i].order > order) {
      if (!moveBegin) {
        moveBegin = i
        pos = i
      }
    }
    i += 1
  }

  if (moveBegin) {
    moveEnd = i
  } else {
    pos = i
  }

  if (!moveEnd) {
    arr[pos] = item
    return
  }

  // 需要移动
  for (let i = moveEnd; i >= moveBegin; i -= 1) {
    arr[i + 1] = arr[i]
  }
  arr[pos] = item
}

/**
 * 根据数组的 order 字段排序
 * @param {Array} source
 */
Utils.sortByOrder = (source = []) => {
  if (!Array.isArray(source)) {
    console.error('sortByOrder 传入参数不符合要求, 应为数组', source)
    return source
  }
  const tmp = []
  let target = []

  // 将带排序的子项添加进临时数组 tmp
  for (let i = 0; i < source.length; i += 1) {
    if (typeof source[i].order !== 'number') {
      continue
    }
    let { order } = source[i]
    // 支持设置倒数顺序
    if (order < 0) {
      order = source.length + order
      if (order < 0) {
        order = 0
      }
    }

    // 确保整数
    source[i].order = Math.floor(order)

    // 插入临时数组
    insertItem(source[i], tmp)
  }

  // 合并临时数组和原数组
  for (let i = 0, j = 0; i < source.length; i += 1) {
    if (typeof source[i].order === 'number') {
      continue
    }
    // 找需要填的坑
    while (tmp[j]) {
      j += 1
    }
    tmp[j] = source[i]
  }
  // 筛除空隙
  target = tmp.filter(item => !!item)
  return target
}

/**
 * 深度遍历，深拷贝
 * @param {*} data
 */
Utils.deepClone = data => cloneDeep(data)

/**
 * 判断权限
 */
Utils.hasPermission = (auths, route, user) => {
  // eslint-disable-line
  if (user && user.isSuper) {
    return true
  }
  if (route.right) {
    return auths.some(auth => route.right.indexOf(auth) > -1)
  }
  return true
}

let cached
/**
 * 获取窗口滚动条大小, From: https://github.com/react-component/util/blob/master/src/getScrollBarSize.js
 * @param {boolean} fresh 强制重新计算
 * @returns {number}
 */
export function getScrollBarSize(fresh) {
  if (fresh || cached === undefined) {
    const inner = document.createElement('div')
    inner.style.width = '100%'
    inner.style.height = '200px'

    const outer = document.createElement('div')
    const outerStyle = outer.style

    outerStyle.position = 'absolute'
    outerStyle.top = 0
    outerStyle.left = 0
    outerStyle.pointerEvents = 'none'
    outerStyle.visibility = 'hidden'
    outerStyle.width = '200px'
    outerStyle.height = '150px'
    outerStyle.overflow = 'hidden'

    outer.appendChild(inner)

    document.body.appendChild(outer)

    const widthContained = inner.offsetWidth
    outer.style.overflow = 'scroll'
    let widthScroll = inner.offsetWidth

    if (widthContained === widthScroll) {
      widthScroll = outer.clientWidth
    }

    document.body.removeChild(outer)

    cached = widthContained - widthScroll
  }
  return cached
}

/**
 *
 * @param dateNow :Date类
 * @param intervalDays ：间隔天数
 * @param bolPastTime  ：Boolean,判断在参数date之前，还是之后，
 */
Utils.getDateRange = (dateNow,intervalDays,bolPastTime) => {
  let oneDayTime = 24 * 60 * 60 * 1000;
  let list = [];
  let lastDay;

  if(bolPastTime == true){
    lastDay = new Date(dateNow.getTime() - intervalDays * oneDayTime);
    list.push(formateDate(lastDay));
    list.push(formateDate(dateNow));
  }else{
    lastDay = new Date(dateNow.getTime() + intervalDays * oneDayTime);
    list.push(formateDate(dateNow));
    list.push(formateDate(lastDay));
  }
  return list;
}
function formateDate(time){
  let year = time.getFullYear()
  let month = time.getMonth() + 1
  let day = time.getDate()

  if (month < 10) {
    month = '0' + month
  }

  if (day < 10) {
    day = '0' + day
  }

  return year + '-' + month + '-' + day + ''
}

Utils.getWeeksByDay = (date) => {
  return getMyDay(new Date(date))
}


function getMyDay(date) {
  let week
  switch (date.getDay()) {
    case 0:
      week = '周日'
      break;
    case 1:
      week = '周一'
      break;
    case 2:
      week = '周二'
      break;
    case 3:
      week = '周三'
      break;
    case 4:
      week = '周四'
      break;
    case 5:
      week = '周五'
      break;
    case 6:
      week = '周六'
      break;
    default: week = '信息错误'
  }
  return week
}

export default Utils
