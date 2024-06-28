import {React, Suspense} from 'react'
import {skills, experiences} from '../constants';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {CTA, CanvasLoader} from '../components';
import { BallCanvas } from '../models';


const About = () => {
  return (
    <Suspense fallback={<CanvasLoader />}>
    <section className=' bg-blue-100'>
      
      <section className = " max-container">
        <h1 className = "head-text">
          Hey! I'm <span className = "green-gradient_text font-semibold drop-shadow"> Esequiel</span>,
          but people call me <span className = "green-gradient_text font-semibold drop-shadow"> Zeke</span>👋
        </h1>

        <div className = "mt-5 flex flex-col gap-3 text-slate-700">
          <p>
          As an aspiring software engineer, I have a strong programming foundation and hands-on experience from various projects. I'm seeking a software engineering internship to enhance my skills, collaborate with talented teams, and contribute to exciting projects.
          </p>
        </div>
        <div className = "py-10 flex flex-col ">
          <h3 className = "subhead-text">Skills:</h3>

          <div 
            className='flex flex-row flex-wrap justify-center gap-12'
            style={{ marginTop: '12px '}}
          >
            {skills.map((skill) => (
              <div className='w-28 h-28' key={skill.name}>
                <BallCanvas 
                  icon={skill.imageUrl} 
                  scale={2.5}
                />
              </div>
            ))}
          </div>

        </div>

        <div className = 'py-16'>
          <h3 className='subhead-text'>
            Work Experience.
          </h3>
            <div className = "mt-5 flex flex-col gap-3 text-slate-700">
              <p>
              I've undertaken diverse roles, enhancing my skill set and collaborating with colleagues. Here's an overview of my professional experience:
              </p>
            </div>

          <div className='mt-12 flex'>
            <VerticalTimeline>
              {experiences.map((experience) => (
                <VerticalTimelineElement
                  key={experience.company_name}
                  date={experience.date}
                  icon={<div className='flex justify-center items-center w-full h-full'>
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className='w-[60%] h-[60%] object-contain'
                    />

                  </div>}
                  iconStyle={{ background: experience.iconBg}}
                  contentStyle={{
                    borderBottom: '8px',
                    borderStyle: 'solid',
                    borderBottomColor: 'experience.iconBg',
                    boxShadow: 'none'
                  }}
                >
                  <div>
                    <h3 className='text-black text-xl font-poppins font-semibold'>
                      {experience.title}
                    </h3>
                    <p className='text-black font-medium font-base' stye={{margin:0}}>
                      {experience.company_name}
                    </p>
                  </div>

                  <ul className='my-5 list-disc ml-5 space-y-2'>
                    {experience.points.map((point, index) => (
                      <li key={'experience-point-${index}'}className='text-black-500/50 font-normal pl-1 text-sm'>
                        {point}
                      </li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>

          </div>

        </div>
        <hr className='border-gray-950' />

        <CTA/>
      </section>

    </section>
    </Suspense>
  )
}

export default About