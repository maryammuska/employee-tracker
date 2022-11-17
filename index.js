const mysql = require("mysql2");
const inquirer = require("inquirer");
const cTable = require("console.table");
// const Connection = require("mysql2/typings/mysql/lib/Connection");

const db = mysql.createConnection({
    host: 'localhost',
    port: '3001',
    user: 'root',
    password: 'Haidar11',
    database: 'employeetracker_db'
},
    console.log("***********************************"),
    console.log("*                                 *"),
    console.log("*        EMPLOYEE TRACKER         *"),
    console.log("*                                 *"),
    console.log("***********************************")
    // connection.connect();
    // init()
);

function init() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'What would you like to do?',
            name: 'choice',
            choices: [
                'View All Departments',
                'View All Employees',
                'View All Roles',
                'Add Employee',
                'Update Employee Role',
                'Add Department',
                'Add Role',
                'Exit Employee Tracker'
            ]
        }
    ]).then(data => {
        switch(data.init){
            case 'View All Departments': 
            viewAllDepartments();
            break;
            
            case 'View All Employees': 
            viewAllEmployees();
            break;

            case 'View All Roles': 
            viewAllRoles();
            break;

            case 'Add Employee': 
            addEmployee();
            break;

            case 'Update Employee Role': 
            updateEmployeeRole();
            break;

            case 'Add Department': 
            addDepartment();
            break;

            case 'Add Role': 
            addRole();
            break;

            // case 'Delete Employee': 
            // deleteEmployee();
            // break;

            // case 'Delete Department': 
            // deleteDepartment();
            // break;

            // case 'Delete Role': 
            // deleteRole();
            // break;

            case 'Exit Employee Tracker': 
            console.log('Thank you! Have a great day!');
            break;
        };
    });
};

function viewAllDepartments() {
    db.query('SELECT * FROM department', (err,results) => {
        console.table(results);
        init();
    });
};

function viewAllRoles(){
    db.query('SELECT * FROM role', (err, results) => {
        console.table(results);
        init();
    });
};

function viewAllEmployees(){
    db.query('SELECT * FROM employee', (err, results) => {
        console.table(results);
        init();
    });
};


function addEmployee() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Add the employee first name',
            name: 'employeeName'
        },
        {
            type: 'input',
            message: 'Add the employee last name',
            name: 'employeeLastName'
        },
        {
            type: 'input',
            message: 'Add the employee role',
            name: 'employeeRole'
        },
        {
            type: 'input',
            message: 'Add the employee manager ID',
            name: 'manID'
        },
    ]).then(data => {
        db.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [data.employeeName, data.employeeLastName, data.employeeRole, data.manID],(err, result) => {
            console.log('New Employee has been added!');
            init();
        });
    });
};

function addDepartment(){
  inquirer.prompt(
    {
        type: 'input',
        message: 'Add department name: ',
        name: 'departmentName',
    }
  ).then((data) => {
    db.query('INSERT INTO department (name) VALUES (?)', [data.departmentName], () => {
        console.log('New Department has been added!');
        init();
    });
  });
};


function addRole(){
    inquirer.prompt(
      {
          type: 'input',
          message: 'Add role name: ',
          name: 'roleName',
      },
      {
        type: 'input',
        message: 'Add Salary',
        name: 'salaryAmount'
      },
      {
        type: 'input',
        message: 'Add Department ID',
        name: 'departmentID'
      },
     
    ).then((data) => {
      db.query('INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)', [data.roleName, data.salaryAmount, data.departmentID], (err, results) => {
          console.log('New Role has been added!');
          init();
      });
    });
  };

init();

