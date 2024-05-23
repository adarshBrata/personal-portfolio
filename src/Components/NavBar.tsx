import {motion} from "framer-motion";
import {useMediaQuery} from "../util/useMediaQuery";
import {useState} from "react";

export const NavBar = () => {
    const matches = useMediaQuery('(min-width: 768px)')
    const [toggle, setToggle] = useState(false)
    function downloadResume() {

    }

    return (
        <nav className='absolute drop-shadow-md backdrop-blur-sm h-[150px] w-full top-0 flex items-center justify-between py-0 font-medium px-6 md:px-16 lg:px-32'>
            <div>
                <motion.img animate={{ opacity: 1 }}
                     initial={{ opacity: 0 }}
                            className='h-[60px]'
                     src={'/hat.png'} alt="hat"/>
            </div>
            <a className='decoration-0' href='/'>
                <div className='flex px-2 text-3xl whitespace-nowrap'>
                    Adarsh {matches &&
                    <div className='px-2'>
                      Brata
                      <span
                        className='px-2 font-bold bg-gradient-to-r from-amber-500 to-amber-300 bg-clip-text text-transparent'>
                        Pal.
                      </span>
                    </div>
                }
                </div>
            </a>
            {matches &&
                <div className="space-x-1.5 text-xl ml-auto">
                    <a className='mx-2' href='/contact'>
                        Contact
                    </a>
                    <a className='mx-2 bg-gradient-to-r from-amber-500 to-amber-300 bg-clip-text text-transparent'
                       href='/blog'>
                        Blog
                    </a>
                    <button className='mx-2 px-2 py-1'>
                      <a href={'../../public/AdarshBrataPal.pdf'} download={'Adarsh-Resume'} target={'_blank'}>Resume</a>
                    </button>
                </div>
            }
            {toggle && (
                <motion.div
                    animate="visible"
                    initial="hidden"
                    transition={{ duration: 0.2 }}
                    className="fixed left-0 top-0  z-100 flex h-screen
                        w-full flex-col items-center  justify-center  gap-24 bg-zinc-900 text-2xl font-bold"
                >
                    <div className="flex flex-col space-y-2 text-3xl ">
                        <motion.a animate={{x:0}}
                                  initial={{x:-1000}}
                                  exit={{x:-500}}
                                  href='/contact'>
                            Contact
                        </motion.a>
                        <motion.a animate={{x:0}}
                                  initial={{x:-1000}}
                                  transition={{delay: 0.3}}
                                  exit={{x:-500}}
                                  href='/blog'
                                  className='bg-gradient-to-r from-amber-500 to-amber-300 bg-clip-text text-transparent'  >
                            Blog
                        </motion.a>
                        <motion.button animate={{x:0}}
                                       initial={{x:-1000}}
                                       transition={{delay: 0.6}}
                                       exit={{x:-500}}
                                       onClick={()=> downloadResume()}>
                            Resume
                        </motion.button>
                    </div>
                </motion.div>
            )}

            {!matches && (
                <div onClick={()=> setToggle(prev => !prev)}
                     className='flex flex-col space-y-1.5 cursor-pointer z-20'
                >
                    <motion.span
                        animate={{ rotateZ: toggle ? 45 : 0, y: toggle ? 8 : 0 }}
                        className='block h-0.5 w-8 bg-zinc-300'>
                    </motion.span>
                    <motion.span
                        animate={{ width: toggle ? 0 : 24 }}
                        className='block h-0.5 w-6 bg-gradient-to-r from-amber-500 to-amber-300'>
                    </motion.span>
                    <motion.span
                        animate={{
                            rotateZ: toggle ? -45 : 0,
                            y: toggle ? -8 : 0,
                            width: toggle ? 32 : 16,
                        }}
                        className='block h-0.5 w-4 bg-zinc-300'>
                    </motion.span>
                </div>
            )}
        </nav>
    )
}