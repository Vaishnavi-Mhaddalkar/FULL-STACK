import {useEffect, useState} from 'react'
import 'axios'
import { useNavigate } from 'react-router-dom';
//import { useEffect } from "react"
import {listEmployees} from '../services/EmployeeServices'
//import {updateEmp} from '../services/EmployeeServices';
import 'bootstrap/dist/css/bootstrap.min.css';



const ListEmpComponent = () => {
    
    const [employees, setEmployees] = useState([])

    const navigator = useNavigate();

    useEffect(() => {
        listEmployees().then((response) =>{
        setEmployees(response.data);
    }).catch(error => {
        console.error(error)
    })

},[])
   /* const dummyData = [
        {
            "id" : 1,
            "FirstName": "Vaishnavi",
            "LastName" : "Mhaddalkar",
            "EmailId" : "mhad@gmail.com"

        },
        {
            "id" : 2,
            "FirstName": "Prafull",
            "LastName" : "Mhaddalkar",
            "EmailId" : "pra@gmail.com"
        }

    ]*/

    function addNewEmployee()
    {
        navigator('/add-employee')
    }


   // const updateEmp = (id) => navigator(`/edit-employee/${id}`);
    function updateEmp(id) { 
        navigator(`/edit-employee/${id}`)
    }

  

    /*<div className="d-flex justify-content-center align-items-center vh-100">*/
    return (
    <div className="container">

        <h2 className="text-center">List Of Employee</h2>
        <button className='btn btn-primary mb-2' onClick={addNewEmployee}>Add EMPLOYEE</button>
        <table className="table table-hover table-striped table-bordered">
            <thead>
                <tr>
                    <th>Emp Id</th>
                    <th>Emp First name</th>
                    <th>Emp Last Name</th>
                    <th>Email Id</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map(employee =>
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstname}</td>
                            <td>{employee.lastname}</td>
                            <td>{employee.email}</td>
                            <td>
                            <button className='btn btn-info' onClick={()=>(updateEmp(employee.id))}>Update</button>
                            </td>

                        </tr>
                    )
                }
                
            </tbody>
        </table>
    </div>
  /*  </div>*/
    
  )
}

export default ListEmpComponent