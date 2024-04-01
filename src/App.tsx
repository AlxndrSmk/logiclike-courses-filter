import { useEffect, useState } from 'react';
import getCourses from './services/api/getCourses';
import { Course, CourseTag } from './types/types';
import Sidebar from './components/Sidebar/Sidebar';
import './App.scss';
import CourseCard from './components/CourseCard/CourseCard';
import Loader from './components/Loader/Loader';

const App: React.FC = () => {
  const [isDataLoaded, setIsDataLoaded] = useState<boolean>(false);
  const [courseTags, setCourseTags] = useState<CourseTag[]>([]);
  const [courseTag, setCourseTag] = useState<CourseTag | ''>('');
  const [data, setData] = useState<Course[]>([]);
  const [filteredData, setFilteredData] = useState<Course[]>([]);

  function handleUpdateTag(data: CourseTag) {
    setCourseTag(data);
  }

  const getData = async (): Promise<void> => {
    setIsDataLoaded(false);
    const fetchedData = await getCourses();
    setIsDataLoaded(true);
    if (fetchedData) {
      setData(fetchedData);
      setFilteredData(fetchedData);
    }
  };

  const getTags = (): void => {
    const tags: string[] = [];
    data.forEach((course) => {
      tags.push(...course.tags);
    });
    setCourseTags(Array.from(new Set(tags)) as CourseTag[]);
  };

  useEffect(() => {
    if (courseTag) {
      const filteredCourses = data.filter((course) => {
        return course.tags.includes(`${courseTag}` as CourseTag);
      });

      setFilteredData(filteredCourses);
    }
  }, [courseTag]);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getTags();
  }, [data]);

  if (!isDataLoaded) return <Loader />;

  return (
    <div className="app">
      <div className="app__container">
        <Sidebar onUpdateTag={handleUpdateTag} data={courseTags} />
        <div className="app__courses-list">
          {filteredData.map((el) => {
            return <CourseCard key={JSON.stringify(el)} data={el} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
