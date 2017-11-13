package hu.elte.alkfejl.hirportal.controller;

import hu.elte.alkfejl.hirportal.service.ArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ArticleController {

    @Autowired
    private ArticleService articleService;

    @GetMapping("/articlelist")
    public String articleList(Model model) {
        model.addAttribute("title", "Article list");
        model.addAttribute("titles", articleService.titleStartingWith(""));
        model.addAttribute("articles", articleService.articleStartingWith(""));
        return "articlelist";
    }
}