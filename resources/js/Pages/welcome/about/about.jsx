import React from "react";
import { FaUniversity } from "react-icons/fa";
import { MdContentPasteSearch } from "react-icons/md";
import { FaRoadCircleCheck } from "react-icons/fa6";
import "./about.css";

const About = () => {
    return (
        <div class="bg-gray-300 text-gray-950 pt-24 pb-32">
            <main class="px-2">
                <header class="flex flex-col pb-10 items-center justify-center">
                    <h1 class="md:text-5xl text-3xl  font-bold mb-2">Quem somos</h1>
                    <p class="text-center  max-w-5xl">
                        A Easy Tramitt foi fundada em 2019 com o objetivo de
                        ajudar jovens brasileiros a conquistar oportunidades no
                        exterior. Por falta de conhecimento sobre onde buscar e
                        até mesmo um entedimento de que isso é distante de sua
                        realidade, muitos acabam desistindo do seu sonho de
                        estudar fora. Entendendo esse problema, a Easy Tramitt
                        busca conectar bolsas de estudos no exterior com os
                        jovens brasileiros de forma acessível.
                    </p>
                </header>
                <div class="flex flex-wrap gap-6 items-center justify-center">
                    <div class="flex max-w-96 ">
                        <span class="text-4xl pr-2 text-blue-600">
                            <FaUniversity />
                        </span>
                        <div class="flex flex-col text-start justify-normal items-start">
                            <h1 class="font-bold">Missão</h1>
                            <p>
                                Empoderar a nova geração de brasileiros que
                                sonham em estudar no exterior
                            </p>
                        </div>
                    </div>
                    <div class="flex max-w-96">
                        <span class="text-4xl pr-2 text-blue-600">
                            <MdContentPasteSearch />
                        </span>
                        <div class="flex flex-col text-start justify-normal items-start">
                            <h1 class="font-bold">Visão</h1>
                            <p>
                                Ser referência para jovens brasileiros no
                                processo de aplicação para bolsas de intercâmbio
                                de forma simplificada
                            </p>
                        </div>
                    </div>
                    <div class="flex max-w-96">
                        <span class="text-4xl pr-2 text-blue-600">
                            <FaRoadCircleCheck />
                        </span>
                        <div class="flex flex-col text-start justify-normal items-start">
                            <h1 class="font-bold">Valores</h1>
                            <p>
                                Foco na qualidade dos serviços oferecidos com
                                transparência e simplicidade
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default About;
