const terminal = document.getElementById("term");
const commandInput = document.getElementById("command-input")
commandInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        const command = commandInput.value.trim();
        if (command) {
            processCommand(command);
        }
        commandInput.value = "";
    }
});

function processCommand(command) {
    const output = document.createElement("div");
    output.innerHTML = `<b>$</b> ${command}`;
    terminal.insertBefore(output, commandInput.parentNode);

    let response = document.createElement("div");

    // Example commands
    if (command === "help") {
        response.innerHTML = "<br>Available commands:<br><br>&emsp;<b>about</b> - More about me<br>&emsp;<b>help</b> - Display this message<br>&emsp;<b>clear</b> - Clear the console window<br>&emsp;<b>cookies</b> - Display the cookies policy of this website<br><br>";
    } else if (command === "clear") {
        terminal.innerHTML = "";
        terminal.appendChild(commandInput.parentNode);
        return;
    } else if (command === "cookies") {
        response.innerHTML = "<br>This website does not use cookies or any other profiling and/or tracking technology<br><br>";
    } else if (command === "about") {
        response.innerHTML = "<br>Hello!<br>I'm a system administrator with a strong background in sciences and programming<br><br><b>Sysadmin</b><ul><li>Linux [Fedora <a href=\"https://fedoraproject.org/en/server/\">Server</a> / <a href=\"https://fedoraproject.org/workstation/\">Ws</a>]</li><li>Windows Server</li><li>KVM</li><li>Containers [Docker, <a href=\"https://podman.io/\">Podman</a>]</li></ul><br><b>Programming</b><ul><li>C [<a href=\"https://www.microchip.com/en-us/tools-resources/develop/mplab-xc-compilers/xc8\">XC8</a>]</li><li>Bash</li><li>Python</li><li>Common Lisp [<a href=\"https://www.sbcl.org/\">SBCL</a>]</li></ul><br><b>Interests</b><ul><li>Physics and Mathematics</li><li><a href=\"https://www.projecteuler.net\">Project Euler</a></li><li>Trekking</li></ul><br>I occasionally publish some code on my <a href=\"https://github.com/riccardocariboni\">GitHub</a> account<br><br>You can contact me at: <a href=\"mailto:info@riccardocariboni.it\"><b>info@riccardocariboni.it</a><br><br>";
    } else {
        response.innerHTML = "<br>Command not found<br>Type \"help\" for a list of <b>valid</b> commands<br><br>";
    }

    terminal.insertBefore(response, commandInput.parentNode);
    terminal.scrollTop = terminal.scrollHeight; // Auto-scroll
}
