DROP DATABASE IF EXISTS employeetracker_db;
CREATE DATABASE employeetracker_db;

USE employeetracker_db;
CREATE TABLE department(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(50) NOT NULL
);

CREATE TABLE role(
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(50),
    salary DECIMAL NOT NULL,
    department_id INT,
    PRIMARY KEY(id),
    FOREIGN KEY(department_id) REFERENCES department(id)
    
);

CREATE TABLE employee(
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    role_id INT,
    manager_id INT,
    PRIMARY KEY(id),
    FOREIGN KEY (role_id) REFERENCES role(id),
    FOREIGN KEY (manager_id) REFERENCES employee(id)
);