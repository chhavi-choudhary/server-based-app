import React from 'react';
import { useForm } from "react-hook-form";
import './New.css';
import EditUser from './EditUser';

const Edit = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => alert(JSON.stringify(data));
  console.log(watch("example"))

  return (
  <div>
    <EditUser /> 
    <div className="createForm">
      <h2>Handle validation Error with message!!</h2>
      <form onSubmit={handleSubmit(onSubmit)} >
        <label htmlFor="id">User Id:</label>
        <input type="integer" {...register("id", { required: true, minLength: 2, maxLength: 8 })} />
        {errors.id && (
        <p>The id must be greater then 2 digits and less then 8</p>
      )}
        <label htmlFor="lastName">Last Name:</label>
        <input type="text" {...register("lastName", { required: true, maxLength: 20, pattern: /^[A-Za-z]+$/i })} />
        {errors?.lastName?.type === "required" && <p>This field is required</p>}
        {errors?.lastName?.type === "maxLength" && (
          <p>Last name cannot exceed 20 characters</p>
        )}
        {errors?.lastName?.type === "pattern" && (
          <p>Alphabetical characters only</p>
        )}
        <label htmlFor="firstName">First Name:</label>
        <input type="text" {...register("firstName", { required: true, maxLength: 20, pattern: /^[A-Za-z]+$/i })} />
        {errors?.firstName?.type === "required" && <p>This field is required</p>}
        {errors?.firstName?.type === "maxLength" && (
          <p>First name cannot exceed 20 characters</p>
        )}
        {errors?.firstName?.type === "pattern" && (
          <p>Alphabetical characters only</p>
        )}
        <label htmlFor="status">Status:</label>
        <input type="text"{...register("status", { required: true, maxLength: 10, pattern: /^[A-Za-z]+$/i })} />
        {errors?.status?.type === "required" && <p>This field is required</p>}
        {errors?.status?.type === "maxLength" && (
          <p>Status field cannot exceed 10 characters</p>
        )}
        {errors?.status?.type === "pattern" && (
          <p>Alphabetical characters only</p>
        )}
        <label htmlFor="created">Created at:</label>
        <input type="date"{...register("created_at", { required: true, maxLength: 10 })} />
        <label htmlFor="updated">Updated at:</label>
        <input type="date"{...register("updated_at", { required: true, maxLength:10 })} />
        <input type="submit" />
      </form>
    </div>
    </div>
  );
}
export default Edit;