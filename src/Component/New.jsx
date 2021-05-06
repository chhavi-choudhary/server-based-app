import React from "react";
//import {Form,FormGroup,Label,Input,Button} from "reactstrap";
//import { Link } from 'react-router-dom';
import Header from './Header';
import NewUserlist from'./NewUserlist';


export const New = () => {
  return (
    <div>
    <Header />
    <NewUserlist />
   
    {/* <Form>
      <FormGroup>
      <Label>Id</Label>
        <Input type="text" placeholder="Enter Id"></Input>
        <Label>First Name</Label>
        <Input type="text" placeholder="Enter First Name"></Input>
        <Label>Last Name</Label>
        <Input type="text" placeholder="Enter Last Name" ></Input> 
      </FormGroup>
      <Button type="submit">Add New User</Button> 
      <Link to="/" className="btn btn-danger ml-4">Cancel</Link>
    </Form> */}
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