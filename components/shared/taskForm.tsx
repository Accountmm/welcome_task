import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Plus } from 'lucide-react'

interface IProps {
  taskList: string[] | null
  setTaskList: (arr: string[]) => void
}

const TaskForm: React.FC<IProps> = ({ setTaskList, taskList }) => {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const text = (e.currentTarget[0] as HTMLInputElement).value
    setTaskList([...(taskList || []), text])
  }
  return (
    <>
      <form onSubmit={handleSubmit} className='flex items-center  mt-4 mb-6  w-full gap-4' >
        <Input placeholder='Ведите задачу' />
        <Button variant={'default'} className='flex justify-center items-center py-1 px-2 text-[17px] '>
          Добавить задачу
          <Plus size={20} />
        </Button>
      </form>
    </>
  )
}

export default TaskForm