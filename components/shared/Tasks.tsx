import { Trash } from 'lucide-react'
import React, { FC } from 'react'
import { Button } from '../ui/button'
interface TasksProps {
  taskList: string[] | null
  setTaskList(taskList: string[] | null): void
}
const Tasks: FC<TasksProps> = ({ setTaskList, taskList }) => {
  const handleDelete = (index: number) => {
    if (taskList !== null) {
      const newTaskList = [...taskList]
      newTaskList.splice(index, 1)
      setTaskList(newTaskList)
    }
  }
  return (
    <>
      <div className='w-full h-full flex flex-col items-center justify-start gap-2 scroll-auto overflow-y'>
        {taskList !== null && taskList.length > 0 ?
          taskList.map((text, index) => (
            <div key={index} className='flex items-center justify-between w-full px-4'>
              <p className='text-primary text-sm font-semibold'>{text}</p>
              <Button onClick={() => handleDelete(index)} variant='ghost' className='text-primary hover:bg-red-500 hover:text-white'>
                <Trash size={15} />
              </Button>
            </div>
          ))
          : (
            <></>
          )}
      </div >
    </>
  )
}

export default Tasks