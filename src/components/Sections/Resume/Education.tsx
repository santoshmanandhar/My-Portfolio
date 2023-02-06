import {FC, memo} from 'react';

import {TimelineItem} from '../../../data/dataDef';

const Education: any = ((props) => {
  const {courseName, yearOfCompletion, universityName, aboutCourse} = props['item'];
  return (
    <div className="flex flex-col pb-8 text-center last:pb-0 md:text-left">
      <div className="flex flex-col pb-4">
        <h2 className="text-xl font-bold">{courseName.S}</h2>
        <div className="flex items-center justify-center gap-x-2 md:justify-start">
          <span className="flex-1 text-sm font-medium italic sm:flex-none">{universityName.S}</span>
          <span>•</span>
          <span className="flex-1 text-sm sm:flex-none">{yearOfCompletion.S}</span>
        </div>
      </div>
      {aboutCourse.S}
    </div>
  );
});

// TimelineItem.displayName = 'TimelineItem';
export default Education;
