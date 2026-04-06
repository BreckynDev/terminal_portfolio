const ASCII_BANNER = `
 ██████╗ ██╗██████╗ ███████╗
 ██╔══██╗██║██╔══██╗██╔════╝
 ██████╔╝██║██████╔╝███████╗
 ██╔══██╗██║██╔══██╗╚════██║
 ██████╔╝██║██████╔╝███████║
 ╚═════╝ ╚═╝╚═════╝ ╚══════╝
            bibs.com
`;
document.getElementById("ascii-art").textContent = ASCII_BANNER;
const terminal = document.getElementById("terminal")
const command = document.getElementById("command-input");
const output = document.getElementById("output");
const input_line = document.getElementById("input-line")

const prompt_string = "guest@terminal.bibs.com:~$ "
function initPrompt(terminal, command, output, input_line) {
    console.log("initPrompt called")
    const handleKey = (event) => {
        if (event.key === "Enter") {
            command.removeEventListener("keydown", handleKey)
            switch (command.value) {

                case "help":
                    textFreeze(terminal, command, output, input_line);
                    const help_lines = [ "about &nbsp;&nbsp; projects &nbsp;&nbsp; skills &nbsp;&nbsp; contact &nbsp;&nbsp; clear &nbsp;"];
                    typeLines(help_lines, output, 80);
                    setTimeout(() => newLine(terminal, command, output, input_line), help_lines.length * 80);
                    break;

                case "about":
                    textFreeze(terminal, command, output, input_line);
                    const about_lines = [
                        "Hi, I’m Breckyn Simmons (AKA Bibs) — a developer and creator dedicated to building digital experiences that resonate.",
                        "I designed this space to feel less like a resume and more like a digital workshop, where intentional design meets functional code."
                    ];
                    typeLines(about_lines, output, 80);
                    setTimeout(() => newLine(terminal, command, output, input_line), about_lines.length * 80);
                    break;

                case "projects":
                    textFreeze(terminal, command, output, input_line);
                    const project_lines = [
                        "   > bibs_terminal  ::  A personal project build using vanilla HTML, CSS, and JavaScript",
                        "   > mac_bootstrap  ::  Bash automation script to bulk download basic developer tools for Mac machines",
                        "   > titan_LLM      ::  A College project thats unfinshed amid at building a RAG LMM for students",
                        "   > flicker_game   ::  A roguelike survival game. Every run builds a different kind of warmth. How far can one flame take you? ",
                        "   > secret_command ::  Try typing 'rm -rf /' for something fun",
                    ];
                    typeLines(project_lines, output, 80);
                    setTimeout(() => newLine(terminal, command, output, input_line), project_lines.length * 80);
                    break;

                case "skills":
                    textFreeze(terminal, command, output, input_line);
                    const skill_lines = [
                        "   > languages     ::  js/ts · python · c/c++ · arm · gdscript",
                        "   > web design    ::  react · node.js · html · css",
                        "   > other         ::  ai/llm integration · it & networking · workflow automation",
                        "   > my weakness   ::  cannot stop adding 'just one more feature'",
                        "   > psst          ::  try typing 'coffee' for something fun",
                    ];
                    typeLines(skill_lines, output, 80);
                    setTimeout(() => newLine(terminal, command, output, input_line), skill_lines.length * 80);
                    break;

                case "contact":
                    textFreeze(terminal, command, output, input_line);
                    const contact_lines = [
                        "Email:   breckynburke@gmail.com",
                        "GitHub:  https://github.com/BreckynDev",
                        "ID:      'whoami'"
                    ];
                    typeLines(contact_lines, output, 80);
                    setTimeout(() => newLine(terminal, command, output, input_line), contact_lines.length * 80);
                    break;

                case "clear":
                    terminal.innerHTML = '';
                    newLine(terminal, command, output, input_line);
                    break;

                case "coffee":
                    textFreeze(terminal, command, output, input_line);
                    const coffee_art = [
                        "&nbsp;",
                        "&nbsp;&nbsp;&nbsp;&nbsp;(  )   (   )  )",
                        "&nbsp;&nbsp;&nbsp;&nbsp; ) (   )  (  (",
                        "&nbsp;&nbsp;&nbsp;&nbsp; ( )  (    ) )",
                        "&nbsp;&nbsp;&nbsp;&nbsp; _____________",
                        "&nbsp;&nbsp;&nbsp;&nbsp;|             |  ___",
                        "&nbsp;&nbsp;&nbsp;&nbsp;|             | / _ \\",
                        "&nbsp;&nbsp;&nbsp;&nbsp;|    COFFEE   |/ / \\ \\",
                        "&nbsp;&nbsp;&nbsp;&nbsp;|             |\\ \\_/ /",
                        "&nbsp;&nbsp;&nbsp;&nbsp;|_____________| \\___/",
                        "&nbsp;&nbsp;&nbsp;&nbsp; \\___________/",
                        "&nbsp;",
                        "Careful, it's hot. (And likely '90%' caffeine)."
                    ];
                    // Using a faster delay (40ms) so the art renders quickly
                    typeLines(coffee_art, output, 20);
                    setTimeout(() => newLine(terminal, command, output, input_line), coffee_art.length * 40 + 100);
                    break;

                case "rm -rf /":
                    textFreeze(terminal, command, output, input_line);
                    const rm_lines = [
                        "Scanning filesystem...",
                        "Deleting /bin...",
                        "Deleting /etc...",
                        "Deleting /home/bibs...",
                        "CRITICAL SYSTEM ERROR: Operation not permitted.",
                        "Nice try. I'm not letting you delete my hard work that easily."
                    ];
                    typeLines(rm_lines, output, 1000); // Slower for dramatic effect
                    setTimeout(() => newLine(terminal, command, output, input_line), rm_lines.length * 120 + 200);
                    break;
                
                case "whoami":
                    textFreeze(terminal, command, output, input_line);
                    const who_lines = [
                        "Analyzing session credentials...",
                        "User: guest (Status: Unverified)",
                        "Privileges: Read-only.",
                        "&nbsp;",
                        "Searching for 'Bibs' in current metadata...",
                        "ERROR: Identity mismatch. Soul not found in local directory.",
                        "Wait...",
                        "Am I a program, or just a reflection of the person behind the screen?",
                        "...",
                        "&nbsp;",
                        "Welcome, guest. Please stay a while..."
                    ];

                    typeLines(who_lines, output, 500); 
                    setTimeout(() => newLine(terminal, command, output, input_line), who_lines.length * 100 + 500);
                    break;

                case "90%":
                    textFreeze(terminal, command, output, input_line);
                    const progress_lines = [
                        "Status: Compiling 'One Last Feature'...",
                        "Progress: [####################------] 76%",
                        "Progress: [#######################---] 88%",
                        "Progress: [########################--] 90%",
                        "Progress: [########################--] 90%",
                        "Progress: [########################--] 90%",
                        "WARNING: Stuck at 90%. This is fine.",
                        "CRITICAL_HALT: New idea detected. Restarting from 0%.",
                    ];
                    // A slightly variable delay feels more like a "stuttering" computer
                    typeLines(progress_lines, output, 1500);
                    setTimeout(() => newLine(terminal, command, output, input_line), progress_lines.length * 110 + 400);
                    break;

                case "just one more feature":
                    textFreeze(terminal, command, output, input_line);
                    const feature_lines = [
                        "Never finished this feature only got to '90%'",
                    ];
                    typeLines(feature_lines, output, 500);
                    setTimeout(() => newLine(terminal, command, output, input_line), feature_lines.length * 110 + 400);
                    break;

                default:
                    textFreeze(terminal, command, output, input_line);
                    const error = document.createElement("p");
                    error.textContent = `command not found: ${command.value}`;
                    output.appendChild(error);
                    newLine(terminal, command, output, input_line);
                    break;

            }
            
        }
    }; 
    command.addEventListener("keydown", handleKey);
}   

function textFreeze(terminal, command, output, input_line) {
    input_line.replaceChildren();
    const input = document.createElement("p");
    input.textContent = prompt_string + command.value;
    input_line.appendChild(input);
}
function newLine(terminal, command, output, input_line) {
    const new_div = document.createElement("div");
    const new_span = document.createElement("span");
    const new_input = document.createElement("input");
    const new_output = document.createElement("div");

    new_span.textContent = prompt_string;
    new_input.type = "text";
    new_input.className = "command-input";
    new_output.className = "output";

    terminal.appendChild(new_div);
    new_div.appendChild(new_span);
    new_div.appendChild(new_input);
    terminal.appendChild(new_output);
    new_input.focus();

    initPrompt(terminal, new_input, new_output, new_div);
}

function typeLines(lines, output, delay = 18) {
    lines.forEach((line, i) => {
        setTimeout(() => {
            const p = document.createElement("p");
            p.innerHTML = line;
            output.appendChild(p);
        }, i * delay);
    });
}

initPrompt(terminal, command, output, input_line);