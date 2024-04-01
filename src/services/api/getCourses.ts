import { Course } from '../../types/types';

const serverUrl = 'https://logiclike.com/docs/courses.json';

const getCourses = async (): Promise<Course[] | undefined> => {
  try {
    const responce = await fetch(`${serverUrl}`);
    const data = await responce.json();

    return data;
  } catch (error) {
    console.log('msg', error);
  }
};

export default getCourses;
