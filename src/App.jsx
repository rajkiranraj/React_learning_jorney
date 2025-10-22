import './App.css'

function App() {
  const data =[
    {
      name:"lorem10Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, laborum.",
      url:'https://plus.unsplash.com/premium_photo-1760023732601-87a1b3ff9f76?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1548'
    },{
      name:"lorem10Lorem, ipsum dolor sit amet consectetur ",
      url:'https://images.unsplash.com/photo-1589656966895-2f33e7653819?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740'
    },{name:"lorem10Lorem, ipsum dolor sit amet consectetur",
      url:'https://images.unsplash.com/photo-1497206365907-f5e630693df0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1160'
    }
  ]
  return(
    <div className="class w-full h-screen bg-black flex gap-10 justify-center items-center">
      {data.map((value,index)=>
          <div className="parentcard w-60 bg-amber-200 rounded-2xl overflow-hidden p-0 ">
            <div className="img w-full h-full bg-blue-400">
              <img src="https://images.unsplash.com/photo-1497206365907-f5e630693df0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1160" alt="" />
            </div>
            <div className="textcontent w-full px-3 py-4">
              <h2>Lorem ipsum dolor sit.</h2>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, incidunt!</p>
            </div>
          </div>
      )}
    </div>
  )
}

export default App
