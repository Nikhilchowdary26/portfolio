// --- About Tabs Sub-Navigation ---
const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add('active-tab');
}

// --- Mobile Navigation Slide Menu ---
const sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}

// --- Google Sheets Contact Form Integration ---
const scriptURL = 'https://script.google.com/macros/s/AKfycbz4vvbmylpxwwUvOq17NDt72z8Z4c_Xw571VCAictYOb2akAtAMAS8VsBvl5JOuMrIR/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault();
    msg.style.color = "var(--accent-color)";
    msg.innerHTML = "Sending message...";

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.style.color = "#61b752";
            msg.innerHTML = "Message sent successfully!";
            setTimeout(function () {
                msg.innerHTML = "";
            }, 5000);
            form.reset();
        })
        .catch(error => {
            console.error('Error!', error.message);
            msg.style.color = "#ff3333";
            msg.innerHTML = "Error sending message. Please try again.";
        });
});

// --- Scroll To Top Feature Logic ---
window.onscroll = function () { scrollFunction(); };

function scrollFunction() {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

document.getElementById("scrollToTopBtn").addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});