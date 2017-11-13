package hu.elte.alkfejl.hirportal.controller;

import hu.elte.alkfejl.hirportal.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class UserController {
    
    @Autowired
    private UserService userService;
    
    @GetMapping("/user")
    public String userList(Model model) {
        model.addAttribute("title", "User list");
        model.addAttribute("users", userService.userNamesStartingWith(""));
        return "userlist";
    }
}