const text = function () {
  let a = 1
  return function () {
    console.log(a + 1)
  }
}
export {
  text
}
