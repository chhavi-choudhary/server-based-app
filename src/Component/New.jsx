import React from "react";

import { useForm } from "react-hook-form";



function New() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
   
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} />
      <input type="submit" />
    </form>
  );
}
export default New;