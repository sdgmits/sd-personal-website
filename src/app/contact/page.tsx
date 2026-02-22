"use client";

import { motion } from "framer-motion";
import { personalInfo, socialLinks, pageContent } from "@/utils/data";
import { Github, Linkedin, Mail, Send, Twitter, GraduationCap } from "lucide-react";
import { useState, FormEvent } from "react";

// Icon mapping for dynamic rendering
const iconMap: { [key: string]: React.ElementType } = {
  linkedin: Linkedin,
  github: Github,
  mail: Mail,
  x: Twitter,
  twitter: Twitter,
  "microsoft-learn": GraduationCap,
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    
    // TODO: Implement actual form submission (EmailJS, Formspree, etc.)
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{pageContent.contact.title}</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
          {pageContent.contact.subtitle}
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  {pageContent.contact.form.nameLabel}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-dark-border rounded-lg bg-white dark:bg-dark-surface focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none transition"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  {pageContent.contact.form.emailLabel}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-dark-border rounded-lg bg-white dark:bg-dark-surface focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none transition"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  {pageContent.contact.form.messageLabel}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-dark-border rounded-lg bg-white dark:bg-dark-surface focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none transition resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 disabled:bg-gray-400 text-white rounded-lg transition-colors"
              >
                {status === "sending" ? pageContent.contact.form.sendingButton : pageContent.contact.form.submitButton}
                <Send className="ml-2" size={20} />
              </button>

              {status === "success" && (
                <p className="text-green-600 dark:text-green-400">
                  {pageContent.contact.form.successMessage}
                </p>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">{pageContent.contact.info.heading}</h2>
            
            <div className="space-y-6 mb-8">
              {socialLinks.map((link) => {
                const IconComponent = iconMap[link.icon.toLowerCase()] || Mail;
                const displayText = link.name === "Email" 
                  ? personalInfo.email 
                  : `${link.name} Profile`;
                
                return (
                  <div key={link.name} className="flex items-center">
                    <IconComponent className="text-primary-600 mr-4" size={24} />
                    <a
                      href={link.url}
                      target={link.name === "Email" ? "_self" : "_blank"}
                      rel={link.name === "Email" ? undefined : "noopener noreferrer"}
                      className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                    >
                      {displayText}
                    </a>
                  </div>
                );
              })}
            </div>

            <div className="bg-gray-50 dark:bg-dark-surface rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">{pageContent.contact.info.connectHeading}</h3>
              {pageContent.contact.info.connectText.map((text, index) => (
                <p key={index} className="text-gray-600 dark:text-gray-400 mb-4">
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
