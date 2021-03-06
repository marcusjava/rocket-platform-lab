import { DefaultUi, Player, Youtube } from "@vime/react";
import {
  CaretRight,
  DiscordLogo,
  FileArrowDown,
  Lightning,
} from "phosphor-react";
import React from "react";
import ButtonLink from "./ButtonLink";
import "@vime/core/themes/default.css";
import { useGetQueryBySlugQuery } from "../graphql/generated";
import Spinner from "./Spinner";

// import { Container } from './styles';

interface VideoProps {
  lessonSlug: string;
}

const Video = ({ lessonSlug }: VideoProps) => {
  const { data } = useGetQueryBySlugQuery({
    variables: { slug: lessonSlug },
  });

  console.log({ data, lessonSlug });
  if (!data || !data.lesson) {
    return (
      <div className="flex-1">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center flex-col">
        <div className="h-full w-full max-w-[1300px] aspect-video mx-auto">
          <Player>
            <Youtube videoId={data.lesson?.videoId} />
            <DefaultUi />
          </Player>
        </div>
        <div className="p-8 max-w-[1100px] mx-auto">
          <div className="flex items-start gap-16">
            <div className="flex-1">
              <h1 className="text-2xl font-bold">{data.lesson.title}</h1>
              <p className="mt-4 text-gray-200 leading-relaxed">
                {data.lesson.description}
              </p>
              {data.lesson.teacher && (
                <div className="flex items-center gap-4 mt-6 ">
                  <img
                    className="h-16 w-16 rounded-full border-2 border-blue-500"
                    src={data.lesson.teacher.avatarURL}
                    alt="Avatar"
                  />
                  <div className="leading-relaxed">
                    <strong className="font-bold text-2xl block ">
                      {data.lesson.teacher.name}
                    </strong>
                    <span className="text-gray-200 text-sm block">
                      {data.lesson.teacher.bio}
                    </span>
                  </div>
                </div>
              )}
            </div>
            <div className="flex flex-col space-y-5">
              <ButtonLink variant="primary">
                <DiscordLogo size={24} />
                Comunidade do Discord
              </ButtonLink>
              <ButtonLink variant="secondary">
                <Lightning size={24} />
                Acesse o desafio
              </ButtonLink>
            </div>
          </div>
          <div className="gap-8 mt-20 grid lg:grid-cols-2 grid-rols-2">
            <a
              href=""
              className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover hover:bg-gray-600 transition-colors"
            >
              <div className="bg-green-700 h-full p-6 flex items-center">
                <FileArrowDown size={40} />
              </div>
              <div className="py-6 leading-relaxed">
                <strong className="text-2xl">Material Complementar</strong>
                <p className="h-full py-6 flex items-center">
                  Acesse o material complementar para acelerar seu
                  desenvolvimento
                </p>
              </div>
              <div className="h-full p-6 flex items-center">
                <CaretRight size={24} />
              </div>
            </a>
            <a
              href=""
              className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover hover:bg-gray-600 transition-colors"
            >
              <div className="bg-green-700 h-full p-6 flex items-center">
                <FileArrowDown size={40} />
              </div>
              <div className="py-6 leading-relaxed">
                <strong className="text-2xl">Wallpapers exclusivos</strong>
                <p className="h-full py-6 flex items-center">
                  Acesse o material complementar para acelerar seu
                  desenvolvimento
                </p>
              </div>
              <div className="h-full p-6 flex items-center">
                <CaretRight size={24} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
