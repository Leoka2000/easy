import React, { useEffect } from "react";
import "./services.css";
import { MdOutlineScience } from "react-icons/md";
import { GiMaterialsScience } from "react-icons/gi";
import { IoBandageOutline } from "react-icons/io5";
import img9 from "./shapes/9.png";
import img10 from "./shapes/10.png";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import {GiLoveLetter} from 'react-icons/gi';
import {FaMicrophone, FaPencilAlt} from 'react-icons/fa';
import {BsTranslate} from 'react-icons/bs';



const Services = () => {
    const [ref1, inView1] = useInView({
        threshold: 1,
        triggerOnce: true,
        delay: 1,
    });

    
    const [ref2, inView2] = useInView({
        threshold: 1,
        triggerOnce: true,
        delay: 1,
    });

    const [ref3, inView3] = useInView({
        threshold: 1,
        triggerOnce: true,
        delay: 1,
    });

    return (
        <>
            <section
                id="services"
                className="flex flex-wrap items-center justify-center px-4 py-20 lg:px-32"
            >

                <header className="flex flex-col items-center justify-center mb-8 text-center">
                    <h1 className="mb-2 text-4xl font-bold lg:text-5xl">
                    Nossos serviços
                    </h1>
                    <p className="text-base lg:text-2x1">
                    A Easy Tramitt foi fundada em 2019 com o objetivo de ajudar jovens brasileiros a conquistar oportunidades no exterior. Por falta de conhecimento sobre onde buscar e até mesmo um entedimento de que isso é distante de sua realidade, muitos acabam desistindo do seu sonho de estudar fora. Entendendo esse problema, a Easy Tramitt busca conectar bolsas de estudos no exterior com os jovens brasileiros de forma acessível.
                    </p>
                </header>
                <div
                    id="box1"
                    className="m-4 text-gray-400 rounded-md shadow-lg w-96 h-96"
                >
                    <motion.div
                        ref={ref1}
                        initial={{ opacity: 0 }}
                        animate={inView2 ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 1 }}
                        className="relative flex flex-col items-center justify-center h-full gap-8 px-2 overflow-hidden text-center text-gray-300 shadow-xl"
                    >
                        <span className="text-6xl">
                            <GiLoveLetter />
                        </span>
                        <div>
                            <h2 className="text-2xl font-semibold lg:text-3xl">
                                Mentoria
                            </h2>
                            <p>
                                Na mentoria realizamos um mapeamento completo da
                                sua situação atual e objetivo de estudo. A
                                partir disso, criamos juntos um plano para
                                aplicação nas bolsas de estudos. Durante todo o
                                processos fazemos um acompanhamento da sua
                                evolução, auxiliando no seu desenvolvimento com
                                orientações e outras estratégias.
                            </p>
                        </div>
                        <div className="shapes-box">
                            <img alt="" className="img9-1" src={img9} />
                            <img alt="" className="img10-1" src={img10} />
                        </div>
                    </motion.div>
                </div>
                <div id="box2" className="m-4 rounded-md shadow-lg w-96 h-96">
                    <motion.div
                        ref={ref2}
                        initial={{ opacity: 0 }}
                        animate={inView2 ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 1 }}
                        className="relative flex flex-col items-center justify-center h-full gap-8 px-2 overflow-hidden text-center text-gray-300 shadow-xl"
                    >
                        <span className="text-6xl">
                            <FaMicrophone />
                        </span>
                        <div>
                            <h2 className="text-2xl font-semibold lg:text-3xl">
                                REVISÕES
                            </h2>
                            <p>
                                Oferecemos serviços de revisão que consiste na
                                análise detalhada de cartas de motivação e
                                documentação visando corrigir ou acrescentar
                                conteúdo buscando maior assertividade na sua
                                aplicação.
                            </p>
                        </div>
                        <div className="shapes-box">
                            <img alt="" className="img9-2" src={img9} />
                            <img alt="" className="img10-2" src={img10} />
                        </div>
                    </motion.div>
                </div>
                <div id="box3" className="m-4 rounded-md shadow-lg w-96 h-96">
                    <motion.div
                        ref={ref3}
                        initial={{ opacity: 0 }}
                        animate={inView3 ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 1 }}
                        className="relative flex flex-col items-center justify-center h-full gap-8 px-2 overflow-hidden text-center text-gray-300 shadow-xl"
                    >
                        <span className="text-6xl">
                        
                            <BsTranslate />
                        </span>
                        <div>
                            <h2 className="text-2xl font-semibold lg:text-3xl">
                                Tradução livre de documentos
                            </h2>
                            <p>
                                A tradução livre de documentos visa adequar
                                termos de um idioma considerando os aspectos
                                culturais para que a mensagem seja recebida de
                                forma direta e correta. Oferecemos a tradução de
                                documentos do português para inglês e inglês
                                para português.
                            </p>
                        </div>
                        <div className="shapes-box">
                            <img alt="" className="img9-3" src={img9} />
                            <img alt="" className="img10-3" src={img10} />
                        </div>
                    </motion.div>
                </div>
                <div
                    id="box4"
                    className="m-4 text-gray-400 rounded-md shadow-lg w-96 h-96"
                >
                    <motion.div
                        ref={ref3}
                        initial={{ opacity: 0 }}
                        animate={inView2 ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 1 }}
                        className="relative flex flex-col items-center justify-center h-full gap-8 px-2 overflow-hidden text-center text-gray-300 shadow-xl"
                    >
                        <span className="text-6xl custom-color">
                        <FaPencilAlt />
                        </span>
                        <div>
                            <h2 className="text-2xl font-semibold lg:text-3xl">
                                Mentoria
                            </h2>
                            <p>
                                Na mentoria realizamos um mapeamento completo da
                                sua situação atual e objetivo de estudo. A
                                partir disso, criamos juntos um plano para
                                aplicação nas bolsas de estudos. Durante todo o
                                processos fazemos um acompanhamento da sua
                                evolução, auxiliando no seu desenvolvimento com
                                orientações e outras estratégias.
                            </p>
                        </div>
                        <div className="shapes-box">
                            <img alt="" className="img9-1" src={img9} />
                            <img alt="" className="img10-1" src={img10} />
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default Services;
