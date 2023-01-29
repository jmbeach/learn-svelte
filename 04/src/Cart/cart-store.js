import { writable } from 'svelte/store'

const {subscribe, update} = writable([
  {
    id: "pt1",
    title: "Test 1",
    price: 9.99,
  },
  {
    id: "pt2",
    title: "Test 2",
    price: 9.99,
  },
]);
export default {
  subscribe,
  add: (item) => {
    update(items => {
      return [...items, item]
    })
  },
  remove: (id) => {
    update(items => items.filter(item => item.id !== id))
  }
}