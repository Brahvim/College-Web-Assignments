<%@ page contentType="text/html; character=utf-8;" language="java" import="java.sql.*" errorPage="" %>

    <!DOCTYPE html>
    <html xmlns="http://www.w3.org/1999/xhtml" lang="en">

    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>Definitions page!</title>
    </head>

    <body>
        <form id="my-form" name="my-form" method="post" action="backend.jsp">

            <p>Enter what is to be defined.</p>
            <input type="text" name="to-define" id="to-define-input" />
            <br></br>
            <input type="submit" name="submit" id="submit-input" />

        </form>
    </body>

    </html>