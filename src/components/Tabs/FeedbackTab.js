"use client";
import { useState } from "react";

export default function FeedbackTab() {
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000); // Reset after 3s
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Write feedback here..."
        className="w-full p-2 border rounded dark:bg-gray-800 dark:text-white"
        required
        rows={4}
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Submit Feedback
      </button>
      {submitted && <p className="text-green-500">Feedback submitted!</p>}
    </form>
  );
}
