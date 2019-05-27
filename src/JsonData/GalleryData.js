const newsItems = [
    {
        "newsTitle":"Aenean auctor congue orci. Duis tempor, nisi Aenean auctor congue orci. Duis tempor, nisi Aenean auctor congue orci. Duis tempor, nisi",
        "newsImage":"https://www.w3schools.com/w3images/underwater.jpg",
        "newsDate":"09/19",
        "newsLink":"https://www.w3schools.com/",
        "newsid"  : 1
    },
    {
        "newsTitle":"Fusce eleifend ante sollicitudin augue efficitur Fusce eleifend ante sollicitudin augue efficitur Fusce eleifend ante sollicitudin augue efficitur ",
        "newsImage":"https://www.w3schools.com/w3images/falls2.jpg",
        "newsDate":"09/19",
        "newsLink":"https://www.w3schools.com/",
        "newsid"  : 2
    },
    {
        "newsTitle":"Duis tempor, nisi vitae convallis sagittis Duis tempor, nisi vitae convallis sagittis Duis tempor, nisi vitae convallis sagittis ",
        "newsImage":"https://www.w3schools.com/w3images/nature.jpg",
        "newsDate":"09/19",
        "newsLink":"https://www.w3schools.com/",
        "newsid"  : 3
    },
    {
        "newsTitle":"Nulla sed mauris iaculis, bibendum arcu a, porttitor dolor. Nulla sed mauris iaculis, bibendum arcu a, porttitor dolor. ",
        "newsImage":"https://www.w3schools.com/w3images/mist.jpg",
        "newsDate":"09/19",
        "newsLink":"https://www.w3schools.com/",
        "newsid"  : 4
    },
    {
        "newsTitle":"Duis tempor, nisi vitae convallis sagittis, leo dui accumsan urna Duis tempor, nisi vitae convallis sagittis, leo dui accumsan urna Duis tempor, nisi vitae convallis sagittis, leo dui accumsan urna ",
        "newsImage":"https://www.w3schools.com/w3images/rocks.jpg",
        "newsDate":"09/19",
        "newsLink":"https://www.w3schools.com/",
        "newsid"  : 5
    },
    {
        "newsTitle":"Aenean auctor congue orci. Duis tempor, nisi Aenean auctor congue orci. Duis tempor, nisi Aenean auctor congue orci. Duis tempor, nisi" ,
        "newsImage":"https://www.w3schools.com/w3images/paris.jpg",
        "newsDate":"09/19",
        "newsLink":"https://www.w3schools.com/",
        "newsid"  : 6
    },
    {
        "newsTitle":"Fusce eleifend ante sollicitudin augue efficitur Fusce eleifend ante sollicitudin augue efficitur Fusce eleifend ante sollicitudin augue efficitur",
        "newsImage":"https://www.w3schools.com/w3images/mountainskies.jpg",
        "newsDate":"09/19",
        "newsLink":"https://www.w3schools.com/",
        "newsid"  : 7
    },

    {
        "newsTitle":"Aenean auctor congue orci. Duis tempor, nisi Aenean auctor congue orci. Duis tempor, nisi Aenean auctor congue orci. Duis tempor, nisi",
        "newsImage":"https://media-cache-ec0.pinimg.com/600x/0b/87/f4/0b87f4eb50b3d7a7c9d70d97234753ab.jpg",
        "newsDate":"09/19",
        "newsLink":"https://www.w3schools.com/",
        "newsid"  : 8
    },
    {
        "newsTitle":"Fusce eleifend ante sollicitudin augue efficitur Fusce eleifend ante sollicitudin augue efficitur Fusce eleifend ante sollicitudin augue efficitur ",
        "newsImage":"https://media-cache-ec0.pinimg.com/736x/0f/d0/84/0fd0847f7b48e5f16d896f62baa31b97.jpg",
        "newsDate":"09/19",
        "newsLink":"https://www.w3schools.com/",
        "newsid"  : 9
    },
    {
        "newsTitle":"Duis tempor, nisi vitae convallis sagittis Duis tempor, nisi vitae convallis sagittis Duis tempor, nisi vitae convallis sagittis ",
        "newsImage":"https://media-cache-ak0.pinimg.com/736x/2e/7f/db/2e7fdb7ed765973407fed0b0141bb126.jpg",
        "newsDate":"09/19",
        "newsLink":"https://www.w3schools.com/",
        "newsid"  : 10
    },
    {
        "newsTitle":"Nulla sed mauris iaculis, bibendum arcu a, porttitor dolor. Nulla sed mauris iaculis, bibendum arcu a, porttitor dolor. Nulla sed mauris iaculis, bibendum arcu a, porttitor dolor. ",
        "newsImage":"https://media-cache-ec0.pinimg.com/736x/c3/10/22/c3102281f88237e7a2515099d2e6651f.jpg",
        "newsDate":"09/19",
        "newsLink":"https://www.w3schools.com/",
        "newsid"  : 11
    },
    {
        "newsTitle":"Duis tempor, nisi vitae convallis sagittis, leo Duis tempor, nisi vitae convallis sagittis, leo dui accumsan urna",
        "newsImage":"https://media-cache-ec0.pinimg.com/600x/0b/87/f4/0b87f4eb50b3d7a7c9d70d97234753ab.jpg",
        "newsDate":"09/19",
        "newsLink":"https://www.w3schools.com/",
        "newsid"  : 12
    },
    {
        "newsTitle":"Aenean auctor congue orci. Duis tempor, congue orci. Duis tempor, nisi ",
        "newsImage":"https://media-cache-ec0.pinimg.com/600x/95/11/02/951102f18d5a50c3ca483e93c6f92f5a.jpg",
        "newsDate":"09/19",
        "newsLink":"https://www.w3schools.com/",
        "newsid"  : 13
    },
    {
        "newsTitle":"Fusce eleifend ante sollicitudin augue efficitur",
        "newsImage":"https://media-cache-ec0.pinimg.com/600x/97/35/91/97359142dce582b4530cb0f23fbe2e43.jpg",
        "newsDate":"09/19",
        "newsLink":"https://www.w3schools.com/",
        "newsid"  : 14
    },
    {
        "newsTitle":"Nulla sed mauris iaculis, bibendum arcu a, porttitor dolor.",
        "newsImage":"https://media-cache-ec0.pinimg.com/600x/0b/87/f4/0b87f4eb50b3d7a7c9d70d97234753ab.jpg",
        "newsDate":"09/19",
        "newsLink":"https://www.w3schools.com/",
        "newsid"  : 15
    }
    
]
const navLinks = [
    {
        "navLinkName":"Name1",
        "navLink":"https://www.w3schools.com/",
        "navTarget":""
    },
    {
        "navLinkName":"Name2",
        "navLink":"https://www.w3schools.com/",
        "navTarget":""
    },
    {
        "navLinkName":"Name3",
        "navLink":"https://www.w3schools.com/",
        "navTarget":""
    }
]

export default newsItems;