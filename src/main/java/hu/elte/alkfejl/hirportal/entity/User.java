package hu.elte.alkfejl.hirportal.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.Data;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "USER")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
    
    @OneToMany(targetEntity = Article.class, mappedBy = "user")
    @JsonIgnore
    private List<Article> articles;
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    
    @Column(name="username", nullable=false, length=100)
    private String username;
    
    @Column(name="first_name", nullable=true, length=100)
    private String firstname;
    
    @Column(name="last_name", nullable=true, length=100)
    private String lastname;
    
    @Column(name="password", nullable=false, length=100)
    private String password;
    
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Role role;
    
    public enum Role {
        GUEST, READER, EDITOR, ADMIN
    }
}