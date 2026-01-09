function welcomeUser() {
    const main = document.querySelector("main");

    // Check if message already exists
    let msg = document.getElementById("welcomeMessage");
    if (!msg) {
        msg = document.createElement("p");
        msg.id = "welcomeMessage";
        msg.textContent = "Welcome to JavaJam! ☕"; // short message
        msg.style.fontSize = "18px";
        msg.style.color = "#FFD97D";       // JavaJam cream color
        msg.style.marginTop = "1em";

        // Start hidden for fade-in
        msg.style.opacity = 0;
        msg.style.transition = "opacity 1s ease"; // smooth fade-in

        main.prepend(msg);

        // Trigger fade-in
        setTimeout(() => {
            msg.style.opacity = 1;
        }, 50);
    }
}