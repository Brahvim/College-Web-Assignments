const FILE_SYSTEM = require("fs");
const HTTP = require("http");
const PORT = 8080;

const SERVER = HTTP.createServer((p_request, p_response) => {
    const requestedUrl = p_request.url;
    console.log("Resource `" + requestedUrl + "` was requested.");

    p_response.sendContent = (p_content, p_type) => {
        p_response.writeHead(200, { "Content-Type": p_type });
        p_response.end(p_content);
    };

    p_response.sendFile = (p_content, p_type) => {
        p_response.writeHead(200, { "Content-Type": p_type });
        p_response.end(p_content);
    };

    // p_response.sendContent = function (p_content, p_type) {
    //     this.writeHead(200, { "Content-Type": p_type });
    //     this.end(p_content);
    // }.bind(p_response); // `bind()` sets `this` to be `p_response` for `sendContent()`.
    // ...but I'll have to use an arrow function / lambda, which I didn't want to :>

    switch (requestedUrl) {
        default: {
            console.log("Received request for unknown page...");
            writeFailureResponse(p_response);
        } break;

        case "/": {
            FILE_SYSTEM.readFile("./Home.html", (p_error, p_fileData) => {
                if (p_error) {
                    console.log("No such file!");
                    writeFailureResponse(p_response);
                }

                console.log("Sending home page!");
                p_response.writeHead(200, { "Content-Type": "text/html" });
                p_response.end(p_fileData);
            });
        } break;

        case "/MyImage.jpeg": {
            FILE_SYSTEM.readFile("./MyImage.jpeg", (p_error, p_fileData) => {
                if (p_error) {
                    console.log("No such file!");
                    writeFailureResponse(p_response);
                }

                console.log("Sending image!");

                p_response.writeHead(200, { "Content-Type": "image/jpeg" });
                p_response.end(p_fileData);
            });
        } break;

        case "/Styling.css": {
            newFunction(p_response);
        } break;
    }
});

SERVER.listen(PORT);

function newFunction(p_response) {
    FILE_SYSTEM.readFile("./Styling.css", (p_error, p_fileData) => {
        if (p_error) {
            console.log("No such file!");
            writeFailureResponse(p_response);
        }

        console.log("Sending CSS!");

        p_response.writeHead(200, { "Content-Type": "text/css" });
        p_response.end(p_fileData);
    });
}

function writeFailureResponse(p_response) {
    console.log("Sending status code `500`...");
    p_response.writeHead(500, { "Content-Type": "text/plain" });
    p_response.end("Internal Server Error!");
}

