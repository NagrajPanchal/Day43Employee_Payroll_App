// const createInnerHtml = () => {
//     const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>" + 
//                         "<th>Salary</th><th>Start Date</th><th>Actions</th>";
//     const innerHtml = `${headerHtml}
//      <tr>
//       <td><img class="profile" alt="" src="../assets/profile-images/Ellipse -2.png"></td>
//       <td>Narayan Mahadevan</td>
//       <td>Male</td>
//       <td><div class='dept=label'>HR</div><div class='dept-label'>Finance</div></td>
//       <td>3000000</td>
//       <td>1 Nov 2020</td>
//       <td>
//          <img id="1" onclick="remove(this)" alt="delete"src="../assets/icons/delete-black-18dp.svg">
//          <img id="1" alt="edit" onclick="update(this)"src="../assets/icons/create-black-18dp.svg">
//       </td>    
// </tr>  
//     `;
//     document.querySelector('#table-display').innerHTML = innerHtml;
// } 

//JSON Format

// const createInnerHtml = () => {
//     const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</thh>"+
//     "<th>Salary</th><thh>Start Date</th><th>Actions</th>";
//     let empPayrollData = createEmployeePayrollJSON()[0];
//     const innerHtml = `${headerHtml}
//     <tr>
//     <td><img class="profile" src="${empPayrollData._profilePic}" alt=""></td>
//     <td>${empPayrollData._name}</td>
//     <td>${empPayrollData._gender}</td>
//     <td>
//     <div class='dept-lable'>${employeePayrollData._department[0]}</div>
//     <div class='dept-lable'>${employeePayrollData._department[1]}</div>
//     </td>
//     <td>${empPayrollData._salary}</td>
//     <td>${empPayrollData._startData}</td>
//     <td>
//     <img name="${empPayrollData._id}" onclick="remove(this)" src="../Day45Employee_Payroll_Home_Page/assets/icons/delete-black-18dp.svg" alt="delete">
//     <img name="${empPayrollData._id}" onclick="update(this)" src="../Day45Employee_Payroll_Home_Page/assets/icons/create-black-18dp.svg" alt="edit">
//     </td>
//     </tr>
//     `;
//     document.querySelector('#table-disply').innerHTML = innerHtml;
// }

// const createEmployeePayrollJSON = () => {
//     let empPayrollListLocal = [
//         {
//             _name:'Nagraj Panchal',
//             _gender:'male',
//             _department:[
//                 'Engineering',
//                 'Finance'
//             ],
//             _salary: '500000',
//             _startData: '29 Oct 2019',
//             _note: '',
//             _id: new Date().getTime(),
//             _profilePic: '..'
//         },
//         {
//             _name:'Narayana',
//             _gender:'male',
//             _department:[
//                 'Sales'
//             ],
//             _salary: '400000',
//             _startData: '29 Oct 2019',
//             _note: '',
//             _id: new Date().getTime() + 1,
//             _profilePic: '..' 
//         }
//     ];
//     return empPayrollListLocal;
// }


//
window.addEventListener('DOMContentLoaded',(event) => {
    createInnerHtml();
});
const createInnerHtml = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</thh>"+
    "<th>Salary</th><thh>Start Date</th><th>Actions</th>";
    let empPayrollData = createEmployeePayrollJSON()[0];
    const innerHtml = `${headerHtml}
    <tr>
    <td><img class="profile" src="${empPayrollData._profilePic}" alt=""></td>
    <td>${empPayrollData._name}</td>
    <td>${empPayrollData._gender}</td>
    <td>${getDeptHtml(empPayrollData._department)}</td>
    <td>${empPayrollData._salary}</td>
    <td>${empPayrollData._startData}</td>
    <td>
    <img name="${empPayrollData._id}" onclick="remove(this)" src="../Day45Employee_Payroll_Home_Page/assets/icons/delete-black-18dp.svg" alt="delete">
    <img name="${empPayrollData._id}" onclick="update(this)" src="../Day45Employee_Payroll_Home_Page/assets/icons/create-black-18dp.svg" alt="edit">
    </td>
    </tr>
    `;
    document.querySelector('#table-disply').innerHTML = innerHtml;
}

const getDeptHtml = (deptList) => {
    let deptHtml = '';
    for (const dept of deptList)
    {
        deptHtml = '${deptHtml} <dev class="dept-label">${dept}</dev>'
    }
    return deptHtml;
}