const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body");

buttons.forEach((button)=>{
    console.log(button);
    button.addEventListener('click',(e)=>{
        // console.log(e);
        // console.log(e.target);
        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id;
        }else if(e.target.id === 'pink'){
            body.style.backgroundColor = e.target.id;
        }else if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id;
        }else if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id;
        }else{
            function getRandomColor() {
                let letters = '0123456789ABCDEF';
                let color = '#';
                for (let i = 0; i < 6; i++) {
                  color += letters[Math.floor(Math.random() * 16)];
                }
                return color;
            }
            body.style.backgroundColor = getRandomColor();
        }
    })
});
