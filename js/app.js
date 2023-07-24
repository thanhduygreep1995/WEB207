const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry)=>{
  
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

        if (entry.isIntersecting){
            entry.target.classList.add('showR');
        }
        else{
            entry.target.classList.remove('showR');
        }
    })
});
const hiddenRightElements =  document.querySelectorAll('.hiddenR');
hiddenRightElements.forEach((element1)=>observerR.observe(element1))

const observerL = new IntersectionObserver((entries) =>{
    entries.forEach((entry)=>{

        if (entry.isIntersecting){
            entry.target.classList.add('showL');
        }
        else{
            entry.target.classList.remove('showL');
        }
    })
});
const hiddenLeftElements =  document.querySelectorAll('.hiddenL');
hiddenLeftElements.forEach((element2)=>observerL.observe(element2))

