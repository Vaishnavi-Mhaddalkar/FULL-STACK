package net.javaguides.ems.entity;

import jakarta.persistence.*;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "employees")

public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column (name = "firstname")
    private String Firstname;

    @Column (name = "lastname")
    private String Lastname;

    @Column (name = "email", nullable = false, unique = true)
    private String Email;


}
