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
    image: "/schools/cas.png",
  },
  {
    name: "Yongliang Shi",
    description: "He gets robots self-informed.",
    image: "/schools/cas.png",
  },
  // ...
];

export const phdStudents: Person[] = [
  {
    name: "Xiaoxue Chen",
    description: "She de-renders scenes.",
    image: "/schools/cas.png",
  },
  // ...
];
