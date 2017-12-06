package hu.elte.alkfejl.hirportal.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.sql.Timestamp;

import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "ARTICLE")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Article {

    @JoinColumn
    @ManyToOne(targetEntity = User.class, optional = false)
    @JsonIgnoreProperties("articles")
    private User user;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name="title", nullable=false, length=100)
    private String title;

    @Column(name="author", nullable=true, length=100)
    private String author;

    @Column(name="date", nullable = false)
    private Timestamp date;

    @Column(name="body", columnDefinition="CLOB NOT NULL")
    private String body;

    @Column(name="thumbnail", nullable=false, length=200)
    private String thumbnail;

    @Column(name="category", nullable=false, length=100)
    private int category;

}
