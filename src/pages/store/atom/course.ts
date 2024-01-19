import {atom} from "recoil";

interface Course3 {
  title:string;
  description:string;
  _id:string;
  price:string;
  imageLink:string;
  published?:boolean;
}

interface CourseProps {
  course : Course3 | null;
  isLoading : boolean
}



export const courseState = atom<CourseProps>({
  key: 'courseState',
  default: {
    isLoading: true,
    course: null
  },
});