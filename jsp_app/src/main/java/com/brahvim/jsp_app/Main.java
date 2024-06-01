package com.brahvim.jsp_app;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/hello")
public class Main extends HttpServlet {

    @Override
    protected void doGet(final HttpServletRequest p_request, final HttpServletResponse p_response)
            throws ServletException, IOException {
        p_response.setContentType("text/html");
        p_response.getWriter().println("<h1>Hello, Servlet World!</h1>");
    }

}
