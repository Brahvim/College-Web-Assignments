const HTTP = require("http");
const FILE_SYSTEM = require("fs");

const PORT = 8080;
const SERVER = HTTP.createServer((p_request, p_response) => {
    if (p_request.url === "/")
        p_request.url = "/Home.html";

    if (p_request.url.endsWith(".html"))
        p_request.url = "../Front/Pages" + p_request.url;
    else if (p_request.url.endsWith(".css"))
        p_request.url = "../Front/Pages" + p_request.url;
    else
        p_request.url = "../Front/Resources" + p_request.url;

    console.log("Resource `" + p_request.url + "` was requested.");

    // Do these callbacks always get called...?
    FILE_SYSTEM.readFile(p_request.url, "utf8", (p_error, p_fileData) => {
        let code, header, data; // Not using an object here!
        // Old browsers shall have the speed we need!

        if (p_error) {
            code = 400;
            data = "Resource not found...";
            header = { "Content-Type": "text/plain" };

            console.log("No file like `" + p_request.url + "` exists!");
            console.log("Sending status code `500`...");
        } else {
            code = 200;
            data = p_fileData;
            header = { "Content-Type": p_contentType };

            console.log("Sending file `" + p_request.url + "`!");
        }

        p_response.writeHead(code, header);
        p_response.end(data);
    });
});

SERVER.listen(PORT);
