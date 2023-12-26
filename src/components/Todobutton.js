const Todobutton = ({todos,deleteHandler,finishHandler})=>{
    return(
      <div key ={todos.id }className='todo'>제목:{todos.title} <br></br> 내용:{todos.content}<div>
          <button onClick={()=>deleteHandler(todos.id)}>삭제</button><button onClick={()=>finishHandler(todos.id)}>완료</button></div></div>
    )
  }
  
 

export default Todobutton;
