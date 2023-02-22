# Write your MySQL query statement below
SELECT Employee.name, Bonus.bonus FROM Employee LEFT OUTER JOIN Bonus ON Employee.empID = Bonus.empID WHERE Bonus.bonus < 1000 OR Bonus.bonus IS null;