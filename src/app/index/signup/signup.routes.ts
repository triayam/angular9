import { Route } from '@angular/router';
import { SignupComponent } from './signup.component';
export const SignupRoutes: Route[] = [
  {
    path: '',
    component: SignupComponent
  }
];

/*
create table test.employee (
    id int,
    name char (120),
    salary int
 );

*/
/*
create table employee (
    id int,
    name char (120),
    salary int
 );
 /* --select * from employee; */
/*#desc employee;*/
/*
insert into employee values( 1,'teja','chinchwad',2,3,4000);
insert into employee values( 2,'raja','Punechwad',4,1,3000);
insert into employee values( 3,'paja','dewhun',5,4,2000);
insert into employee values( 4,'Kaja','nodifn',6,5,1000);

insert into test.employee values( 1,'teja',4000);
insert into test.employee values( 2,'raja',3000);
insert into test.employee values( 3,'paja',2000);
insert into test.employee values( 4,'Kaja',1000);
select * from test.employee;
select a.salary
from test.employee a , test.employee b
where a.salary < b.salary
group by a.salary
having count(a.salary) = 2



*/
