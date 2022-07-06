import { ApolloProvider, gql, useQuery } from "@apollo/client";
import { useEffect, useId } from "react";
import { BrowserRouter } from "react-router-dom";
import { client } from "./lib/apollo";
import { Router } from "./Router";

const GET_LESSONS = gql`
  query {
    lessons {
      id
      title
    }
  }
`;

interface Lesson {
  id: string;
  title: string;
}

interface ResponseData {
  lessons: Lesson[];
}

function App() {
  const { data } = useQuery<ResponseData>(GET_LESSONS);
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
