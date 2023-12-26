const Deletebutton =({e,deleteHandlerTwo,deleteCancel})=>{
    return(
      <div key ={e.id}className='todo'>제목:{e.title} <br></br> 내용:{e.content}<div>
          <button onClick={()=>deleteHandlerTwo(e.id)}>삭제</button><button onClick={()=>deleteCancel(e.id)}>취소</button></div></div>
    )
  }

export default Deletebutton