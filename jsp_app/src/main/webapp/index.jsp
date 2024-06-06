<%@ page contentType="text/html; character=utf-8;" language="java" %>

    <!DOCTYPE html>
    <html xmlns="http://www.w3.org/1999/xhtml" lang="en">

    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>Free file uploads!</title>
    </head>

    <body>
        <script src="/index/index.js"></script>

        <form name="my-form" method="post" action="backend.jsp">
            <input type="file" name="file" />
            <br />

            <input type="submit" value="Upload" />

        </form>
    </body>

    </html>