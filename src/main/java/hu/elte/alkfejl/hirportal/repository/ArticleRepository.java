package hu.elte.alkfejl.hirportal.repository;

import hu.elte.alkfejl.hirportal.entity.Article;
import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface ArticleRepository extends CrudRepository<Article, Long> {

    @Query("select t.title from Article t where t.title like ?1%")
    List<Article> findByTitleSegment(String firstName);

    @Query("select u.text from Article u where u.text like ?1%")
    List<Article> findByArticleSegment(String firstName);
}