import { writable } from "svelte/store";

const meetups = writable([
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
      'https://images.unsplash.com/photo-1589584556363-b90f6bcc7149?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
    address: '27th Nerd Road, 32523 New York',
    contactEmail: 'swim@test.com',
    isFavorite: false,
  },
]);
export default meetups;