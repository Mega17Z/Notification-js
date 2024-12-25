const AllDesactive = document.getElementById('all')
const Blocs = document.querySelectorAll('.bloc')
const leconte = document.getElementById('conte')

AllDesactive.addEventListener('click', desactiver)

function desactiver(){
    if(AllDesactive.classList.contains('active')){
        AllDesactive.classList.remove('active')

        Blocs.forEach((element)=>{
            if(element.classList.contains('active')){
                element.classList.remove('active')
            }

        })
        const nouveau = document.querySelectorAll('.bloc.active')
        console.log(nouveau)
        leconte.innerText = nouveau.length
    }
}

Blocs.forEach((element) =>{
    element.addEventListener('click', ()=>{
        if(element.classList.contains('active')){
            element.classList.remove('active')
        }

        const nouveau0 = document.querySelectorAll('.bloc.active')
        leconte.innerText = nouveau0.length

        if(leconte.textContent == 0){
            AllDesactive.classList.remove('active')
        }
    })

})