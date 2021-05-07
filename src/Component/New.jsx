import React from "react";
import Header from './Header';
import NewUserlist from'./NewUserlist';


export const New = () => {
  return (
    <div>
    <Header />
    <NewUserlist />
    </div>
  )
}






























// function New() {
//   const { register, handleSubmit } = useForm();
//   const onSubmit = data =>  alert(JSON.stringify(data));
 
  
//   return (
//     <div className="createForm">
//       <h2>To create new user, enter details here!!</h2>
//     <form onSubmit={handleSubmit(onSubmit)} >
//        <input type="integer" {...register("id")}placeholder= "Id" />
//       <input type="text" {...register("last_name")} placeholder= "Last Name" />
//       <input type="text" {...register("first_name")}placeholder="First Name"  />
//       <input type="text"{...register("status")} placeholder="Status" />
//       <input type="date"{...register("created_at")} placeholder="Created" />
//       <input type="date"{...register("updated_at")} placeholder="Updated" />
//       <input type="submit"/>
//     </form>
//     </div>
//   );
// }
export default New;