package hu.elte.alkfejl.hirportal.controller;

import hu.elte.alkfejl.hirportal.annotation.Role;
import hu.elte.alkfejl.hirportal.entity.Article;
import hu.elte.alkfejl.hirportal.entity.User;
import hu.elte.alkfejl.hirportal.service.UserService;
import hu.elte.alkfejl.hirportal.exception.UserNotValidException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import static hu.elte.alkfejl.hirportal.entity.User.Role.ADMIN;

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
    public ResponseEntity<Iterable<User>> list() {
        return ResponseEntity.ok(userService.list());
    }

    @GetMapping("/greeting")
    public String greeting(@RequestParam(value = "name", required = false, defaultValue = "World") String name, Model model) {
        model.addAttribute("name", name);
        return "greeting";
    }
    
    private String redirectToGreeting(@ModelAttribute User user) {
        return "redirect:/user/greeting?name=" + user.getFirstname();
    }

    @Role(ADMIN)
    @PutMapping("/{id}")
    private ResponseEntity<User> edit(@PathVariable long id, @RequestBody User user) {
        User updated = userService.edit(id, user);
        return ResponseEntity.ok(updated);
    }
}