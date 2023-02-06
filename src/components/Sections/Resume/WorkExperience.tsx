import {FC, memo} from 'react';

import {TimelineItem} from '../../../data/dataDef';

const WorkExperience: any = ((props) => {
  const {position, companyName, year, jobSummary} = props['item'];
  console.log(position);
  return (
    <div className="flex flex-col pb-8 text-center last:pb-0 md:text-left">
      <div className="flex flex-col pb-4">
        <h2 className="text-xl font-bold">{position.S}</h2>
        <div className="flex items-center justify-center gap-x-2 md:justify-start">
          <span className="flex-1 text-sm font-medium italic sm:flex-none">{companyName.S}</span>
          <span>•</span>
          <span className="flex-1 text-sm sm:flex-none">{year.S}</span>
        </div>
      </div>
      {jobSummary.S}
    </div>
  );
});

// TimelineItem.displayName = 'TimelineItem';
export default WorkExperience;
