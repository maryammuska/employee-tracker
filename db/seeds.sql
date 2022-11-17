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
       ("Lead Accountant", 150000, 2)
       ("Sales Lead", 90000, 3),
       ("Lead Lawyer", 120000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Maryam", "Muska", 1, 1),
       ("Jane", "Doe", 5, NULL),
       ("Asmael", "Haidar", 2, 2),
       ("Norman", "Rockwell", 6, NULL),
       ("John", "Haidar", 3, 3),
       ("Abrahem", "Haidar", 4, 4);

-- can set null for the manager id if not manager