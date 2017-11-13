package hu.elte.alkfejl.hirportal.entity;

import javax.persistence.*;
import lombok.Data;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "USER")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    
    @Column(name="first_name", nullable=false, length=100)
    private String firstname;
    
    @Column(name="last_name", nullable=true, length=100)
    private String lastname;
    
    @Column(name="password", nullable=true, length=100)
    private String password;
    
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Role role;
}