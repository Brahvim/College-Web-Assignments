<%@ page contentType="text/html; character=utf-8;" language="java" %>

    <!DOCTYPE html>
    <html xmlns="http://www.w3.org/1999/xhtml" lang="en">

    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>How many visits!?</title>
    </head>

    <body>
        <%
            Integer totalVisitsCount = (Integer) session.getAttribute("total-visits-count");
            Integer personalVisitsCount = (Integer) session.getAttribute("personal-visits-count");

            totalVisitsCount = totalVisitsCount == null
                    ? new Integer(0)
                    : new Integer(totalVisitsCount.intValue() + 1);

            personalVisitsCount = personalVisitsCount == null
                    ? new Integer(0)
                    : new Integer(personalVisitsCount.intValue() + 1);

            session.setAttribute("total-visits-count", totalVisitsCount);
            session.setAttribute("personal-visits-count", personalVisitsCount);
        %>

        You have personally visited this page `<%=personalVisitsCount%>` times.
        <br />
        This page has had in total, `<%=totalVisitsCount%>` visits!

    </body>

    </html>