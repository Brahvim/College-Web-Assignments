package com.brahvim.jsp_app;

import java.io.BufferedReader;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.nio.file.Paths;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;

@WebServlet("/index")
public class Main extends HttpServlet {

    String contextPath; // NOSONAR

    @Override
    public void init() throws ServletException {
        this.contextPath = super.getServletContext().getContextPath();
    }

    @Override
    protected void doPost(final HttpServletRequest p_request, final HttpServletResponse p_response)
            throws ServletException, IOException {
        Part filePart;

        try {
            filePart = p_request.getPart("file");
        } catch (final IOException ioe) {
            ioe.printStackTrace();
            return;
        } catch (final ServletException se) {
            se.printStackTrace();
            return;
        }

        final String fileName = Paths.get(filePart.getSubmittedFileName()).toString();

        try (final InputStreamReader isr = new InputStreamReader(filePart.getInputStream())) {

            // No check for when the file already exists! Straight overwrite!:
            try (FileOutputStream fos = new FileOutputStream(this.contextPath + fileName)) {
                while (isr.ready())
                    fos.write(isr.read());
            }

        } catch (final IOException e) {
            e.printStackTrace();
        }
    }

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
