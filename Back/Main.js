const HTTP = require("http");
const FILE_SYSTEM = require("fs");

const PORT = 8080;
const SERVER = HTTP.createServer((p_request, p_response) => {
    const requestedUrl = p_request.url;
    console.log("Resource `" + requestedUrl + "` was requested.");

    sendFileViaResponse(p_response);

    // p_response.sendContent = (p_content, p_type) => {
    //     p_response.writeHead(200, { "Content-Type": p_type });
    //     p_response.end(p_content);
    // };

    // p_response.sendContent = function (p_content, p_type) {
    //     this.writeHead(200, { "Content-Type": p_type });
    //     this.end(p_content);
    // }.bind(p_response); // `bind()` sets `this` to be `p_response` for `sendContent()`.
    // ...but I'll have to use an arrow function / lambda, which I didn't want to :>

    if (requestedUrl === "/")
        requestedUrl = "/Home.html";

});

SERVER.listen(PORT);

// Won't make an entirely new file to import dependencies into JUST for this:
function sendFileViaResponse(p_response, p_filename, p_contentType = "text/plain") {
    // Do these callbacks always succeed...?
    FILE_SYSTEM.readFile(p_filename, (p_error, p_fileData) => {
        const response = { code: null, header: null, data: null };

        if (p_error) {
            response.code = 500;
            response.data = "Internal Server Error!";
            response.header = { "Content-Type": "text/plain" };

            console.log("No file like `" + p_filename + "` exists!");
            console.log("Sending status code `500`...");

        } else {
            response.code = 200;
            response.data = p_fileData;
            response.header = { "Content-Type": p_contentType };
            console.log("Sending `" + p_filename + "`!");
        }

        p_response.writeHead(response.code, response.header);
        p_response.end(response.data);
    });
}
