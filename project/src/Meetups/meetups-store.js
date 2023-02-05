import { writable } from "svelte/store";

const { subscribe, update } = writable([
  {
    id: "m1",
    title: "Coding Bootcamp",
    subtitle: "Learn to code in 2 hours",
    description:
      "In this meetup, we will have some experts that teach you how to code",
    imgUrl: "code-meetup.jpeg",
    address: "27th Nerd Road, 32523 New York",
    contactEmail: "code@test.com",
    isFavorite: false,
  },
  {
    id: "m2",
    title: "Swim Together",
    subtitle: "Let's go swimming!",
    description: "We will simply swim some rounds!",
    imgUrl: "pool.png",
    address: "27th Nerd Road, 32523 New York",
    contactEmail: "swim@test.com",
    isFavorite: false,
  },
]);
export default {
  subscribe,
  add: (meetup) =>
    update((meetups) => [
      {
        id: new Date().getTime(),
        ...meetup,
      },
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
