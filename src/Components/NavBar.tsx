import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "../util/useMediaQuery";
import { useState } from "react";

export const NavBar = () => {
    const matches = useMediaQuery('(min-width: 768px)')
    const [toggle, setToggle] = useState(false)
    
    function downloadResume() {
        setToggle((prev) => !prev)
    }

    const navVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const logoVariants = {
        hidden: { opacity: 0, scale: 0 },
        visible: { 
            opacity: 1, 
            scale: 1, 
            transition: {
                duration: 0.6,
                ease: "backOut",
                delay: 0.2
            }
        }
    };

    const titleVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { 
            opacity: 1, 
            x: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                delay: 0.3
            }
        }
    };

    const menuVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: { 
            opacity: 1, 
            x: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                delay: 0.4
            }
        }
    };

    const mobileMenuVariants = {
        hidden: { 
            opacity: 0,
            scale: 0.9
        },
        visible: { 
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        },
        exit: {
            opacity: 0,
            scale: 0.9,
            transition: {
                duration: 0.2,
                ease: "easeIn"
            }
        }
    };

    const menuItemVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: (i: number) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.4,
                ease: "easeOut"
            }
        }),
        exit: { 
            opacity: 0, 
            x: -50,
            transition: {
                duration: 0.2,
                ease: "easeIn"
            }
        }
    };

    return (
        <motion.nav 
            variants={navVariants}
            initial="hidden"
            animate="visible"
            className='absolute drop-shadow-lg backdrop-blur-md bg-zinc-900/80 border-b border-zinc-700/50 h-[150px] w-full top-0 flex items-center justify-between py-0 font-medium px-6 md:px-16 lg:px-32 z-50'
        >
            <motion.div variants={logoVariants}>
                <motion.img 
                    whileHover={{ 
                        scale: 1.05,
                        transition: { duration: 0.2 }
                    }}
                    className='h-[60px] drop-shadow-lg'
                    src={'/hat.png'} 
                    alt="hat"
                />
            </motion.div>
            
            <motion.a 
                variants={titleVariants}
                className='decoration-0' 
                href='/'
                whileHover={{ scale: 1.01 }}
            >
                <div className='flex px-2 text-3xl whitespace-nowrap'>
                    <motion.span
                        className={matches ? 'text-zinc-100' : 'bg-gradient-to-r from-amber-500 to-amber-300 bg-clip-text text-transparent font-bold'}
                        whileHover={{ 
                            color: "#fbbf24",
                            transition: { duration: 0.2 }
                        }}
                    >
                        Adarsh
                    </motion.span>
                    {matches && (
                        <div className='px-2'>
                            <motion.span
                                whileHover={{ 
                                    color: "#fbbf24",
                                    transition: { duration: 0.2 }
                                }}
                            >
                                Brata
                            </motion.span>
                            <motion.span
                                className='px-2 font-bold bg-gradient-to-r from-amber-500 to-amber-300 bg-clip-text text-transparent'
                            >
                                Pal.
                            </motion.span>
                        </div>
                    )}
                </div>
            </motion.a>
            
            {matches && (
                <motion.div 
                    variants={menuVariants}
                    className="flex items-center space-x-4 text-lg ml-auto"
                >
                    <motion.a 
                        className='relative'
                        href='/contact'
                        whileHover={{ 
                            scale: 1.02,
                            color: "#fbbf24"
                        }}
                    >
                        Contact
                    </motion.a>
                    <motion.a 
                        className='bg-gradient-to-r from-amber-500 to-amber-300 bg-clip-text text-transparent relative'
                        href='/blog'
                        whileHover={{ scale: 1.02 }}
                    >
                        Blog
                    </motion.a>
                    <motion.button 
                        className='px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-300 text-white rounded-full font-semibold shadow-lg text-sm'
                        whileHover={{ 
                            scale: 1.02,
                            boxShadow: "0 8px 20px rgba(245, 158, 11, 0.25)"
                        }}
                    >
                        <a href={'/AdarshBrataPal.pdf'} download={'Adarsh-Resume'} target={'_blank'}>
                            Resume
                        </a>
                    </motion.button>
                </motion.div>
            )}
            
            <AnimatePresence>
                {toggle && (
                    <motion.div
                        variants={mobileMenuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="fixed left-0 top-0 z-40 flex h-screen w-full flex-col items-start justify-center gap-8 bg-zinc-900/95 backdrop-blur-lg text-2xl font-bold pl-16"
                    >
                        <div className="flex flex-col space-y-6 text-2xl">
                            <motion.a 
                                custom={0}
                                variants={menuItemVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                href='/contact'
                                className="relative text-zinc-100"
                                whileHover={{ 
                                    scale: 1.05,
                                    color: "#fbbf24"
                                }}
                                onClick={() => setToggle(false)}
                            >
                                Contact
                            </motion.a>
                            <motion.a 
                                custom={1}
                                variants={menuItemVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                href='/blog'
                                className='bg-gradient-to-r from-amber-500 to-amber-300 bg-clip-text text-transparent'
                                whileHover={{ scale: 1.05 }}
                                onClick={() => setToggle(false)}
                            >
                                Blog
                            </motion.a>
                            <motion.button 
                                custom={2}
                                variants={menuItemVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                onClick={() => downloadResume()}
                                whileHover={{ scale: 1.05 }}
                                className="bg-gradient-to-r from-amber-500 to-amber-300 text-white px-6 py-3 rounded-full font-semibold text-left"
                            >
                                <a href={'/AdarshBrataPal.pdf'} download={'Adarsh-Resume'} target={'_blank'}>
                                    Resume
                                </a>
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {!matches && (
                <motion.div 
                    onClick={() => setToggle(prev => !prev)}
                    className='flex flex-col space-y-1.5 cursor-pointer z-50 p-2'
                    whileHover={{ scale: 1.05 }}
                >
                    <motion.span
                        animate={{ 
                            rotateZ: toggle ? 45 : 0, 
                            y: toggle ? 8 : 0,
                            backgroundColor: toggle ? "#fbbf24" : "#d4d4d8"
                        }}
                        transition={{ duration: 0.3 }}
                        className='block h-0.5 w-8 bg-zinc-300 rounded-full'
                    />
                    <motion.span
                        animate={{ 
                            width: toggle ? 0 : 24,
                            opacity: toggle ? 0 : 1
                        }}
                        transition={{ duration: 0.3 }}
                        className='block h-0.5 w-6 bg-gradient-to-r from-amber-500 to-amber-300 rounded-full'
                    />
                    <motion.span
                        animate={{
                            rotateZ: toggle ? -45 : 0,
                            y: toggle ? -8 : 0,
                            width: toggle ? 32 : 16,
                            backgroundColor: toggle ? "#fbbf24" : "#d4d4d8"
                        }}
                        transition={{ duration: 0.3 }}
                        className='block h-0.5 w-4 bg-zinc-300 rounded-full'
                    />
                </motion.div>
            )}
        </motion.nav>
    )
}