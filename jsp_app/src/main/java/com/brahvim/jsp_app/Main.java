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
        final String fileName = p_request.getPathInfo();
        final String fileExtension = fileName.substring(fileName.lastIndexOf('.'));

        switch (fileExtension) {
            case "html" -> p_response.setContentType("text/html");
            case "js" -> p_response.setContentType("text/javascript");
        }

        final StringBuilder content = new StringBuilder();

        try (final FileReader fr = new FileReader(super.getServletContext().getRealPath(fileName));) {

            try (final BufferedReader br = new BufferedReader(fr);) {

                for (String line = null; (line = br.readLine()) != null;) {
                    content
                            .append(line)
                    /* */ ;
                }

                p_response.getWriter().write(content.toString());
                System.out.println("Sent over `" + fileName + "`.");
            }

        } catch (final IOException e) {
            e.printStackTrace();
        }
    }

}
