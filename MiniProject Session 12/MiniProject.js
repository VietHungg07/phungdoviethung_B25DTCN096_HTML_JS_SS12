 let students = [
    { id: 1, name: "Nguyễn Văn A", age: 20, gpa: 7, status: "active" },
    { id: 2, name: "Trần Thị B", age: 21, gpa: 9, status: "inactive" },
    { id: 3, name: "Lê Văn C", age: 19, gpa: 4, status: "active" },
    { id: 4, name: "Phạm Văn D", age: 22, gpa: 10, status: "inactive" },
    { id: 5, name: "Hoàng Thị E", age: 20, gpa: 3, status: "active" },
 ];
let nextId = 6;
let choice;

//case 1
function createStudent(){
    let name = prompt("Nhập tên:");
    let age = +prompt("Nhập tuổi ( 16 - 60):")
    let gpa = +prompt("Nhập GPA ( 0 - 10 )")
    let status = prompt (" Nhập trạng thái (active/inactive):")
     if (!id || !name) {
    alert("Không được để trống!");
    return;
  }
  if (age < AGE_MIN || age > AGE_MAX) {
    alert("Tuổi không hợp lệ!");
    return;
  }
  if (gpa < GPA_MIN || gpa > GPA_MAX) {
    alert("GPA không hợp lệ!");
    return;
  }
  if (status !== "active" && status !== "inactive") {
    alert("Status sai!");
    return;
  }
    
    const newStudent ={
    id: nextId++,
    name,
    age,
    gpa,
    status,
    }
    students.push(newStudent);
    alert(` Thêm mới thành công: ${newStudent.id} - ${newStudent.name}`)
}
//case 2
function updateStudent(){
    let findId = +prompt("Nhập ID cần cập nhật: ");
    let student = students.find(s => s.id === findId)
    if(!student){
        alert("Không tìm thấy sinh viên với ID này. Vui lòng nhập lại.")
    }else{
        student.name = prompt("Nhập tên mới");
        student.age = +prompt("Nhập tuổi mới");
        student.gpa = +prompt("Nhập GPA mới")
        student.status = prompt("Nhập trạng thái mới (active/inactive)")
        alert(`Cập nhật thành công: ${student.id} `)
    }
}
//case 3:
function softStudent(){
    let findId = +prompt("Nhập ID cần cập nhật: ");
    let student = students.find(s => s.id === findId)
    if(!student){
        alert("Không tìm thấy sinh viên với ID này. Vui lòng nhập lại.")
    }else{
        let confirmDelete = confirm(`Xác nhận Soft Delete sinh viên ${student.id} - ${student.name} `);
        if(confirmDelete){
            student.status = "inactive";
            student.splice(index, 1);
            alert(`Đã Soft Delete sinh viên`)

        }
    }
}
// case 4:
function restoreStudent(){
    let findId = +prompt("Nhập Id cần Restore: ");
    let student = students.find(s => s.id === findId)
    if(!student){
        alert("Không tìm thấy sinh viên với ID này. Vui lòng nhập lại.")
    }else{
        let confirmRestore = confirm(` Xác nhận Restore sinh viên  ${student.id} - ${student.name}`);
        if(confirmRestore){
            student.status = "active";
            alert(` Đã Restore sinh viên  ${student.id} - ${student.name} `)    
        }
    }
}
// case 5:


do{
    choice = +prompt(` ==== STUDENT MANAGER ADVANCED ====
        1. Create Student
        2. Update Student
        3. Soft Delete Student
        4. Restore Student
        5. View Students
        6. Analytics Dashboard
        0. Exit
        8. test
`)
//case test
        
switch(choice){
    case 1:
        createStudent();
        break;
    case 2:
        updateStudent();
        break;
    case 3: 
        softStudent();
        break;
    case 4:
        restoreStudent();
        break;
    case 5: 
        break;
    case 6:

        break;
    case 0:
        alert("Đã thoát chương  trình !")
        break;
    case 8:
    console.log(students)
    break;
    ;default:
        alert("Lựa chọn không hợp lệ vui lòng chọn lại !")
        break;
}



}while( choice != 0);
