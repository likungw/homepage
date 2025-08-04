// data/people.ts
export interface Person {
  name: string;
  description: string;
  image: string; // 图片路径
}

export const faculty: Person[] = [
  {
    name: "Hao Zhao",
    description: "He makes robots understand 3D scenes.",
    image: "public/schools/cas.png",
  },
  {
    name: "Yongliang Shi",
    role: "Faculty",
    description: "He gets robots self-informed.",
    image: "public/schools/cas.png",
  },
  // ...
];

export const phdStudents: Person[] = [
  {
    name: "Xiaoxue Chen",
    description: "She de-renders scenes.",
    image: "public/schools/cas.png",
  },
  // ...
];
