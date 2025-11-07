// const randomColor = () => {
//     const hex = '0123456789ABCDEF'
//     let color = '#'
//     for(let i = 0 ; i < 6 ; i++){
//         color += hex[Math.floor(Math.random() * 16)]
//     }
//     return color;
// };

// let intervalId;

// const changeColor = () => {
//     intervalId = setInterval(function(){
//          document.body.style.backgroundColor = randomColor();
//     },1000)
// }
// const stopChangeColor = () => {
//     clearInterval(intervalId);
//     console.log('stopped!')
// }

// document.querySelector('#start').addEventListener('click',changeColor)
// document.querySelector('#stop').addEventListener('click',stopChangeColor)

// another approach which is a goood practice...................................................................................

const randomColor = () => {
    const hex = '0123456789ABCDEF'
    let color = '#'
    for(let i = 0 ; i < 6 ; i++){
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
};

let intervalId;

const changeColor = () => {
    if(!intervalId){
        intervalId = setInterval(function(){
        document.body.style.backgroundColor = randomColor();
    },1000)}
}
const stopChangeColor = () => {
    clearInterval(intervalId);
    console.log('stopped!')
    intervalId = null

}

document.querySelector('#start').addEventListener('click',changeColor)
document.querySelector('#stop').addEventListener('click',stopChangeColor)
