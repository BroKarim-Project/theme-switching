import ThemeOption from './theme-option';
import Theme from '../context/theme';
import { motion } from 'framer-motion';
import { staggerContainer, textVariant } from '../utils/motion';
import Line from '../assets/line.json';
import Lottie from 'lottie-react';

export default function HeroBanner() {
  const { setThemeMode } = Theme();

  const switchTheme = (theme) => {
    setThemeMode(theme);
  };
  return (
    <>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              background:
                'linear-gradient(to top right, var(--gtColor1), var(--gtColor2))'
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg]   sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="mx-auto max-w-4xl pt-32 "
        >
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <motion.div
              variants={textVariant(1.1)}
              className="relative text-textColor  rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
            >
              Source code available in{' '}
              <a href="#" className="font-semibold text-textColor2">
                <span aria-hidden="true" className="absolute inset-0" />
                github . <span aria-hidden="true">&rarr;</span>
              </a>
            </motion.div>
          </div>
          <div className="text-center relative">
            <motion.div
              variants={textVariant(1.6)}
              className="absolute left-6 top-10 w-[200px] h-[40px] "
            >
              <Lottie
                animationData={Line}
                loop={true}
                style={{ width: '100%', height: '100%', color: '#fff' }}
              />
            </motion.div>
            <motion.h1
              variants={textVariant(1.2)}
              className="text-4xl font-bold tracking-tight text-textColor sm:text-6xl"
            >
              Theme Switching Made Easy: A ReactJS and Tailwind CSS Guide
            </motion.h1>
            <motion.p
              variants={textVariant(1.3)}
              className="mt-6 text-lg leading-8 text-textColor opacity-50"
            >
              Master the art of creating dynamic and customizable user
              interfaces with this comprehensive guide to theme switching using
              ReactJS and Tailwind CSS.
            </motion.p>
            <ThemeOption switchTheme={switchTheme} />
          </div>
        </motion.div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              background:
                'linear-gradient(to top right, var(--gtColor1), var(--gtColor2))'
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-gtColor1 to-gtColor2  sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </>
  );
}
