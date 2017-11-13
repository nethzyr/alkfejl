package hu.elte.alkfejl.hirportal.service;

import hu.elte.alkfejl.hirportal.entity.Article;
import java.util.List;

import hu.elte.alkfejl.hirportal.repository.ArticleRepository;
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
}