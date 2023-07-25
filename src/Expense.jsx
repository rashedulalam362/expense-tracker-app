import { useNavigate } from "react-router-dom"



function Expense() {
  const navigate=useNavigate()
  const HandleBackHome=()=>{
   
    navigate('/')
  }
  return (
    <div className="bg-green-800">
        <div className="overflow-x-auto">
        <table className="table">
    {/* head */}
    <thead className="text-center">
      <tr>
        <th className="  bg-blue-600">Expense </th>
        <th></th>
       
      </tr>
    </thead>
    <tbody className="text-white font-semibold">
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>Family-Secotor</td>
        <td>amount:</td>
        
      </tr>
      {/* row 2 */}
      <tr className="hover">
        <th>2</th>
        <td>Family-expense/-</td>
        <td>28000/-</td>
        
      </tr>
      {/* row 3 */}
      <tr>
        <th>3</th>
        <td>Others-</td>
        <td>10000/-</td>
        
      </tr>
    </tbody>
      </table>
</div>
        
          
           <button onClick={HandleBackHome} className="btn btn-primary">Go to home</button>
        </div>
  )
}

export default Expense