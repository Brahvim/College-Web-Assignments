<%@ page contentType="text/html; charset=utf-8" language="java"
    import="java.time.LocalDate, java.time.temporal.ChronoUnit" %>

    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
        <title>API Endpoint!</title>
    </head>

    <body>

        <%
            out.println("File `" + request.getParameter("file") + "` has been saved on the server.");
        %>

    </body>

    </html>