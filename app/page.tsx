'use client'

import React, { useState } from 'react'
import Heading from '@/components/shared/heading'
import TaskForm from '@/components/shared/taskForm'
import Tasks from '@/components/shared/Tasks'


const App = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false)
  const [taskList, setTaskList] = useState<string[] | null>([])
  return (
    <>
      <section className='w-screen h-screen flex items-center justify-center py-10 dark'>
        <div className='flex flex-col items-center justify-start gap-2 w-[650px] h-full  py-10 px-5 rounded-lg shadow-lg shadow-primary/20 bg-white dark:bg-primary/10 dark:shadow-primary/20'>
          <Heading changeDarkMode={setDarkMode} darkMode={darkMode} />
          <TaskForm setTaskList={setTaskList} taskList={taskList} />
          <Tasks
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </div>
      </section>
    </>
  )
}

export default App