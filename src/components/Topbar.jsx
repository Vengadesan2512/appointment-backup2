
import { AppState } from "../AppContext";


export default function TopBar(){
  const {theme, setTheme} = AppState();
   return( 
   <div>
      <div className="navbar bg-base-100">
  <div className="flex-none gap-2">
    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    </div> 
    <div>
   {
   theme === "dark"? (
   <button className="btn btn-accent m-1" onClick={()=>setTheme("light")}>
    Light<br/>
    </button>
    ):(
    <button 
    className="btn btn-error m-1" onClick={()=>setTheme("dark")} 
    >Dark</button>
     )

   }
      
     
     
     
       {/* <button className="btn btn-secondary" onClick={()=>setTheme("dark")} >Dark</button */}
  

      </div>   
    </div>
  </div>
</div>
  
   )
}