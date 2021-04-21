import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <nav class="navbar navbar-dark bg-dark">
  <div class="container col-sm-1">
   <div>
     <Link to="/form"><button className="btn btn-warning" >Form</button></Link>
   </div>
  </div>
</nav>
           <h2>Welcome User</h2> 
        </div>
    )
}
