package hu.elte.alkfejl.hirportal.controller;

import hu.elte.alkfejl.hirportal.annotation.Role;
import hu.elte.alkfejl.hirportal.entity.Article;
import hu.elte.alkfejl.hirportal.service.ArticleService;
import hu.elte.alkfejl.hirportal.service.UserService;
import static hu.elte.alkfejl.hirportal.entity.User.Role.ADMIN;
import static hu.elte.alkfejl.hirportal.entity.User.Role.EDITOR;
import static hu.elte.alkfejl.hirportal.entity.User.Role.GUEST;
import static hu.elte.alkfejl.hirportal.entity.User.Role.READER;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.GetMapping;
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

    @Role({ADMIN, READER, EDITOR, GUEST})
    @GetMapping
    public ResponseEntity<Iterable<Article>> list() {
        return ResponseEntity.ok(articleService.list());
    }
    
    @Role({ADMIN, READER})
    @GetMapping("/{id}")
    private ResponseEntity<Article> read(@PathVariable String id) {
        Iterable<Article> read = articleService.read(Integer.parseInt(id));
        return ResponseEntity.ok(read.iterator().next());
    }
    
    @Role(ADMIN)
    @PutMapping("/{id}")
    private ResponseEntity<Article> edit(@PathVariable long id, @RequestBody Article article) {
        Article updated = articleService.edit(id, article);
        return ResponseEntity.ok(updated);
    }

    @Role(ADMIN)
    @DeleteMapping("/{id}")
    private ResponseEntity delete(@PathVariable long id) {
        articleService.delete(id);
        return ResponseEntity.ok().build();
    }
}