var salary= document.querySelector('#salary');
var output = document.querySelector('.salary-output');
output.textContent=salary.value;
salary.addEventListener('input',function(){
    output.textContent=salary.value;
});

function save(){

    let empName = document.getElementById("name").value;

    let empProfileImage = document.querySelector('input[name="profile"]:checked').value;

    let empGender = document.querySelector('input[name="gender"]:checked').value;
    
    let empDepartment = document.querySelectorAll(".checkbox");
    let empDepartmentArr = [];
    for(let emp of empDepartment){
        if(emp.checked){
            empDepartmentArr.push(emp.value);
        }
    }
    //salary
    let empSalary = document.querySelector("#salary").value;
    
    //Start Date
    let day = document.querySelector('#day').value;
    let month = document.querySelector('#month').value;
    let year = document.querySelector('#year').value;
    let empStartDate = new Date(year,month,day);

    let empNotes = document.querySelector('#notes').value;

    try{

        let employeePayroll = new EmployeePayrollData(empName,empProfileImage,empGender,empDepartmentArr,empSalary,empStartDate,empNotes);
        //empName,empProfileImage,empGender,empDepartmentArr,empSalary,empStartDate,empNotes
        console.log(employeePayroll.toString());
    }catch(ex) {
        console.error(ex);
    }
    
}