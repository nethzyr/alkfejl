package hu.elte.alkfejl.hirportal.controller;

import hu.elte.alkfejl.hirportal.entity.Article;
import static hu.elte.alkfejl.hirportal.entity.User.Role.ADMIN;
import static hu.elte.alkfejl.hirportal.entity.User.Role.EDITOR;
import static hu.elte.alkfejl.hirportal.entity.User.Role.GUEST;
import static hu.elte.alkfejl.hirportal.entity.User.Role.READER;

import hu.elte.alkfejl.hirportal.service.ArticleService;
import hu.elte.alkfejl.hirportal.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Role;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/article")
public class ArticleController {

    @Autowired
    private ArticleService articleService;
    
    @Autowired
    private UserService userService;


}