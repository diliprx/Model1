import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { contactInfo, socialMedia } from '../assets/assets';

const Contact = () => {
  const getSocialIcon = (iconName) => {
    const iconProps = { size: 20 };
    switch(iconName) {
      case 'Facebook': return <Facebook {...iconProps} />;
      case 'Instagram': return <Instagram {...iconProps} />;
      case 'Twitter': return <Twitter {...iconProps} />;
      case 'Youtube': return <Youtube {...iconProps} />;
      default: return null;
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Plan your perfect Jharkhand experience with our expert guidance and support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="text-orange-600 mr-4" size={20} />
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-gray-600">{contactInfo.phone}</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="text-orange-600 mr-4" size={20} />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-gray-600">{contactInfo.email}</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="text-orange-600 mr-4 mt-1" size={20} />
                  <div>
                    <div className="font-semibold">Address</div>
                    <div className="text-gray-600">
                      {contactInfo.address.line1}<br />
                      {contactInfo.address.line2}<br />
                      {contactInfo.address.line3}<br />
                      {contactInfo.address.line4}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Follow Us</h2>
              <div className="flex space-x-4">
                {socialMedia.map((social, index) => (
                  <div 
                    key={index}
                    className={`bg-${social.color} hover:bg-${social.hoverColor} text-white p-3 rounded-full cursor-pointer transition-colors`}
                  >
                    {getSocialIcon(social.icon)}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Your last name"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Tell us about your travel plans..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;