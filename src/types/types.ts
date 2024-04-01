export interface Course {
  id: string;
  name: string;
  bgColor: string;
  tags: CourseTag[];
  image: string;
}

export enum CourseTag {
  Головоломки = 'Головоломки',
  Шахматы = 'Шахматы',
  ЛогикаИМышление = 'Логика и мышление',
  ОкружающийМир = 'Окружающий мир',
  Загадки = 'Загадки',
  СтраныИСтолицы = 'Страны и столицы',
  ВсеТемы = 'Все темы',
}

export interface SidebarProps {
  data: CourseTag[];
  onUpdateTag: (data: CourseTag) => void;
}

export interface SidebarItemProps {
  tag: CourseTag;
  updateCourseTag: (tag: CourseTag) => void;
  isSelected: boolean;
}

export interface CourseCardProps {
  data: Course;
}
