import react from "../icons/react.svg";

export const AboutMe = () => {
    return (
        <div className={'mx-2 font-medium px-6 md:px-16 lg:px-32'}>
            <div className='text-2xl m-2 bg-gradient-to-r from-amber-300 to-rose-600 bg-clip-text text-transparent'>
                {'< about >'}
            </div>
            <div className='w-4/5 pl-2 ml-4 text-md font-light tracking-wide leading-5 space-y-4 text-slate-300'>
	            <p>
		            I'm a passionate Full Stack Developer based in Bengaluru, India with expertise in
		            <span className={'bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent'}> React, </span>
		            <span className={'bg-gradient-to-tr from-rose-700 to-rose-300 bg-clip-text text-transparent'}>Angular, </span>
		            <span className={'bg-gradient-to-r from-green-500 to-emerald-700 bg-clip-text text-transparent'}>Node.js </span> and
		            <span className={'bg-gradient-to-br from-sky-700 to-yellow-500 bg-clip-text text-transparent'}> Python </span>
		            for backend development.
	            </p>
	            <p>
		            I excel in both large and small agile projects, delivering robust solutions within tight deadlines.
	            </p>
	            <p>
		            What sets me apart is my eagerness to learn and adapt.
		            Looking ahead, I'm excited about contributing my skills to future projects,
		            pushing the boundaries of technology, and creating impactful solutions.
	            </p>
            </div>
            <div className='text-2xl mt-4 m-2 bg-gradient-to-r from-amber-300 to-rose-600 bg-clip-text text-transparent'>
                {'</ about >'}
            </div>
        </div>
    );
};
