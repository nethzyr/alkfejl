package hu.elte.alkfejl.hirportal.service;

import hu.elte.alkfejl.hirportal.entity.Article;
import hu.elte.alkfejl.hirportal.entity.User;
import hu.elte.alkfejl.hirportal.exception.UserNotValidException;
import hu.elte.alkfejl.hirportal.repository.UserRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.context.annotation.SessionScope;

@Service
@SessionScope
public class UserService {
    
    private User user;
    
    @Autowired
    private UserRepository userRepository;
       
    public List<User> userNamesStartingWith(String segment) {
        return userRepository.findByFirstNameSegment(segment);
    }

    public User edit(long id, User user) {
        return this.user = userRepository.save(user);
    }

    public Iterable<User> list() {
        return userRepository.findAll();
    }

    public User register(User user) {
        user.setRole(User.Role.READER);
        return this.user = userRepository.save(user);
    }
    
    public User login(User user) throws UserNotValidException {
        if (isValid(user)) {
            return this.user = userRepository.findByUsername(user.getUsername());
        }
        throw new UserNotValidException();
    }

    private boolean isValid(User user) {
        return userRepository.findByUsernameAndPassword(user.getUsername(), user.getPassword()).isPresent();
    }
    
     public void logout() {
        user = null;
    }
     
    public boolean isLoggedIn() {
        return user != null;
    }
    
    public User getLoggedInUser() {
        return user;
    }
}