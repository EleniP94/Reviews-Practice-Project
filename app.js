const reviews = [
    {
        id: 1,
        name: "Susan Smith",
        job: "Web Developer",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric  chartruse before they sold out chambray...",
    },
    {
        id: 2,
        name: "Anna Johnson",
        job: "Web Designer",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        text: "I am applying to be a top web designer",
      
    },
    {
        id: 3,
        name: "Lucas Brennington",
        job: "Software Engineer",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        text: "I am trying my best and practicing my typing skills at the same time",
    },
]

//select items
const img = document.getElementById('person-img');
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// set starting item 
let currentItem = 0;

//load initial item
window.addEventListener("DOMContentLoaded", function () {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.info;
});