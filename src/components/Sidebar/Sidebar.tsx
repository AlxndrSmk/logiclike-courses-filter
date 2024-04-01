import { useState } from 'react';
import SidebarItem from '../SidebarItem/SidebarItem';
import { CourseTag, SidebarProps } from '../../types/types';

import './Sidebar.scss';

const Sidebar: React.FC<SidebarProps> = ({ data, onUpdateTag }) => {
  const [selectedTag, setSelectedTag] = useState<CourseTag | ''>(
    CourseTag.ВсеТемы
  );

  const handleUpdateCourseTag = (data: CourseTag) => {
    onUpdateTag(data);
    setSelectedTag(data);
  };

  const updatedData = [CourseTag.ВсеТемы, ...data];

  return (
    <ul className="sidebar-wrapper">
      {updatedData.map((item) => (
        <li key={item}>
          <SidebarItem
            isSelected={item === selectedTag}
            updateCourseTag={handleUpdateCourseTag}
            tag={item}
          />
        </li>
      ))}
    </ul>
  );
};

export default Sidebar;
