package hu.elte.alkfejl.hirportal.repository;

import hu.elte.alkfejl.hirportal.entity.User;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {

    @Query("select u.firstname from User u where u.firstname like ?1%")
    List<User> findByFirstNameSegment(String firstName);

    Optional<User> findByFirstname(String firstname);

    Optional<User> findByFirstnameAndPassword(String firstname, String password);
}