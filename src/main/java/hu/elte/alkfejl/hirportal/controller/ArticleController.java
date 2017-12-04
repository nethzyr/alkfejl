package hu.elte.alkfejl.hirportal.controller;

import hu.elte.alkfejl.hirportal.entity.Article;
import hu.elte.alkfejl.hirportal.entity.User;
import hu.elte.alkfejl.hirportal.service.ArticleService;
import hu.elte.alkfejl.hirportal.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/article")
public class ArticleController {

    @Autowired
    private ArticleService articleService;

    @Autowired
    private UserService userService;

    @GetMapping
    public ResponseEntity<Iterable<Article>> list() {
        return ResponseEntity.ok(articleService.list());
    }

    @GetMapping("/{id}")
    private ResponseEntity<Article> read(@PathVariable String id) {
        Iterable<Article> read = articleService.read(Integer.parseInt(id));
        return ResponseEntity.ok(read.iterator().next());
    }
}