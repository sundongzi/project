import text from './text'
export default {
  extends: text,
  created () {
    console.log('hello', this.$attrs)
  }
}
