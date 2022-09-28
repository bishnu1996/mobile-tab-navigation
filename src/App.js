import './App.css';
import {useState} from 'react';
const data = [
  {
    title : "Home",
    iconClass : "fas fa-home",
    imageUrl : "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80",
  },
  {
    title : "Work",
    iconClass : "fas fa-box",
    imageUrl : "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
  },
  {
    title : "Blog",
    iconClass : "fas fa-book-open",
    imageUrl : "https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1266&q=80",
  },
  {
    title : "About Us",
    iconClass : "fas fa-users",
    imageUrl : "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
  }
]

function App() {

  const [activeTab,setActiveTab] = useState(0)
  const onClick = (index)=>{
    setActiveTab(index);
  };

  return (
    <div className="phone">
      {data.map((d,i)=>(
        <img src={d.imageUrl} alt="home" className={activeTab===i?"content show":"content"} key={d.imageUrl}/>
        ))}; 

       
        <nav>
        <ul>
        {data.map((d,i)=>(
          <li className={activeTab===i?'active':""} onClick={()=>onClick(i)} key={d.title}>
            <i className = {d.iconClass} ></i>
            <p>{d.title}</p>
          </li>
          ))} 
        </ul>
      </nav>
       
    </div>
    
  );
}

export default App;
