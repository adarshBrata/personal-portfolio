import hat from "/hat.png";
import {motion} from "framer-motion";
import {useMediaQuery} from "../util/useMediaQuery";
import {useState} from "react";

export const NavBar = () => {
    const matches = useMediaQuery('(min-width: 960px)')
    const [toggle, setToggle] = useState(false)
    function downloadResume() {

    }

    return (
        <nav className='relative top-0 max-w-[1440px] flex flex-1 items-center justify-between pt-12 pb-4 font-medium mx-8 md:mx-16 lg:mx-32'>
            <div>
                <motion.img animate={{ height: 60, opacity: 1 }}
                     initial={{ height: 20, opacity: 0 }}
                     transition={{ delay: 0.2, duration: 0.75 }}
                     src={hat} alt="hat"/>
            </div>
            <div className='flex px-2 text-3xl whitespace-nowrap'>
                Adarsh {matches && <div className='px-2' >
                Brata
                <span className='px-2 font-bold bg-gradient-to-r from-amber-500 to-amber-300 bg-clip-text text-transparent'>
                    Pal.
                </span>
            </div>}
            </div>

            {matches &&
                <div className="space-x-1.5 text-xl">
                    <a className='mx-2' href='/contact'>
                        Contact
                    </a>
                    <a className='mx-2 bg-gradient-to-r from-amber-500 to-amber-300 bg-clip-text text-transparent'
                       href='/blog'>
                        Blog
                    </a>
                    <button className='mx-2 px-2 py-1' onClick={()=> downloadResume()}>
                        Resume
                    </button>
                </div>
            }
            {toggle && (
                <motion.div
                    animate="visible"
                    initial="hidden"
                    transition={{ duration: 0.2 }}
                    className="fixed left-0 top-0  z-10 flex h-screen
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