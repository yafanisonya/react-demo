
function ajax (path) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (path === '/user') {
        resolve({
          id: 1,
          name: "fanison"
        })
      } else if (path === '/books') {
        resolve([
          { id: 1, name: 'JS红宝书' },
          { id: 2, name: 'JS精粹' }
        ])
      } else if (path === '/movies') {
        resolve([
          { id: 1, name: '八百' },
          { id: 2, name: '九百' }
        ])
      }
    }, 2000)
  })
}

export default ajax;