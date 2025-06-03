import React from 'react'
import useTheme from '../contexts/theme'

const ThemeBtn = () => {
    const { themeMode, lightTheme, darkTheme } = useTheme()
    const onChangeBtn = (e) =>  {
        const darkModeStatus = e.currentTarget.checked
        if(darkModeStatus){
            darkTheme()
        } else{
            lightTheme()
        }
    }
  return (
    <>
    <input type="checkbox"  checked={themeMode === "dark"}
            onChange={onChangeBtn}/>
    {/* <label className='flex cursor-pointer select-none items-center'>
        <div className='relative'>
          <input
            type='checkbox'
            checked={themeMode === "dark"}
            onChange={onChangeBtn}
            className='sr-only'
          />
          <div className='block h-8 w-14 rounded-full bg-[#E5E7EB]'></div>
          <div className='dot absolute left-1 top-1 h-6 w-6 rounded-full bg-white transition'></div>
        </div>
      </label> */}
    </>
  )
}

export default ThemeBtn