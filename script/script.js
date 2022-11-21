// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');
console.log(header)
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

    const name = (inputs.elements["name"].value).trim()
    const email = (inputs.elements["email"].value).trim()
    const subject = (inputs.elements["subject"].value.trim())
    const text = (inputs.elements["text"].value.trim())
    

    Email.send({
        SecureToken : "642afa14-f575-488a-8aa9-18d73a27def1",
        To : 'cs-cheese@web.de',
        From : email,
        Subject : subject,
        Body : "<html><strong>" + name + "</strong><br></br>"+ text +"</html>" 
    }).then(
      message => alert(message)
    );

})
