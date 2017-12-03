package hu.elte.alkfejl.hirportal.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
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
    
    @Column(name="text", columnDefinition="CLOB NOT NULL")
    private String text;
    

}
