const demoUser = {
    name: "Гость",
    email: "",
    loggedIn: false
};

if (!localStorage.getItem("user")) {
    localStorage.setItem("user", JSON.stringify(demoUser));
}

function getUser() {
    return JSON.parse(localStorage.getItem("user"));
}

function login(name, email) {

    const user = {
        name,
        email,
        loggedIn: true
        lessons: 0
    };

    localStorage.setItem("user", JSON.stringify(user));

    location.href = "profile.html";
}

function logout() {

    localStorage.setItem("user", JSON.stringify(demoUser));

    location.href = "index.html";
}