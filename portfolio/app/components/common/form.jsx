"use client";
import { useState } from "react";
import emailjs from "emailjs-com";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [response, setResponse] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponse("");

    try {
      // Replace 'user_yourUserID' with your EmailJS User ID
      const result = await emailjs.sendForm(
        "service_yourServiceID", // EmailJS Service ID
        "template_yourTemplateID", // EmailJS Template ID
        e.target, // Reference to the form
        "user_yourUserID" // Your EmailJS User ID
      );

      if (result.text === "OK") {
        setResponse("Form submitted successfully!");
      } else {
        setResponse(`Error: ${result.text}`);
      }
    } catch (error) {
      setResponse(`Error: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mt-10">
      <form onSubmit={handleSubmit}>
        <label className="">
          <input
            className="bg-gray-100 placeholder:text-black p-2 placeholder:text-[17px] w-[300px] md:w-[500px] my-2"
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label className="">
          <input
            className="bg-gray-100 placeholder:text-black p-2 placeholder:text-[17px] w-[300px] md:w-[500px] my-2"
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label className="">
          <textarea
            className="bg-gray-100 placeholder:text-black p-2 placeholder:text-[17px] w-[300px] md:w-[500px] my-2"
            placeholder="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button
          className="px-4 py-2 bg-black w-[211px] h-[78px] text-[20px] text-white rounded "
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>

      {response && <p>{response}</p>}
    </div>
  );
}
