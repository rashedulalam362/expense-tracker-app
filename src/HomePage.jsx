import {  useNavigate } from "react-router-dom";



export default function HomePage() {
    const navigate=useNavigate()
    const handleClick=()=>{
   
        navigate('/income')
    }
  
    const handleExpenseClick=()=>{
      navigate('/expense')

    }

  return (
   
    <div className="mx-auto w-1/2 flex justify-between gap-3 mt-5 " >
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
 
<button className="btn btn-secondary mt-6" onClick={handleClick}>go to income page</button>
          
      </div >
        <div className="bg-green-800 "  >
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
        
       <button className="btn btn-secondary mt-6 " onClick={handleExpenseClick}>Go to Expense</button> 
          
        </div>
    </div>
  )
}
