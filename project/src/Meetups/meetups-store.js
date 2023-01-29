import { writable } from "svelte/store";

const {subscribe, update} = writable([
  {
    id: 'm1',
    title: 'Coding Bootcamp',
    subtitle: 'Learn to code in 2 hours',
    description:
      'In this meetup, we will have some experts that teach you how to code',
    imgUrl:
      'https://images.unsplash.com/photo-1531498860502-7c67cf02f657?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
    address: '27th Nerd Road, 32523 New York',
    contactEmail: 'code@test.com',
    isFavorite: false,
  },
  {
    id: 'm2',
    title: 'Swim Together',
    subtitle: "Let's go swimming!",
    description: 'We will simply swim some rounds!',
    imgUrl:
      'https://images.unsplash.com/photo-1542668595-fa9394e5b686?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1365&q=80',
    address: '27th Nerd Road, 32523 New York',
    contactEmail: 'swim@test.com',
    isFavorite: false,
  },
]);
export default {
  subscribe,
  add: (meetup) => update(meetups => [
    {
      id: new Date().getTime(),
      ...meetup
    },
    ...meetups
  ]),
  toggleFavorite: (id) => update(meetups => {
    const copy = [...meetups];
    const meetupI = copy.findIndex((x) => x.id == id);
    const meetup = {
      ...copy[meetupI],
      isFavorite: !copy[meetupI].isFavorite,
    };
    copy[meetupI] = meetup;
    return copy;
  }),
  update: (id, data) => update(meetups => {
    const copy = [...meetups];
    const meetupI = copy.findIndex((x) => x.id == id);
    copy[meetupI] = { id,...data };
    return copy;
  })
};