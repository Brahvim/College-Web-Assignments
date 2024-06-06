<%@ page contentType="text/html; charset=utf-8" language="java" %>
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
        <title>API Endpoint!</title>
    </head>

    <body>

        <%
            final String[] names = { "nginx", "mysql", "linux", "php", "js" };
            final String[] definitions = {
                "Nginx is a very versatile web-server that runs too much of the world! It can work as a proxy server, an FTP server, and much more.",
                "MySQL is a GPL-licensed database server and client ecosystem. It's made by Oracle.",
                "Linux is a free kernel licensed under a modified GPLv2. May OSs use it!",
                "PHP is a server-side programming language like JSP Servlets!",
                "JavaScript or JS is a scripting language for the web."
            };

            String name = null;
            {
                final String value = request.getParameter("to-define");
                if (value != null)
                    name = value;
            }

            if (name == null)
                return;

            for (int i = 0; i < names.length; ++i) {
                final String s = names[i];

                if (name.equalsIgnoreCase(s)) {
                        out.println(definitions[i]);
                        return;
                    }
            }

            out.println("We don't know how to define that one, chief!");
        %>

    </body>

    </html>