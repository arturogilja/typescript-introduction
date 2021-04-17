import { debounce, shuffle } from 'lodash'

debounce(() => {
  console.log('I AM DEBOUNCED')
}, 5000)