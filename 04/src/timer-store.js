import {readable} from 'svelte/store';

let count = 0
const timer = readable(count, (set) => {
  const interval = setInterval(() => {
    set(count++)
  }, 1000);
  return () => {
    clearInterval(interval);
  }
});
export default timer;