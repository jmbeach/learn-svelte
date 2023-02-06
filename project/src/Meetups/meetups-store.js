import { writable } from "svelte/store";

const { subscribe, update, set } = writable([]);
export default {
  subscribe,
  set,
  add: (meetup) =>
    update((meetups) => [
      {...meetup},
      ...meetups,
    ]),
  toggleFavorite: (id) =>
    update((meetups) => {
      const copy = [...meetups];
      const meetupI = copy.findIndex((x) => x.id == id);
      const meetup = {
        ...copy[meetupI],
        isFavorite: !copy[meetupI].isFavorite,
      };
      copy[meetupI] = meetup;
      return copy;
    }),
  update: (id, data) =>
    update((meetups) => {
      const copy = [...meetups];
      const meetupI = copy.findIndex((x) => x.id == id);
      copy[meetupI] = { id, ...data };
      return copy;
    }),
  delete: (id) => update((meetups) => meetups.filter((x) => x.id !== id)),
};
