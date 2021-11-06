const signinbtn = document.getElementById("signin");
const signupbtn = document.getElementById("signup");
const firstform = document.getElementById("form1");
const secondform = document.getElementById("form2");
const container = document.gueryselector(".container");

signinbtn.addeventlistener("click", () => {
    container.classlist.remove("right-panel-active");
});

signupbtn.addeventlistener("click", () => {
    container.classlist.remove("right-panel-active");
});
fistform.addeventlistener("submit", (e) => e.preventdefault());
secondform.addeventlistener("submit", (e) => e.preventdefault());