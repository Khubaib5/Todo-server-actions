import React from 'react'
import Form from '../ui/Form'
import Input from '../ui/Input'
import Button from '../ui/Button'
import { create } from '@/app/actions/todoAction'

const AddTodo = () => {
  return (
     <>
   <Form action={create} className="w-full max-w-md mx-auto">
  <div className="flex flex-col sm:flex-row items-center gap-4">
    <Input
      name="input"
      type="text"
      placeholder="Add Todo..."
    />
    <Button type="submit" text="Add"  />
  </div>
</Form>



     </>    
  )
}

export default AddTodo