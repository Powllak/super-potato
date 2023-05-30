
//Scroll animation for text

const observer = new IntersectionObserver ((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

//Writing user responses to the page

function write_response() {
    var autoMessage = document.getElementById ("I see whatcha doing... ");
    var reply = document.getElementById ('replyIng')

    autoMessage.innerHTML = "I see whatcha doing... " + replyIng.value;
}

