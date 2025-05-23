import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.css";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const data = {
      name: form.name,
      email: form.email,
      message: form.message,
      time: new Date().toLocaleString("pt-BR"),
    };

    emailjs
      .send("service_98ket7n", "template_icj14bo", data, "UapyVzqBeVmpCklUS")
      .then(
        () => {
          alert("✅ Mensagem enviada com sucesso!");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          alert("❌ Ocorreu um erro ao enviar.");
          console.error(error);
        }
      );
  };

  return (
    <form onSubmit={sendEmail} className="contact-form">
      <input
        type="text"
        name="name"
        placeholder="Seu nome"
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Seu email"
        value={form.email}
        onChange={handleChange}
        required
      />
      <textarea
        name="message"
        placeholder="Digite sua mensagem..."
        rows={5}
        value={form.message}
        onChange={handleChange}
        required
      />
      <button type="submit">📤 Enviar</button>
    </form>
  );
}
