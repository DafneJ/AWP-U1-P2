// console.log("Holaaaaaaa")

if(navigator.serviceWorker){
    // console.log("Hey los soportamos");
    navigator.serviceWorker.register('/sw.js');

}