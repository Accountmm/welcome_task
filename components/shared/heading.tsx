import React, { FC } from 'react'
import { Button } from '../ui/button'
import { Moon, SunMedium } from 'lucide-react'
interface IProps {
  darkMode?: boolean
  changeDarkMode(darkMode: boolean): void
}
const heading: FC<IProps> = ({ changeDarkMode, darkMode }) => {
  function setDarkMode() {
    if (!darkMode) {
      document.body.classList.add('dark')
      changeDarkMode(true)
    } else if (darkMode) {
      document.body.classList.remove('dark')
      changeDarkMode(false)
    }
  }
  return (
    <div className='flex items-center justify-between w-full'>
      <h1 className='font-medium text-2xl text-primary'>Список задач</h1>
      <Button
        onClick={() => {
          setDarkMode()
        }}
        variant={'ghost'} className='flex justify-center items-center py-1 px-2 text-[17px]'
      >
        Сменит тему
        {darkMode ? (
          <Moon size={25} />
        )
          : (
            <SunMedium size={25} />
          )}
      </Button>
    </div>
  )
}

export default heading