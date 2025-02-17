import { Button } from '@headlessui/react';
import { motion } from 'framer-motion';
import { slideIn } from '../utils/motion';

export default function ThemeOption({ switchTheme }) {
  return (
    <>
      <motion.div variants={slideIn('left', 'tween', 1.6, 0.5)} initial="hidden" animate="show" className="flex gap-x-6 z-40 items-center justify-center mt-10">
        <Button style={{ backgroundColor: 'var(--bgColor)' }} onClick={() => switchTheme('light')} className="light  text-md rounded-md border border-solid border-[hsl(0,0%,87%)] w-8 h-8 cursor-pointer "></Button>
        <Button style={{ backgroundColor: 'var(--bgColor)' }} onClick={() => switchTheme('dark')} className="dark text-md  rounded-md border border-solid border-[hsl(0,0%,87%)] w-8 h-8 cursor-pointer "></Button>
        <Button style={{ backgroundColor: 'var(--bgColor)' }} onClick={() => switchTheme('blue')} className="blue text-md rounded-md border border-solid border-[hsl(0,0%,87%)] w-8 h-8 cursor-pointer "></Button>
        <Button style={{ backgroundColor: 'var(--bgColor)' }} onClick={() => switchTheme('green')} className="green text-md rounded-md border border-solid border-[hsl(0,0%,87%)] w-8 h-8 cursor-pointer "></Button>
        <Button style={{ backgroundColor: 'var(--bgColor)' }} onClick={() => switchTheme('brown')} className="brown text-md rounded-md border border-solid border-[hsl(0,0%,87%)] w-8 h-8 cursor-pointer "></Button>
        <Button style={{ backgroundColor: 'var(--bgColor)' }} onClick={() => switchTheme('pink')} className="pink text-md rounded-md border border-solid border-[hsl(0,0%,87%)] w-8 h-8 cursor-pointer "></Button>
      </motion.div>
    </>
  );
}
