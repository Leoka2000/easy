import React from "react";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
const Form = () => {
    const {
        // here we are destructuring the useForm object in our app
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const sendEmail = (data) => {
        emailjs.send('service_hxb1rij', 'template_hmq89b7', data, 'AuIf7jwhK_BBNJSFs')
          .then((response) => {
              console.log('SUCCESS!', response.status, response.text);
          }, (error) => {
              console.log('FAILED...', error);
          });
      } 
  
      const onSubmit = (data) => {
          
          sendEmail(data);
        
          Swal.fire({
            icon: 'success',
            title: 'Your request has been successfully sent!',
            text: 'Keep an eye out for me in your email box. Press the button below to continue.'
          }).then(() => {
     
          });
        }

    return (
        <>
            <section className="py-24 ">
                <main class="flex justify-center">
                    <form
                        className="w-full max-w-lg form"
                        onSubmit={handleSubmit(onSubmit)} 
                    >
                        <header>
                            <h1 className="text-2xl font-bold ">Contato</h1>
                        </header>
                        <div class='flex flex-col gap-3'>
                            <div className="flex flex-col">
                                <label>Seu Nome</label>
                                <input
                                    {...register("userName", {
                                        required: true,
                                        minLength: 3,
                                    })}
                                    id="userName"
                                    type="text"
                                    className="rounded-sm border-neutral-700 bg-neutral-800"
                                ></input>
                                {errors.userName && (
                                    <p className="text-red-500">
                                        Verifique seu nome
                                    </p>
                                )}
                            </div>
                            <div className="flex flex-col">
                                <label>Seu Email</label>
                                <input
                                    {...register("email", {
                                        required: true,
                                        pattern:
                                            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                    })}
                                    className="rounded-sm border-neutral-700 bg-neutral-800"
                                    id="email"
                                    name="email"
                                
                                    type="email"
                                />
                                {errors.userName && (
                                    <p className="text-red-500">
                                        Verifique seu email
                                    </p>
                                )}
                            </div>
                            <div className="flex flex-col">
                                <label>Seu whatsapp</label>
                                <input
                                    {...register("companyName", {
                                        required: true,
                                        pattern: /^\+[1-9]{1}[0-9]{3,14}$/,
                                    })}
                                    className="rounded-sm border-neutral-700 bg-neutral-800"
                                ></input>
                                {errors.userName && (
                                    <p className="text-red-500">
                                        Verifique seu telefone
                                    </p>
                                )}
                            </div>
                            <div className="flex flex-col">
                                <label>Nos conte mais sobre oque precisa</label>
                                <textarea
                                    {...register("message", {
                                        required: true,
                                        maxLength: 1000,
                                    })}
                                    className="rounded-sm border-neutral-700 bg-neutral-800"
                                ></textarea>
                            </div>
                        </div>
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{
                                mt:'1rem',
                                width:'100%',
                                textTransform: "lowercase",
                                fontSize: "16px",
                            }}
                        >
                            Enviar
                        </Button>
                    </form>
                </main>
            </section>
        </>
    );
};

export default Form;
