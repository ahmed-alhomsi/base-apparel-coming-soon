const btn = document.querySelector('.email-btn');
const emailInput = document.querySelector('.email-input');
const regex = /^[A-Za-z0-9\_\-\.]{3,64}@[A-Za-z0-9\_\-\.]{3,10}\.([a-zA-Z]{2,5})$/;
// another way i could have "regexed": 
// const regex = /^([A-Za-z0-9\_\-\.]+)@([A-Za-z0-9\_\-\.]+)\.([a-zA-Z]{2,5})$/;

btn.addEventListener('click',(e)=>{
    e.preventDefault();

    const email =  emailInput.value;
    if(regex.test(email)) {
        //works
        if(emailInput.classList.contains('error')){
            emailInput.classList.remove('error');
            emailInput.value = '';
        }
    } else {
        //doesn't work
        if(!emailInput.classList.contains('error')){
            emailInput.classList.add('error');
        }
    }
});