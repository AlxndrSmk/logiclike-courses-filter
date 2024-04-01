import { Course } from '../../types/types';

const serverUrl: string = 'https://logiclike.com/docs/courses.json';

const getCourses = async (): Promise<Course[] | undefined> => {
  try {
    const responce: Response = await fetch(`${serverUrl}`);
    const data: Course[] = await responce.json();

    return data;
  } catch (error: unknown) {
    console.log('msg', error);
  }
};

export default getCourses;
