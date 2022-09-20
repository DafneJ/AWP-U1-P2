// console.log('SW: Hello guss!');
self.addEventListener('install', (event) => {
    console.log('SW: Install');
});

self.addEventListener('fetch', (event) => {
//     if(event.request.url.includes('css')){
//         console.log(event.request.url);

//         const resp = new Response(
//         `body{
//             color: blue;
//             background-color: blanchedalmond;
//         }`,

//     {
//         headers:{
//             'Content-type': 'text/css',
//         },
//     }
//         )
//     };

//      event.respondWith(resp);
//     // console.log(event.request.url);
//     // if(event.request.url.includes('css')){
//     //     console.log(event.request.url);
//     //     event.respondWith(
//     //         fetch('images/gato2.png')
//     //     )
//     // }

    if (event.request.url.includes('.png')) {
        console.log(event.request.url);
        event.respondWith(fetch('./images/gato2.png'));
    }

});



