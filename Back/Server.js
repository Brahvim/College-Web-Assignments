const HTTP = require("http");
const FILE_SYSTEM = require("fs");

const PORT = 8080;
// (Omitted the `/` for consistency with the `/` already present in requests.)

const SERVER_OPTIONS = (() => {
    let toRet = {};

    FILE_SYSTEM.readFile(__dirname + "/../Resources/ServerOptions.json", (p_error, p_fileData) => {
        if (!p_error)
            toRet = p_fileData;
    });

    return toRet;
})();

const SERVER = HTTP.createServer((p_request, p_response) => {
    if (p_request.url === "/")
        p_request.url = "/Home.html";

    // Surprised that a `../` is not allowed in the browser anyway.

    if (p_request.url.endsWith(".html"))
        p_request.url = (__dirname + "/../Front/Pages") + p_request.url;
    else if (p_request.url.endsWith(".css"))
        p_request.url = (__dirname + "/../Front/Styling") + p_request.url;
    else if (p_request.url.endsWith(".js"))
        p_request.url = (__dirname + "/../Front/JavaScript") + p_request.url;
    else
        p_request.url = (__dirname + "/../Resources") + p_request.url;

    console.log("Resource `" + p_request.url + "` was requested.");

    let contentType;

    switch (p_request.url.substring(p_request.url.lastIndexOf("."))) {
        case "css":
            contentType = "text/css";
            break;

        case "jpeg":
            contentType = "image/jpeg";
            break;

        case "html":
            contentType = "text/html";
            break;

        default:
            contentType = "";
            break;
    }

    // Do these callbacks always get called...?
    sendFileViaResponse(p_response, p_request.url, contentType);
});

SERVER.listen(PORT);

function sendFileViaResponse(p_response, p_filename, p_contentType = "text/html") {
    // Do these callbacks always succeed...?
    FILE_SYSTEM.readFile(p_filename, (p_error, p_fileData) => {
        let code, header, data;

        if (p_error) {
            code = 500;
            data = "Internal Server Error!";
            header = { "Content-Type": "text/plain" };

            console.log("No file like `" + p_filename + "` exists!");
            console.log("Sending status code `500`...");

        } else {
            code = 200;
            data = p_fileData;
            header = { "Content-Type": p_contentType };

            console.log("Sending `" + p_filename + "`!");
        }

        p_response.writeHead(code, header);
        p_response.end(data);
    });
}

function sendContentViaResponse(p_response, p_content, p_contentType = "text/plain", p_code = 200) {
    p_response.writeHead(p_code, { "Content-Type": p_contentType });
    p_response.end(p_content);
}
