import { writable } from "svelte/store";

export const FeedbackStore = writable ([
    {
        id : 1,
        rating : 10,
        text : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam animi rerum id esse, totam fuga?"
    },
    {
        id : 2,
        rating : 8,
        text : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni quam quod libero mollitia similique quaerat. Qui, officiis. Eligendi, ut aliquam."
    },
    {
        id : 3,
        rating : 6,
        text : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores maxime cumque dolore aliquid ipsa repudiandae?"
    },
    {
        id : 4,
        rating : 9,
        text : "Lorem  consectetur adipisicing elit. Magni quam quod libero mollitia similique quaerat. Qui, officiis"
    },
])