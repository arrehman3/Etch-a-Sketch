
document.addEventListener('DOMContentLoaded',()=>{
    const container = document.querySelector('.container');
    for(let i=0;i<16;i++){
        for (let j=0;j<16;j++){
            const square = document.createElement('div');
            square.setAttribute('class','square');
            container.appendChild(square);

            square.addEventListener('mouseenter',()=>{
                square.style.backgroundColor='blue';
        
            })
            
        }
       
    }
    
    const button = document.querySelector('button');
    button.addEventListener('click',()=>{
        const value=prompt("Add the number of grids");
        
        const parent = document.querySelector('.container');
        const child = Array.from(parent.children);
        child.forEach(element => {
            parent.removeChild(element);
        });
        const containerwidth=parseInt(value)*40;
        container.setAttribute('style',`width:${containerwidth}px; height:auto`)
        for (let k=0;k<value;k++){
            for(let l=0;l<value;l++){
                    const square = document.createElement('div');
                    square.setAttribute('class','square');
                    container.appendChild(square);

                    square.addEventListener('mouseenter',()=>{
                        square.style.backgroundColor='blue';
                
                    })
            }    
        }

    })

    
})

