var elElement = document.querySelector('.element')
var elWrapper = document.querySelector('.wrapper')


var mode = true
function fn(){
    if(mode == true){
        elElement.classList.add('light')
        elElement.classList.remove('dark')
        elWrapper.style.background = '#fff'
    }
    else{
        elElement.classList.add('dark')
        elElement.classList.remove('light')
        elWrapper.style.background = '#000'
    }
    mode = !mode
    console.log(mode);
}