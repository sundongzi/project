const identifer = '$$'
export default function (store) {
  store.subscribe((mutation) => {
    console.log('mutation', mutation)
    let { type, payload } = mutation
    if (type.endsWith(identifer)) {
      window.localStorage.setItem(type, JSON.stringify(payload))
    }
  })
}
