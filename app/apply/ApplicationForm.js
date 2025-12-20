"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  FaUpload,
  FaGraduationCap,
  FaUserGraduate,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function ApplicationForm() {
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

  // Rest of your component code...
  // Make sure to include all the JSX and other functions from your original component

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            University Application
          </h1>
          <p className="text-gray-600">
            Fill out the form below to apply to{" "}
            {universityFromUrl || "your chosen university"}
          </p>
        </div>

        {/* Rest of your form JSX */}
        <div className="bg-white shadow rounded-lg p-6">
          {/* Form fields go here */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="university"
            >
              University
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="university"
              name="university"
              type="text"
              value={formData.university}
              onChange={handleChange}
              placeholder="Enter university name"
            />
          </div>
          {/* Add other form fields */}
        </div>
      </div>
    </div>
  );
}
