const FILE_SYSTEM = require("fs");
const HTTP = require("http");
const PORT = 8080;

const SERVER = HTTP.createServer((p_request, p_response) => {
    const requestedUrl = p_request.url;
    console.log("Resource `" + requestedUrl + "` was requested.");

    switch (requestedUrl) {
        default: {
            console.log("Received request for unknown page...");
            writeFailureResponse(p_response);
        } break;

        case "/": {
            FILE_SYSTEM.readFile("./Home.html", "utf8", (p_error, p_fileData) => {
                if (p_error) {
                    console.log("No such file!");
                    writeFailureResponse(p_response);
                }

                console.log("Sending home page!");
                p_response.writeHead(200, { "Content-Type": "text/html" });
                p_response.end(p_fileData);
            });
        } break;
    }
});

SERVER.listen(PORT);

function writeFailureResponse(p_response) {
    console.log("Sending status code `500`...");
    p_response.writeHead(500, { "Content-Type": "text/plain" });
    p_response.end("Internal Server Error!");
}

