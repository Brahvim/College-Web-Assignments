<%@ page contentType="text/html; character=utf-8;" language="java" %>

    <!DOCTYPE html>
    <html xmlns="http://www.w3.org/1999/xhtml" lang="en">

    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>Cookie set-up page!</title>
    </head>

    <body>
        <form  name="my-form" method="post" action="backend.jsp">

            <p>What should the cookie's name be?!</p>
            <input type="text" name="cookie-name" />
            <br />

            <p>What should the cookie contain?</p>
            <input type="text" name="cookie-data" />
            <br />

            <input type="submit" name="submit" />

        </form>
    </body>

    </html>