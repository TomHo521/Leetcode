/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    let min = salary[0], max = salary[0];
    salary.forEach(e => {
        min = Math.min(e, min);
        max = Math.max(e, max);
    })
    return (salary.reduce((acc, e) => acc + e, 0) - min - max) / (salary.length - 2);   
};