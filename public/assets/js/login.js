const register =document.querySelector(".register"),
      login = document.querySelector(".login"),
      wrapper = document.querySelector(".wrapper"),
      wrapper1 = document.querySelector(".wrapper1");

register.addEventListener('click',()=> {
    wrapper.classList.add("active"),
    wrapper1.classList.add("inactive")
});      
login.addEventListener('click',()=> {
    wrapper.classList.remove("active"),
    wrapper1.classList.remove("inactive")
}); 