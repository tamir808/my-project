"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  FaArrowLeft,
  FaUpload,
  FaGraduationCap,
  FaUserGraduate,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function ApplicationPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const universityFromUrl = searchParams.get("university") || "";

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "",
    country: "",
    highestQualification: "",
    institution: "",
    graduationYear: "",
    gpa: "",
    program: "",
    university: universityFromUrl,
    intake: "",
    transcript: null,
    recommendation: null,
    statement: null,
    passport: null,
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "file") {
      setFormData((prev) => ({
        ...prev,
        [name]: files[0],
      }));
    } else if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  useEffect(() => {
    if (universityFromUrl) {
      setFormData((prev) => ({ ...prev, university: universityFromUrl }));
    }
  }, [universityFromUrl]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => router.back()}
          className="text-gray-600 hover:text-green-700 mb-8 transition-colors"
        >
          Back to University
        </button>

        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-green-500 text-white p-8 text-center">
            <h1 className="text-3xl font-bold mb-2">University Application</h1>
            <p className="text-blue-100">
              Complete your application to{" "}
              {universityFromUrl || "your chosen university"}
            </p>
          </div>

          <div className="p-6 sm:p-8">
            {/* Formspree Form */}
            <form
              action="https://formspree.io/f/maqwwkzp"
              method="POST"
              encType="multipart/form-data"
              className="space-y-12"
            >
              {/* Personal Information */}
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  <input
                    type="date"
                    name="dob"
                    placeholder="Date of Birth"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    name="country"
                    placeholder="Country"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Academic Information */}
              <div className="space-y-6 pt-8 border-t border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <select
                    name="highestQualification"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">Highest Qualification</option>
                    <option value="high_school">High School</option>
                    <option value="bachelors">Bachelor's</option>
                    <option value="masters">Master's</option>
                    <option value="phd">PhD</option>
                  </select>
                  <input
                    type="text"
                    name="institution"
                    placeholder="Institution"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  <input
                    type="number"
                    name="graduationYear"
                    placeholder="Graduation Year"
                    min="1900"
                    max={new Date().getFullYear() + 5}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  <input
                    type="number"
                    name="gpa"
                    placeholder="GPA (4.0)"
                    min="0"
                    max="4"
                    step="0.01"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Program Details */}
              <div className="space-y-6 pt-8 border-t border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <select
                    name="program"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">Select Program</option>
                    <option value="computer_science">Computer Science</option>
                    <option value="business">Business</option>
                    <option value="engineering">Engineering</option>
                    <option value="medicine">Medicine</option>
                    <option value="law">Law</option>
                  </select>
                  <input
                    type="text"
                    name="university"
                    value={universityFromUrl}
                    readOnly
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100"
                  />
                  <select
                    name="intake"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">Select Intake</option>
                    <option value="fall_2024">Fall 2024</option>
                    <option value="spring_2025">Spring 2025</option>
                    <option value="fall_2025">Fall 2025</option>
                  </select>
                </div>
              </div>

              {/* File Uploads */}
              <div className="space-y-4 pt-8 border-t border-gray-200">
                <div>
                  <label>Transcript</label>
                  <input
                    type="file"
                    name="transcript"
                    accept=".pdf,.doc,.docx"
                    className="w-full"
                  />
                </div>
                <div>
                  <label>Recommendation Letter</label>
                  <input
                    type="file"
                    name="recommendation"
                    accept=".pdf,.doc,.docx"
                    className="w-full"
                  />
                </div>
                <div>
                  <label>Statement of Purpose</label>
                  <input
                    type="file"
                    name="statement"
                    accept=".pdf,.doc,.docx"
                    className="w-full"
                  />
                </div>
                <div>
                  <label>Passport Copy</label>
                  <input
                    type="file"
                    name="passport"
                    accept=".pdf,.jpg,.png"
                    className="w-full"
                  />
                </div>
              </div>

              {/* Terms */}
              <div className="pt-6">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" name="termsAccepted" required />
                  <span>I accept the terms and conditions</span>
                </label>
              </div>

              {/* Submit */}
              <div className="pt-8">
                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-green-600 text-white rounded-lg hover:bg-green-700"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  
  );
}
