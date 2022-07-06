import React from "react";
import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Link, useParams } from "react-router-dom";

// import { Container } from './styles';

interface LessonProps {
  title: string;
  lessonSlug: string;
  availableAt: Date;
  type: "live" | "class";
}

const Lesson = ({ title, lessonSlug, availableAt, type }: LessonProps) => {
  const { slug } = useParams<{ slug: string }>();
  //ESTARA DISPONIVEL SE A DATA FOR IGUAL OU MENOR QUE A DATA ATUAL
  const isAvaliable = isPast(availableAt);

  const isActiveLesson = lessonSlug === slug;

  console.log(isActiveLesson);

  const avaliableAtFormatted = format(
    availableAt,
    "EEEE' - 'd' de 'MMMM' - 'k'h'mm",
    {
      locale: ptBR,
    }
  );

  return (
    <Link to={`/event/lesson/${lessonSlug}`} className="group">
      <span className={`${isActiveLesson ? "text-white" : "text-gray-300 "}`}>
        {avaliableAtFormatted}
      </span>
      <div
        className={`rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 ${
          isActiveLesson ? "bg-green-500" : ""
        }`}
      >
        <header className="flex items-center justify-between mb-2">
          {isAvaliable ? (
            <span
              className={`text-sm ${
                isActiveLesson ? "text-white" : "text-blue-500"
              }  font-medium flex items-center gap-2`}
            >
              <CheckCircle size={20} />
              Conteudo liberado
            </span>
          ) : (
            <span
              className={`text-sm ${
                isActiveLesson ? "text-white" : "text-orange-500"
              }  font-medium flex items-center gap-2`}
            >
              <Lock size={20} />
              Em breve
            </span>
          )}
          <span
            className={`text-xs rounded px-2 py-[0.125rem] text-white border ${
              isActiveLesson ? "border-white" : "border-green-300"
            } font-bold`}
          >
            {type === "live" ? "AO VIVO" : "AULA PRÁTICA"}
          </span>
        </header>
        <strong
          className={`${
            isActiveLesson ? "text-white" : "text-gray-200"
          } mt-5 block`}
        >
          {title}
        </strong>
      </div>
    </Link>
  );
};

export default Lesson;
