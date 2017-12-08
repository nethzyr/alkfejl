package hu.elte.alkfejl.hirportal.service;

import hu.elte.alkfejl.hirportal.entity.Article;
import hu.elte.alkfejl.hirportal.entity.User;
import hu.elte.alkfejl.hirportal.entity.User.Role;
import hu.elte.alkfejl.hirportal.repository.ArticleRepository;

import java.util.List;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.Collections;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.context.annotation.SessionScope;

@Service
@SessionScope
public class ArticleService {

    @Autowired
    private ArticleRepository articleRepository;

    public List<Article> titleStartingWith(String segment) {
        return articleRepository.findByTitleSegment(segment);
    }

    public List<Article> articleStartingWith(String segment) {
        return articleRepository.findByArticleSegment(segment);
    }
    
    public void delete(long id) {
        articleRepository.delete(id);
    }

    public Article add(Article article) {
        return articleRepository.save(article);
    }
   
    public Article edit(long id, Article article) {
        Article currentArticle = articleRepository.findOne(id);
        return articleRepository.save(article);
    }
    
    /*public Article create(Article article, User user) {
        article.setDate(Timestamp.valueOf(LocalDateTime.now()));
        article.setUser(user);
        return articleRepository.save(article);
    }*/
    
    public Iterable<Article> list() {
        return articleRepository.findAll();
    }

    public Iterable<Article> read(long id) {
        return articleRepository.findAllById(id);
    }
}