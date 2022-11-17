USE employeetracker_db;

INSERT INTO department(department_name)
VALUES ("Engineering"),
       ("Finance"),
       ("Sales"),
       ("Legal"); 

INSERT INTO role (title, salary, department_id)
VALUES ("Software Engineer", 150000, 1),
       ("Accountant", 100000, 2),
       ("Sales Lead", 90000, 3),
       ("Lead Lawyer", 120000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Maryam", "Muska", 1, 1),
       ("Asmael", "Haidar", 2, 2),
       ("John", "Haidar", 3, 3),
       ("Abrahem", "Haidar", 4, 4);

-- can set null for the manager id if not manager