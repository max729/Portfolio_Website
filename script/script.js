// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');
//console.log(header)
window.onscroll = function() {
    const top = window.scrollY;
    header.classList.add('navbarDark');
    
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}
// collapse navbar after click on small devices
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')

navLinks.forEach((l) => {
    l.addEventListener('click', () => { new bootstrap.Collapse(menuToggle).toggle() })
})


const inputs =  document.getElementById("mailForm");
const submitbutton =  document.getElementById("submitbutton");
submitbutton.addEventListener('click',() => {
    
    const params = {
        name : (inputs.elements["name"].value).trim(),
        email : (inputs.elements["email"].value).trim(),
        subject : (inputs.elements["subject"].value.trim()),
        text : (inputs.elements["text"].value.trim()),

    }

    const serviceID = "service_1xfty7m";
    const templateID = "template_4266zfd";


     
    if (!params.name.length > 0 || !params.email.length > 0 || !params.subject.length > 0 || !params.text.length > 0) {
        alert("All fields are mandatory")
        return
    }


    if ( !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(params.email)) ) {
        alert("false mail format")
        return
    }


    emailjs.send(serviceID, templateID, params).then((res)=>{
        alert("Mail Send");
    })
    .catch((err)=> console.log(err));

})

/*
 const observer = new IntersectionObserver((entries)=>{
   
    entries.forEach((entry)=>{

        if(entry.isIntersecting && entry.target.classList.contains("step00")){
            entry.target.classList.add('step01');
        } else{
            //entry.target.classList.remove('show')
        }
    })
})

const hiddenElements = document.querySelectorAll('.step00');
hiddenElements.forEach((ele)=>observer.observe(ele)); */