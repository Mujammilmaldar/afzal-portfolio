"use client";
export default function ThankYouPage() {
    return (
      <main className="min-h-screen flex items-center justify-center bg-white px-4">
        <div className="max-w-xl text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Thank You!</h1>
          <p className="text-lg text-gray-700 mb-6">
            Your message has been received. We'll get back to you shortly.
          </p>
          <a
            href="/"
            className="inline-block mt-4 bg-primary text-white px-6 py-3 rounded"
          >
            Back to Home
          </a>
        </div>
      </main>
    );
  }
  