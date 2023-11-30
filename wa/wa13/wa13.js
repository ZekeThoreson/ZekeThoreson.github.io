
//Q1
let employeeList = {
    "employees" : [
        {
            "firstName" : "Sam",
            "department" : "Tech",
            "designation" : "Manager", 
            "salary" : 40000,
            "raiseEligible" : true
        },
        {
            "firstName" : "Mary", 
            "department" : "Finance", 
            "designation" : "Trainee", 
            "salary" : 18500, 
            "raiseEligible" : true
        },
        {
            "firstName" : "Bill",
            "department" : "HR", 
            "designation" : "Executive", 
            "salary" : 21200,
            "raiseEligible" : false
        }
    ]
}
console.log(employeeList)

//Q2
let company = {
        "companyName" : "Tech Stars",
        "website" : "www.techstars.site",
        "employees" : [
            {
                "firstName" : "Sam",
                "department" : "Tech",
                "designation" : "Manager", 
                "salary" : 40000,
                "raiseEligible" : true,
                "wfh" : false
            },
            {
                "firstName" : "Mary", 
                "department" : "Finance", 
                "designation" : "Trainee", 
                "salary" : 18500, 
                "raiseEligible" : true,
                "wfh" : false
            },
            {
                "firstName" : "Bill",
                "department" : "HR", 
                "designation" : "Executive", 
                "salary" : 21200,
                "raiseEligible" : false,
                "wfh" : false
            }
        ]
}
console.log(company)

//Q3
function addEmployee(firstName,department,designation,salary,raiseEligible,wfh){
    let employee = {
        "firstName" : firstName,
        "department" : department,
        "designation" : designation,
        "salary" : salary,
        "raiseEligible" : raiseEligible,
        "wfh" : wfh
    }
    company["employees"].push(employee)
}
addEmployee("Anna","Tech","Executive",25600,false,false)
console.log(company)

//Q4
let totalSalary = 0;
for(let i = 0; i < company.employees.length; i++){
    totalSalary += company["employees"][i]['salary']
}
console.log(totalSalary)

//Q5
function isRaiseEligible(company){
    for(let i = 0; i < company.employees.length; i++){
        if(company["employees"][i]['raiseEligible']){
            company["employees"][i]['salary'] += company["employees"][i]['salary']*(.1)
            company["employees"][i]['raiseEligible'] = false
        }
    }
}
isRaiseEligible(company)
console.log(company)

//Q6
let wfh = ['Anna','Sam']
function workingFromHome(wfh){
    for(let i = 0; i < wfh.length; i++){
        for(let j = 0; j < company.employees.length; j++){
            if(wfh[i] && company["employees"][j]['firstName'] == wfh[i]){
                console.log(company["employees"][j])
                company["employees"][j]['wfh'] = true
            }
        }
    }
}
workingFromHome(wfh)
console.log(company)
