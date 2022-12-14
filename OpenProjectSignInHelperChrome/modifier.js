for (let el of document.getElementsByClassName("form--section")) { el.style.visibility = 'hidden';}
for (let el of document.getElementsByClassName("user-login--form")) { el.style.visibility = 'hidden';}
for (let el of document.getElementsByClassName("login-auth-providers-title")) { el.children[0].innerHTML = "Click Azure to sign in";}
console.log("done.");
