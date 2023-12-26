
import { useState } from 'react';
import './App.css';
import Deletebutton from './components/Deletebutton';
import Todobutton from './components/Todobutton';
function App() {
  const [today, settoday] = useState ([
   {id:1, title:"공부" , content:"리액트 강의 듣기"},
  ]);

  const [finish , setfinish] =useState([
    {id:1, title:"공부" , content:"리액트 강의 듣기"},
  ])

  const [title,settitle] =useState("")
  const [content,setcontent] =useState("")

  const titleChangehandler = (event)=>{
    settitle(event.target.value)
  }

  const contentChangehandler = (event)=>{
    setcontent(event.target.value)
  }
  
  const addHandler = ()=>{
    const Newtodo={
      id:today.length+1,
      title,
      content
    }
    settoday([...today,Newtodo])
    settitle("")
    setcontent("")
  };
  
  const deleteHandler =(id)=>{
    const del_today =today.filter((e)=>{
      return e.id !== id
    })
    settoday(del_today)
  }

  const finishHandler =(id)=>{
    const NewFinish = today.find((e)=>{
      return e.id === id
    })
    
    const deletedFinish = today.filter((e)=>{
     return e.id !==id
    })

    const NewFinshes =[...finish,NewFinish]

    setfinish(NewFinshes)
    settoday(deletedFinish)
  }

  const deleteHandlerTwo = (id)=>{
    const new_delete = finish.filter(e =>{
      return e.id !== id
    });
    setfinish(new_delete)
  }

  const deleteCancel =(id)=>{
    const cancel =finish.find(e=>{
      return e.id ===id  //해당하는 친구
    })

    const cancelTwo=finish.filter(e=>{
      return e.id!==id  //해당하지 않는 친구만
    })
    const newcancel =[...today,cancel]
    settoday(newcancel)
    setfinish(cancelTwo)

  }

  return (
    <div className="App">
      <div className='Top_bar'>
        <div>
          제목:&nbsp;
          <input className='title' value={title} onChange={titleChangehandler}></input>
          내용:&nbsp;
          <input className='content' value={content} onChange={contentChangehandler}></input>
          </div>
          <div>
          <button className='add_button' onClick={addHandler}>추가하기</button>
          </div>
      </div>
      <h1>오늘의 할일</h1>
      <div className='todolist'>
        {today.map((todos)=>{
            return (<Todobutton todos={todos} deleteHandler={deleteHandler} finishHandler={finishHandler}/>
        )})}  
      </div>
       <h1>완료!!</h1>
       <div className='todolist'>
        {finish.map((e)=>{
            return <Deletebutton e={e} deleteHandlerTwo={deleteHandlerTwo} deleteCancel={deleteCancel}/>
          })}
      </div>
    </div>
  );
}


export default App;
