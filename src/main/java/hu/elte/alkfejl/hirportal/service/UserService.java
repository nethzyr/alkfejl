package hu.elte.alkfejl.hirportal.service;

import hu.elte.alkfejl.hirportal.entity.Student;
import hu.elte.alkfejl.hirportal.repository.StudentRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.context.annotation.SessionScope;

@Service
@SessionScope
public class StudentService {
    
    @Autowired
    private StudentRepository studentRepository;
       
    public List<Student> studentNamesStartingWith(String segment) {
        return studentRepository.findByFirstNameSegment(segment);
    }
}