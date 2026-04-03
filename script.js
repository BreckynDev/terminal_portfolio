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
                    // Command response
                    const help_lines = ["about", "projects", "skills", "contact", "clear", "secret"];
                    help_lines .forEach(lines => {
                        const response = document.createElement("p");
                        response.textContent = lines;
                        output.appendChild(response);
                    });
                    newLine(terminal, command, output, input_line);
                    break;
                case "secret":
                    textFreeze(terminal, command, output, input_line);
                    // Command response
                    const info = document.createElement("p");
                    info.textContent = "Try out some real commands";
                    output.appendChild(info)
                    const secret_lines = ["cd", "ls", "rm -rf /"];
                    secret_lines.forEach(lines => {
                        const response = document.createElement("p");
                        response.textContent = lines;
                        output.appendChild(response);
                    });

                    newLine(terminal, command, output, input_line);

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
    const new_output = document.createElement("output");

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

initPrompt(terminal, command, output, input_line);