import { gql, useMutation, useQuery } from "@apollo/client";
import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";
import Spinner from "../components/Spinner";
import { useCreateSubscriberMutation } from "../graphql/generated";

const CREATE_SUBSCRIBER = gql`
  mutation CreateSubscriber($name: String!, $email: String!) {
    createSubscriber(data: { name: $name, email: $email }) {
      id
    }
  }
`;

interface SubscriberResponse {}

export default function Inscricao() {
  const navigate = useNavigate();
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
  });

  const [createSubscriber, { data, loading }] = useCreateSubscriberMutation();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormFields({ ...formFields, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const { name, email } = formFields;

    if (!email || !name) {
      return;
    }

    try {
      await createSubscriber({
        variables: { name, email },
      });
      navigate("/event");
    } catch (error: any) {
      console.log("response error", error);
    }
  };

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      {loading ? <Spinner /> : null}
      <div className="w-full max-w-[1100px] flex items-center justify-between mx-auto mt-8">
        <div className="max-w-[648px]">
          <Logo />

          <h1 className="text-[2.5rem] mt-8 leading-tight">
            Construa uma{" "}
            <strong className="text-blue-500">aplicação completa</strong>, do
            zero, com <strong className="text-blue-500">React</strong>
          </h1>
          <p className="text-gray-200 mt-4 leading-relaxed">
            Em apenas uma semana voçê irá dominar na pratica uma das tecnologias
            mais utilizadas no mercado e seu ecossistema
          </p>
        </div>
        <div className="p-8 bg-gray-700 border border-gray-500 rounded ">
          <strong className="text-2xl mb-6 block">
            Insceva-se gratuitamente
          </strong>
          <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full">
            <input
              className="bg-gray-900 rounded px-5 h-14"
              name="name"
              value={formFields.name}
              type="text"
              placeholder="Seu nome completo"
              onChange={handleInputChange}
              required
            />
            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="email"
              name="email"
              placeholder="Seu email"
              onChange={handleInputChange}
              value={formFields.email}
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="block mt-4 uppercase py-4 rounded font-bold text-sm bg-green-500 hover:bg-green-700 transition-colors disabled:opacity-50"
            >
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>
      <img src="/src/assets/code-mockup.png" alt="Code" className="mt-10" />
    </div>
  );
}
