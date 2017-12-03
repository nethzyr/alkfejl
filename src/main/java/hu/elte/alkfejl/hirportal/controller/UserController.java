package hu.elte.alkfejl.hirportal.controller;

import hu.elte.alkfejl.hirportal.entity.User;
import hu.elte.alkfejl.hirportal.service.UserService;
import hu.elte.alkfejl.hirportal.exception.UserNotValidException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user")
public class UserController {
    
    @Autowired
    private UserService userService;
    
    @GetMapping("")
    public ResponseEntity<User> user() {
        if (userService.isLoggedIn()) {
            return ResponseEntity.ok(userService.getLoggedInUser());
        }
        return ResponseEntity.badRequest().build();
    }
    
    @PostMapping("/register")
    public User register(@RequestBody User user) {
        return userService.register(user);
    }
    
    @PostMapping("/login")
    public ResponseEntity<User> login(@RequestBody User user) {
        try {
            return ResponseEntity.ok(userService.login(user));
        }
        catch (UserNotValidException e) {
            return ResponseEntity.badRequest().build();
        }
    }
    
    @PostMapping("/logout")
    public ResponseEntity<User> logout(@RequestBody User user) {
        userService.logout();
        return ResponseEntity.ok().build();
    }
    
    @GetMapping("/list")
    public String userList(Model model) {
        model.addAttribute("title", "User list");
        model.addAttribute("users", userService.userNamesStartingWith(""));
        return "userlist";
    }

    @GetMapping("/greeting")
    public String greeting(@RequestParam(value = "name", required = false, defaultValue = "World") String name, Model model) {
        model.addAttribute("name", name);
        return "greeting";
    }
    
    private String redirectToGreeting(@ModelAttribute User user) {
        return "redirect:/user/greeting?name=" + user.getFirstname();
    }
}