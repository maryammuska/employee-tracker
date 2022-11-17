USE employeetracker_db;

INSERT INTO department(department_name)
VALUES ("Engineering"),
       ("Finance"),
       ("Sales"),
       ("Legal"); 

INSERT INTO role (title, salary, department_id)
VALUES ("Software Engineer", 150000, 1),
       ("Lead Software Engineer", 200000, 1),
       ("Accountant", 100000, 2),
       ("Account Manager", 160000, 3),
       ("Legal Team Lead", 170000, 4),
       ("Attorney", 200000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Maryam", "Muska", 1, null),
       ("Jane", "Doe", 2, 1),
       ("Asmael", "Haida", 3, null),
       ("Norman", "Rockwell", 4, 3),
       ("John", "Laidar", 5, null),
       ("Abrahem", "Haimar", 6, 5);

-- can set null for the manager id if not manager