package com.brahvim.jsp_app;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/index")
public class Main extends HttpServlet {

    @Override
    protected void doGet(final HttpServletRequest p_request, final HttpServletResponse p_response)
            throws ServletException, IOException {
        // p_response.setContentType("text/html");

        final StringBuilder content = new StringBuilder();

        try (final FileReader fr = new FileReader(super.getServletContext().getRealPath("index.jsp"));) {

            try (final BufferedReader br = new BufferedReader(fr);) {

                for (String line = null; (line = br.readLine()) != null;) {
                    content
                            .append(line)
                            .append("<br>");
                }

                p_response.getWriter().write(content.toString());
            }

        } catch (final IOException e) {
            e.printStackTrace();
        }
    }

}
