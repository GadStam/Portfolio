"use client";
import React,{useTransition, useState} from 'react'
import Image from 'next/image'
import TabButton from './TabButton';

const TAB_DATA =[
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='list-disc pl-2'>
                <li>HTML5</li>
                <li>CSS3 / SASS</li>
                <li>Javasript</li>
                <li>React JS</li>
                <li>Next JS</li>
                <li>C++</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className='list-disc pl-2'>
                <li>Nacional Technology University</li>
                <li>ORT Argentina</li>
            </ul>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className='list-disc pl-2'>
                <li>Data Sciense for begginers</li>
                <li>Phyton from IBM</li>
            </ul>
        )
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChanche =(id)=>{
        startTransition(()=>{
            setTab(id)
        });
    }
  return (
    <section className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image src='/images/about-image.png' width={500} height={500} alt='About image' />
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                <p className='text-base lg:text-lg'>
                I am a passionate systems engineering student, a lover of programming and the digital world. I am excited about developing applications and websites, but I also find data analysis and project management fascinating. I enjoy working in teams, learning from different perspectives, and tackling challenges. My meticulous focus and communication skills allow me to translate complex data into strategic actions. My goal is to apply my analytical and leadership skills to advance in my career and contribute to meaningful projects that impact the digital space. Open to explore different opportunities, always ready to learn and overcome new challenges! 
                </p>
                <div className='flex flex-row justify-start mt-8'>
                    <TabButton selectTab={()=> handleTabChanche("skills")} active={tab==="skills"}> Skills </TabButton>
                    <TabButton selectTab={()=> handleTabChanche("education")} active={tab==="education"}> Education </TabButton>
                    <TabButton selectTab={()=> handleTabChanche("certifications")} active={tab==="certifications"}> Certifications </TabButton>
                    
                </div>
                <div className='mt-8'>
                    {TAB_DATA.find((t)=>t.id===tab).content}
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection