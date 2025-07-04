import { motion } from "framer-motion";

export const AboutMe = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={'mx-2 font-medium px-6 md:px-16 lg:px-32'}
        >
            <motion.div 
                variants={itemVariants}
                className='text-2xl m-2 bg-gradient-to-r from-amber-400 via-amber-500 to-rose-500 bg-clip-text text-transparent font-bold'
            >
                {'< about >'}
            </motion.div>
            
            <motion.div 
                variants={containerVariants}
                className='w-4/5 pl-2 ml-4 text-md font-light tracking-wide leading-6 space-y-6 text-zinc-300'
            >
                <motion.p variants={textVariants} className="leading-relaxed">
                    I'm a passionate Full Stack Developer based in Bengaluru, India with expertise in
                    <motion.span 
                        className={'bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent font-semibold'}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                    > React, </motion.span>
                    <motion.span 
                        className={'bg-gradient-to-tr from-rose-500 to-rose-300 bg-clip-text text-transparent font-semibold'}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                    >Angular, </motion.span>
                    <motion.span 
                        className={'bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent font-semibold'}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                    >Node.js </motion.span> and
                    <motion.span 
                        className={'bg-gradient-to-br from-blue-500 to-yellow-500 bg-clip-text text-transparent font-semibold'}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                    > Python </motion.span>
                    for full-stack development.
                </motion.p>
                
                <motion.p variants={textVariants} className="leading-relaxed">
                    I excel in both large and small scale agile projects, delivering robust solutions within tight deadlines.
                </motion.p>
                
                <motion.p variants={textVariants} className="leading-relaxed">
                    What sets me apart is my eagerness to learn and adapt.
                    Looking ahead, I'm excited about contributing my skills to future projects,
                    pushing the boundaries of technology, and creating impactful solutions.
                </motion.p>
            </motion.div>
            
            <motion.div 
                variants={itemVariants}
                className='text-2xl mt-6 m-2 bg-gradient-to-r from-amber-400 via-amber-500 to-rose-500 bg-clip-text text-transparent font-bold'
            >
                {'</ about >'}
            </motion.div>
        </motion.div>
    );
};