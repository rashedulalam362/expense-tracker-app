import { useNavigate } from "react-router-dom";





function Income() {
  const navigate=useNavigate()
  const HandleBackHome=()=>{
   
    navigate('/')
  }

  return (
    <div className=" bg-red-600">
            
    <div className="overflow-x-auto">
    <table className="table">
    {/* head */}
    <thead className="w-full h-3 bg-red-600">
      <tr >
        <th className=" text-center bg-green-600">Income </th>
        
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr className="bg-base-200">
        <th>1</th>
        <td>Income-Sector</td>
        <td>Position </td>
        <td>Amount:</td>
      </tr>
      {/* row 2 */}
      <tr  >
        <th>2</th>
        <td>Private-Job</td>
        <td>Assistance Manager</td>
        <td>50000/-BDT</td>
      </tr>
      {/* row 3 */}
      <tr>
        <th>3</th>
        <td>Share-business</td>
        <td>stock</td>
        <td>15000-bdt</td>
      </tr>
    </tbody>
  </table>
</div> 
 
<button onClick={HandleBackHome} className="rounded-full bg-green-700 px-2 py-4 w-full ">Go Home page</button>
          
      </div>
  )
}

export default Income