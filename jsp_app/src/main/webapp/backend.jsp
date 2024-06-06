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
            final String /* */
                cookieName = request.getParameter("cookie-name"),
                cookieData = request.getParameter("cookie-data");

            final LocalDate currentDate = LocalDate.now();
            final LocalDate expiryDate = currentDate.plusYears(1);

            final Cookie cookie = new Cookie(cookieName, cookieData);
            cookie.setMaxAge(ChronoUnit.SECONDS.between(currentDate, expiryDate));

            response.addCookie(cookie);
        %>

    </body>

    </html>