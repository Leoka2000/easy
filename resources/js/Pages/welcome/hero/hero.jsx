import React from "react";
import "./hero.css";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";

const Hero = () => {
    return (
        <section className="flex items-center justify-start pt-64 pl-8 text-left md:pl-20 pb-80 custom-bg border-3 border-neutral-100">
            <main className="custom-max-w-main">
                <h1 className="pb-3 text-2xl font-semibold md:text-4xl">
                    Vamos juntos conseguir sua primeira oportunidade no
                    exterior?
                </h1>
                <p className="text-lg italic md:text-3xl">It's all so simple</p>

                <div className='flex flex-col w-2/4 gap-2 mt-11'>
                    <Button variant="contained" sx={{textTransform:'lowercase', fontSize:'16px'}} >
                        SERVIÇOS
                    </Button>
                    <Button variant="contained" color='secondary'  sx={{textTransform:'lowercase', fontSize:'16px'}} >
                        CONHEÇA
                    </Button>
                </div>
            </main>
        </section>
    );
};

export default Hero;
