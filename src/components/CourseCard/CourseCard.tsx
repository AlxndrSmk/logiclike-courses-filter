import { CourseCardProps } from '../../types/types';
import './CourseCard.scss';

const CourseCard: React.FC<CourseCardProps> = ({ data }) => {
  return (
    <div className="course-card__wrapper">
      <div
        style={{ backgroundColor: `${data.bgColor}` }}
        className="course-card__image-wrapper"
      >
        <img src={data.image} className="course-card__image" alt={data.name} />
      </div>
      <div className="course-card__description">{data.name}</div>
    </div>
  );
};

export default CourseCard;
