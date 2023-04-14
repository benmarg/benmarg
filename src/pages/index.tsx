import { type NextPage } from "next";
import Head from "next/head";
import localFont from '@next/font/local';
import { useRef, useState } from "react";
import { IntersectObserv } from "../components/IntersectObs";


const myFont = localFont({ src: '../../public/FuturaLight.ttf' });

//todo:
// each div gets a ref
// on scroll, check if the ref is in the viewport
// if it is, add the class to the div
// if it isn't, remove the class from the div



const Home: NextPage = () => {


  const project1 = useRef<HTMLDivElement>(null);
  const project2 = useRef<HTMLDivElement>(null);

  const { fadeCSS: fadeCSS1, innerFadeCSS: innerFadeCSS1, visible } = IntersectObserv(project1);
  const { fadeCSS: fadeCSS2, innerFadeCSS: innerFadeCSS2 } = IntersectObserv(project2);
  
  console.log(visible);
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="snap-y snap-proximity">
        <div className="flex justify-end gap-4 pr-10">
          <div className='h-8 w-8 bg-black inline-block rounded-[50%] mt-8'></div>
          <div className='h-8 w-8 bg-black inline-block rounded-[50%] mt-8'></div>
          <div className='h-8 w-8 bg-black inline-block rounded-[50%] mt-8'></div>
        </div>
        <div className='w-full h-full'>
          <h2 className='text-[18rem] font-medium leading-none ml-5 mt-60 tracking-[0.01em]'>Benjamin</h2>
          <h2 className='text-[18rem] font-medium leading-none ml-5 mt-2 tracking-[0.001em]'>Margoli<p className="inline pl-[0.21rem]">u</p>s</h2>
        </div>

        <div className="h-[200vh] flex">
          <div>
            <div ref={project1} className="h-screen mt-32 w-fit flex justify-between items-start sticky top-0 flex-col pl-12 text-2xl text-offGrey">
              <div className="flex flex-col items-start">
                <h2 className={`mt-12 text-4xl ${fadeCSS1}`}><div className={innerFadeCSS1}>01</div></h2>
                <h3 className={`mt-32 ml-8 text-8xl -indent-1 ${fadeCSS1}`}><div className={innerFadeCSS1} >Reactime</div></h3>
                <h3 className={`mt-16 ml-8 ${fadeCSS1}`}><div className={innerFadeCSS1}>Full Stack Developer</div></h3>
                <span className={`mt-4 ml-8 text-4xl ${myFont.className} ${fadeCSS1}`}><div className={innerFadeCSS1}>React time-travel 
                debugger, that allows developers <br/> to jump through time in their React application</div></span>
              </div>
                <h3 className={`mb-12 font-medium ${fadeCSS1}`}><div className={innerFadeCSS1}>Chrome Extension + Website</div></h3>
            </div>
          </div>
          <div className="">
            <img src="/test/macbook.svg" className="h-[30vh] mt-[100vh] ml-8" alt="laptop" />
          </div>

        </div>

        {/* //TODO: Figure out how position stickey works */}
       <div className="h-[200vh] mt-[-100vh]">
          <div ref={project2} className="h-screen w-fit flex justify-between items-start flex-col pl-12 text-2xl text-offGrey sticky top-0">
            <div className="flex flex-col items-start">
              <h2 className={`mt-12 text-4xl ${fadeCSS2}`}><div className={innerFadeCSS2}>02</div></h2>
              <h3 className={`mt-28 ml-8 text-8xl pb-4 -indent-1 ${fadeCSS2}`}><div className={innerFadeCSS2} >Visapply</div></h3>
              <h3 className={`mt-16 ml-8 ${fadeCSS2}`}><div className={innerFadeCSS2}>Full Stack Developer</div></h3>
              <div className={`mt-4 ml-8 text-4xl ${myFont.className} ${fadeCSS2}`}><div className={innerFadeCSS2}>React time-travel 
              debugger, that allows developers <br/> to jump through time in their React application</div></div>
            </div>
              <h3 className={`mb-12 font-medium ${fadeCSS2}`}><div className={innerFadeCSS2}>Website</div></h3>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
