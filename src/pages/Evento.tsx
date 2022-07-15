import { gql, useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Video from "../components/Video";

// import { Container } from './styles';

interface ParamsProps {
  slug: string;
}

const Evento: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const defaultSlug = "conheca-a-rocketseat";

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-col md:flex-1 md:flex-row">
        <Video lessonSlug={slug || defaultSlug} />

        <Sidebar />
      </main>
    </div>
  );
};

export default Evento;
