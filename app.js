const button = document.querySelector('#darkmode')

const changeBackgroundColor = () => {
    document.querySelector('body').style.backgroundColor = darkmode
}

button.addEventListener('click', changeBackgroundColor)