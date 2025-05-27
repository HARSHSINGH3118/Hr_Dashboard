"use client";

import { useState, useEffect } from "react";

const DEPARTMENTS = ["hr", "engineering", "sales", "marketing", "finance"];

export default function CreateUserModal({ isOpen, onClose, onCreate }) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    department: "",
    rating: 3,
  });

  const [clientNow, setClientNow] = useState(null);

  useEffect(() => {
    setClientNow(Date.now());
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.firstName ||
      !form.lastName ||
      !form.email ||
      !form.age ||
      !form.department
    ) {
      alert("All fields are required.");
      return;
    }

    if (parseInt(form.age) <= 0) {
      alert("Age must be a positive number.");
      return;
    }

    const newUser = {
      id: clientNow ?? Date.now(),
      ...form,
      age: parseInt(form.age),
      rating: parseInt(form.rating),
    };

    onCreate(newUser);
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      age: "",
      department: "",
      rating: 3,
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 p-6 rounded shadow-md w-[90%] max-w-md space-y-4"
      >
        <h2 className="text-lg font-semibold">Create New User</h2>

        <div className="grid grid-cols-2 gap-2">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="p-2 rounded border dark:bg-gray-700 dark:text-white"
            value={form.firstName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="p-2 rounded border dark:bg-gray-700 dark:text-white"
            value={form.lastName}
            onChange={handleChange}
          />
        </div>

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-2 rounded border dark:bg-gray-700 dark:text-white"
          value={form.email}
          onChange={handleChange}
        />

        <input
          type="number"
          name="age"
          placeholder="Age"
          min="1"
          className="w-full p-2 rounded border dark:bg-gray-700 dark:text-white"
          value={form.age}
          onChange={handleChange}
        />

        <select
          name="department"
          className="w-full p-2 rounded border dark:bg-gray-700 dark:text-white"
          value={form.department}
          onChange={handleChange}
        >
          <option value="">Select Department</option>
          {DEPARTMENTS.map((dept) => (
            <option key={dept} value={dept}>
              {dept}
            </option>
          ))}
        </select>

        <label className="block text-sm">
          Rating:
          <input
            type="range"
            name="rating"
            min="1"
            max="5"
            className="w-full mt-1"
            value={form.rating}
            onChange={handleChange}
          />
        </label>

        <div className="flex justify-between">
          <button
            type="button"
            onClick={onClose}
            className="text-sm px-3 py-1 bg-gray-400 text-white rounded"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="text-sm px-3 py-1 bg-blue-600 text-white rounded"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
}
