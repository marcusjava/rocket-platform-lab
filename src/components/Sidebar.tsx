import React from "react";
import { useGetLessonsQuery } from "../graphql/generated";
import Lesson from "./Lesson";

// import { Container } from './styles';

const Sidebar: React.FC = () => {
  const { data } = useGetLessonsQuery();

  return (
    <aside className="md:w-[348px] bg-gray-700 p-6 border-l border-gray-600">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma de Aulas
      </span>
      <div className="flex flex-row md:flex-col gap-8 overflow-scroll">
        {data?.lessons.map((lesson) => (
          <Lesson
            key={lesson.id}
            title={lesson.title}
            lessonSlug={lesson.slug}
            availableAt={new Date(lesson.availableAt)}
            type={lesson.lessonType}
          />
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
