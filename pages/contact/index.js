/* eslint-disable */

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Contact = () => {
  const notify = () => {
    toast.success("Formulario enviado con éxito", {
      className: "custom-toast",
      bodyClassName: "custom-toast-body",
      progressClassName: "custom-toast-progress",
      autoClose: 5000,
    });
  };

  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email_id: "",
    message: "",
  });

  const [isButtonDisabled, setIsButtonDisabled] = useState(true); // Estado para habilitar/deshabilitar el botón

  const sendEmail = (e) => {
    e.preventDefault();

    if (formData.name && formData.email_id && formData.message) {
      emailjs
        .sendForm(
          "service_kgt804i",
          "template_alk55jv",
          form.current,
          "3WU39GtzzlSm3OD3p"
        )
        .then((result) => {
          console.log(result.text);
          setFormData({
            name: "",
            email_id: "",
            message: "",
          });
          setIsButtonDisabled(true);
          notify(); 
        })
        .catch((error) => {
          console.error(error.text);
        });
    } else {
      toast.error("Por favor, complete todos los campos obligatorios.");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setIsButtonDisabled(!(formData.name && formData.email_id && formData.message));
  };

  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px] ">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Let's <span className="text-accent">connect.</span>
          </motion.h2>
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
          >
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                placeholder="name"
                id="name"
                className="input"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                placeholder="email"
                id="email_id"
                className="input"
                name="email_id"
                value={formData.email_id}
                onChange={handleInputChange}
                required
              />
            </div>
            <textarea
              placeholder="message"
              id="message"
              name="message"
              className="textarea"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
            <button
              type="submit" 
              disabled={isButtonDisabled} 
              id="button"
              value="Send Email"
              className="btn rounded-full border bordee-white /50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Lets talk
              </span>
              <BsArrowRight className="-translate--[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
            <ToastContainer position="top-right" />
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
