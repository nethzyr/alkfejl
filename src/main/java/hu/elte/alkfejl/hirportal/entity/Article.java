package hu.elte.alkfejl.hirportal.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Article {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    
    @Column(name="title", nullable=false, length=100)
    private String title;
    
    @Column(name="author", nullable=true, length=100)
    private String author;
    
    @Column(name="date", nullable=true, length=100)
    private String date;
    
    @Column(name="text", columnDefinition="CLOB NOT NULL")
    private String text;
    

}
