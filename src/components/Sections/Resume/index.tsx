import axios from 'axios';
import {FC, memo, useEffect,useState} from 'react';

import {education, experience, SectionId, skills} from '../../../data/data';
import Section from '../../Layout/Section';
import ResumeSection from './ResumeSection';
import {SkillGroup} from './Skills';
import TimelineItem from './TimelineItem';

const Resume: FC = memo(() => {
  const [educationState,setEducation] = useState([]);
  const [workExpState, setWorkExp] = useState([]);
  const fetchData = async() =>{
    const educationData = await axios.post("https://bzi6vjair2.execute-api.us-east-1.amazonaws.com/v1/educationhistory");
    setEducation(educationData['data']['Items']);

    console.log(educationState);
  }
  // fetchData();
  useEffect(()=>{
    
    // fetchData();
  }, []);
  return (
    <Section className="bg-neutral-100" sectionId={SectionId.Resume}>
      <div className="flex flex-col divide-y-2 divide-neutral-300">
        <ResumeSection title="Education">
          {education.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>
        <ResumeSection title="Work">
          {experience.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>
        <ResumeSection title="Skills">
          <p className="pb-8">Here you can show a snapshot of your skills to show off to employers</p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {skills.map((skillgroup, index) => (
              <SkillGroup key={`${skillgroup.name}-${index}`} skillGroup={skillgroup} />
            ))}
          </div>
        </ResumeSection>
      </div>
    </Section>
  );
});

Resume.displayName = 'Resume';
export default Resume;
