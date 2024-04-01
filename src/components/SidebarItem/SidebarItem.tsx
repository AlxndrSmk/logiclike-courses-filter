import { SidebarItemProps } from '../../types/types';

import './SidebarItem.scss';

const SidebarItem: React.FC<SidebarItemProps> = ({
  tag,
  updateCourseTag,
  isSelected,
}) => {
  const handleClick = () => updateCourseTag(tag);

  return (
    <div
      className={`sidebar-item ${isSelected ? 'selected' : ''}`}
      onClick={handleClick}
    >
      {tag}
    </div>
  );
};

export default SidebarItem;
