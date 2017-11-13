package hu.elte.alkfejl.hirportal.service;

import hu.elte.alkfejl.hirportal.entity.User;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.context.annotation.SessionScope;
import hu.elte.alkfejl.hirportal.repository.UserRepository;

@Service
@SessionScope
public class UserService {
    
    @Autowired
    private UserRepository userRepository;
       
    public List<User> userNamesStartingWith(String segment) {
        return userRepository.findByFirstNameSegment(segment);
    }

    public void register(User user) {
        userRepository.save(user);
    }

    public boolean isValid(User user) {
        return userRepository.findByFirstnameAndPassword(user.getFirstname(), user.getPassword()).isPresent();
    }
}