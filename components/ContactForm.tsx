"use client"
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import { FiSend, FiUser, FiMail, FiMessageSquare } from 'react-icons/fi';
import { motion } from 'framer-motion';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [isSending, setIsSending] = useState(false);
    const [focusedField, setFocusedField] = useState<string | null>(null);

    const handleChange = (e: { target: { name: string; value: string; }; }) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validate = () => {
        const validationErrors: Partial<{ name: string; email: string; message: string }> = {};
        if (!formData.name) validationErrors.name = "Name is required";
        if (!formData.email) {
            validationErrors.email = "Email is required";
        } else if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(formData.email)) {
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

            emailjs.send("service_tqqmtt3", "template_a1uk9lj", formData, process.env.NEXT_PUBLIC_EMAIL_API_ID)
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
        <section className='container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20' id='contact'>
            <Toaster />
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className='max-w-3xl mx-auto'
            >
                <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4'>
                    Let&apos;s Connect
                </h2>
                <p className='text-gray-400 text-center mb-12 text-sm sm:text-base'>
                    Have a question or want to work together? Feel free to reach out!
                </p>

                <motion.form
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    onSubmit={handleSubmit}
                    className='space-y-6'
                >
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                        <div className='relative group'>
                            <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-blue-500 transition-colors'>
                                <FiUser className="w-5 h-5" />
                            </div>
                            <input
                                type="text"
                                id='name'
                                name='name'
                                value={formData.name}
                                placeholder='Your Name'
                                onChange={handleChange}
                                onFocus={() => setFocusedField('name')}
                                onBlur={() => setFocusedField(null)}
                                className={`w-full pl-10 pr-4 py-3 bg-[#112240] rounded-lg border ${
                                    focusedField === 'name' ? 'border-blue-500' : errors.name ? 'border-red-500' : 'border-gray-700'
                                } focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300`}
                            />
                            {errors.name && (
                                <motion.p
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className='mt-2 text-sm text-red-500 flex items-center gap-1'
                                >
                                    {errors.name}
                                </motion.p>
                            )}
                        </div>

                        <div className='relative group'>
                            <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-blue-500 transition-colors'>
                                <FiMail className="w-5 h-5" />
                            </div>
                            <input
                                type="email"
                                id='email'
                                name='email'
                                value={formData.email}
                                placeholder='Your Email'
                                onChange={handleChange}
                                onFocus={() => setFocusedField('email')}
                                onBlur={() => setFocusedField(null)}
                                className={`w-full pl-10 pr-4 py-3 bg-[#112240] rounded-lg border ${
                                    focusedField === 'email' ? 'border-blue-500' : errors.email ? 'border-red-500' : 'border-gray-700'
                                } focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300`}
                            />
                            {errors.email && (
                                <motion.p
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className='mt-2 text-sm text-red-500 flex items-center gap-1'
                                >
                                    {errors.email}
                                </motion.p>
                            )}
                        </div>
                    </div>

                    <div className='relative group'>
                        <div className='absolute top-3 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-blue-500 transition-colors'>
                            <FiMessageSquare className="w-5 h-5" />
                        </div>
                        <textarea
                            id='message'
                            name='message'
                            value={formData.message}
                            placeholder='Your Message'
                            onChange={handleChange}
                            onFocus={() => setFocusedField('message')}
                            onBlur={() => setFocusedField(null)}
                            className={`w-full pl-10 pr-4 py-3 bg-[#112240] rounded-lg border ${
                                focusedField === 'message' ? 'border-blue-500' : errors.message ? 'border-red-500' : 'border-gray-700'
                            } focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 min-h-[160px] resize-y`}
                        />
                        {errors.message && (
                            <motion.p
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className='mt-2 text-sm text-red-500 flex items-center gap-1'
                            >
                                {errors.message}
                            </motion.p>
                        )}
                    </div>

                    <motion.button
                        type='submit'
                        disabled={isSending}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full py-3 px-6 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium 
                            flex items-center justify-center gap-2 hover:opacity-90 transition-all duration-300
                            ${isSending ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-lg hover:shadow-blue-500/25'}`}
                    >
                        {isSending ? (
                            <>
                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                <span>Sending...</span>
                            </>
                        ) : (
                            <>
                                <span>Send Message</span>
                                <FiSend className="w-5 h-5" />
                            </>
                        )}
                    </motion.button>
                </motion.form>
            </motion.div>
        </section>
    );
};

export default ContactForm;
