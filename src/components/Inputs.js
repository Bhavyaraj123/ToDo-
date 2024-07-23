import React from 'react';
import  {useState} from 'react'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Inputs = (props) => {
  const [Input, setInput] = useState('')
  const [desco, setDisc] = useState('')
  const [mainTask, setmainTask] = useState([])
  const handleInput =(e)=>{
    setInput(e.target.value)
  }
  const disco =(e)=>{
    setDisc(e.target.value)
  }
  const prev  = (e)=>{
    e.preventDefault();
  setmainTask([...mainTask,{Input,desco}])
    setInput(' ')
    setDisc( '')
console.log(mainTask)

  }
  const deletEvent =(index)=>{
    let clear = [...mainTask]
    clear.splice(index,1)
    setmainTask(clear)
    toast.warning('task deleted ')
    
  }
   const success = ()=>{
    toast.success("Task Added Successfully");

   }
// let showTask = <h2>No Task Added</h2>
const renderTasks = mainTask.map((task, index) => (
  <tr key={index}>
    <th scope="row">{index + 1}</th>
    <td>{task.Input}</td>
    <td>{task.desco}</td>
    <td ><button className='btn btn-danger mx-0' onClick={deletEvent}> Delet</button></td>
  </tr>
));
 
  return (
    <>
    <div className='my-3 d-flex justify-content-center'>
    <ToastContainer 
    autoClose={2000}
/>
      <form onSubmit={prev} >
        <div className='d-flex flex-row newObj container'  >
     <label style={{fontSize:'30px',fontWeight:"bolder" }}>Task: </label> <input className="form-control  .col-sm-* form-group offset-sm-2 mx-3" type="text" placeholder="Enter Task Title here" value={Input} onChange={handleInput} style={{borderRadius:"5px",fontSize:"20px" ,padding:"4px 4px",width:"30%"  }}/>
     <label style={{fontSize:'30px',fontWeight:"bolder"}}>Description: </label> <input className="form-control  .col-sm-* offset-sm-2 form-group mx-3" type="text" placeholder="Enter description" value={desco} onChange={disco} style={{width:"600px",borderRadius:"5px",fontSize:"20px" ,padding:"4px 4px"}}/>
      <button className='btn btn-secondary px-3 py-2' onClick={success} type='submit'>Save</button>

      </div>
      </form>
    </div>

    <div className='py-3  bg-primary my-4 text-light container 'style={{width:"1000px"}}> 
    <table className="table border " >
  <thead className="thead-dark " >
    <tr>
      <th scope="col">No.</th>
      <th scope="col">Title</th>
      <th scope="col">Description</th>
      <th scope="col"></th>

     
    </tr>
  </thead>
  <tbody>
    {mainTask.length===0 ?(
      <tr>
      <td colSpan="3" className="text-center">
        No Task Added
      </td>
    </tr>
    ): (
      renderTasks
      
    )
  }

  </tbody>
</table>



    </div>

    </>
  )
}

export default Inputs
