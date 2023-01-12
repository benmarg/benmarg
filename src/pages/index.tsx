import { type NextPage } from "next";
import Head from "next/head";
import localFont from '@next/font/local';
import { useEffect, useRef, useState } from "react";
import { after } from "node:test";

const myFont = localFont({ src: '../../public/FuturaLight.ttf' });

//todo:
// each div gets a ref
// on scroll, check if the ref is in the viewport
// if it is, add the class to the div
// if it isn't, remove the class from the div



const Home: NextPage = () => {

  const [visible, setVisible] = useState(false);

  const ele = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ref = ele.current;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      })
    }, { threshold: .95, rootMargin: "0px" })

    if (ref) {
      observer.observe(ref)
    }

    return () => {
      if (ref) {
        observer.unobserve(ref)
      }
    }
  }, [])

  console.log(visible);
  
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <div className="flex justify-end gap-4 pr-10">
          <div className='h-8 w-8 bg-black inline-block rounded-[50%] mt-8'></div>
          <div className='h-8 w-8 bg-black inline-block rounded-[50%] mt-8'></div>
          <div className='h-8 w-8 bg-black inline-block rounded-[50%] mt-8'></div>
        </div>
        <div className='w-full h-full'>
          <h2 className='text-[18rem] font-medium leading-none ml-5 mt-60 tracking-[0.01em]'>Benjamin</h2>
          <h2 className='text-[18rem] font-medium leading-none ml-5 mt-2 tracking-[0.001em]'>Margoli<p className="inline pl-[0.21rem]">u</p>s</h2>
        </div>

        <div ref={ele} className="h-screen mt-32 w-fit flex justify-between items-start flex-col pl-12 text-2xl text-offGrey">
          <div className="flex flex-col items-start">
          
            <h2 className={`mt-12 text-4xl after:content-[""] relative after:absolute after:inset-0 after:bg-black after:transition ${!visible ? "after:animate-[redacted_1s_cubic-bezier(0.19,1,0.22,1)_forwards]":"after:animate-[redactedReverse_1s_cubic-bezier(0.19,1,0.22,1)_forwards]"}`}>01</h2>
            <h3 className="mt-32 ml-8 text-8xl -indent-1 ">Reactime</h3>
            <h3 className="mt-16 ml-8">Full Stack Developer</h3>
            <p className={`mt-4 ml-8 text-4xl ${myFont.className}`}>React time-travel debugger, that allows developers <br/> to jump through time in their React application</p>
          </div>
            <h3 className="mb-12 font-medium">Chrome Extension + Website</h3>
        </div>

        <div className="h-screen mt-32 w-fit flex justify-between items-start flex-col pl-12 text-2xl text-offGrey">
          <div className="flex flex-col items-start">
            
            <h2 className="mt-12 text-4xl">02</h2>
            <h3 className="mt-32 ml-8 text-8xl -indent-1">Visapply</h3>
            <h3 className="mt-16 ml-10">Full Stack Developer</h3>
            <p className={`mt-4 ml-10 text-4xl ${myFont.className}`}>A website that allows users to track their job search<br/>and visualize their progress using Sankey diagrams </p>
          </div>
            <h3 className="mb-12 font-medium">Chrome Extension + Website</h3>
        </div>
      </main>
    </>
  );
};

export default Home;