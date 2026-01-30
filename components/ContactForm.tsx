"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { FiSend, FiUser, FiMail, FiMessageSquare } from "react-icons/fi";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validate = () => {
    const validationErrors: Partial<{
      name: string;
      email: string;
      message: string;
    }> = {};
    if (!formData.name) validationErrors.name = "Name is required";
    if (!formData.email) {
      validationErrors.email = "Email is required";
    } else if (
      !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        formData.email,
      )
    ) {
      validationErrors.email = "Email is invalid";
    }
    if (!formData.message) validationErrors.message = "Message is required";
    return validationErrors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors({
        name: validationErrors.name || "",
        email: validationErrors.email || "",
        message: validationErrors.message || "",
      });
    } else {
      setErrors({
        name: "",
        email: "",
        message: "",
      });
      setIsSending(true);

      emailjs
        .send(
          "service_tqqmtt3",
          "template_a1uk9lj",
          formData,
          process.env.NEXT_PUBLIC_EMAIL_API_ID,
        )
        .then(() => {
          toast.success("Message sent successfully");
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        })
        .catch(() => {
          toast.error("Failed to send message. Please try again later");
        })
        .finally(() => {
          setIsSending(false);
        });
    }
  };

  return (
    <section
      className="relative bg-secondary py-16 sm:py-20 md:py-24 lg:py-32"
      id="contact"
    >
      <Toaster />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-accent text-xs sm:text-sm font-medium tracking-wider uppercase">
              Contact
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4 sm:mb-6">
              Let&apos;s work together
            </h2>
            <p className="text-text-secondary text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
              Have a project in mind or want to discuss opportunities? I&apos;d
              love to hear from you. Send me a message and I&apos;ll get back to
              you as soon as possible.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 text-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <FiMail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-text-muted">Email</p>
                  <a
                    href="mailto:sankeethantharmathayalan@gmail.com"
                    className="text-sm sm:text-base text-text-primary hover:text-accent transition-colors break-all"
                  >
                    sankeethantharmathayalan@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-text-secondary mb-2"
                >
                  Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-text-muted">
                    <FiUser className="w-5 h-5" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    placeholder="John Doe"
                    onChange={handleChange}
                    className={`w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-3.5 bg-tertiary rounded-lg border ${
                      errors.name
                        ? "border-red-500"
                        : "border-border focus:border-accent"
                    } focus:outline-none transition-colors text-text-primary placeholder:text-text-muted`}
                  />
                </div>
                {errors.name && (
                  <p className="mt-2 text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-text-secondary mb-2"
                >
                  Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-text-muted">
                    <FiMail className="w-5 h-5" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    placeholder="john@example.com"
                    onChange={handleChange}
                    className={`w-full pl-12 pr-4 py-3.5 bg-tertiary rounded-lg border ${
                      errors.email
                        ? "border-red-500"
                        : "border-border focus:border-accent"
                    } focus:outline-none transition-colors text-text-primary placeholder:text-text-muted`}
                  />
                </div>
                {errors.email && (
                  <p className="mt-2 text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-text-secondary mb-2"
                >
                  Message
                </label>
                <div className="relative">
                  <div className="absolute top-3.5 left-0 pl-4 flex items-center pointer-events-none text-text-muted">
                    <FiMessageSquare className="w-5 h-5" />
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    placeholder="Tell me about your project..."
                    onChange={handleChange}
                    rows={5}
                    className={`w-full pl-12 pr-4 py-3.5 bg-tertiary rounded-lg border ${
                      errors.message
                        ? "border-red-500"
                        : "border-border focus:border-accent"
                    } focus:outline-none transition-colors text-text-primary placeholder:text-text-muted resize-none`}
                  />
                </div>
                {errors.message && (
                  <p className="mt-2 text-sm text-red-500">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSending}
                className={`w-full py-4 px-6 rounded-lg bg-accent hover:bg-accent-hover text-white font-medium 
                                    flex items-center justify-center gap-2 transition-all duration-300
                                    ${isSending ? "opacity-70 cursor-not-allowed" : "hover:shadow-lg hover:shadow-accent/25"}`}
              >
                {isSending ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <FiSend className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
