package hu.elte.alkfejl.hirportal.controller;

import hu.elte.alkfejl.hirportal.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
public class StudentController {
    
    @Autowired
    private StudentService studentService;
    
    @GetMapping("/student")
    public String studentList(Model model) {
        model.addAttribute("title", "Student list");
        model.addAttribute("students", studentService.studentNamesStartingWith("John"));
        return "list";
    }
}