const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry)=>{
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');
        }
    })
});
const hiddenElements =  document.querySelectorAll('.hidden');
hiddenElements.forEach((element)=>observer.observe(element))

const observerR = new IntersectionObserver((entries) =>{
    entries.forEach((entry)=>{
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('showR');
        }
        else{
            entry.target.classList.remove('showR');
        }
    })
});
const hiddenRightElements =  document.querySelectorAll('.hiddenR');
hiddenRightElements.forEach((element)=>observerR.observe(element))

const observerL = new IntersectionObserver((entries) =>{
    entries.forEach((entry)=>{
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('showL');
        }
        else{
            entry.target.classList.remove('showL');
        }
    })
});
const hiddenLeftElements =  document.querySelectorAll('.hiddenL');
hiddenLeftElements.forEach((element)=>observerL.observe(element))

