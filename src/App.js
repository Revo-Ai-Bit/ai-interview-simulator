import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Home Page Component
const Home = () => (
  <div className="p-4">
    <header className="bg-blue-600 text-white p-4 text-center">
      <h1 className="text-2xl font-bold">Welcome to Our Website</h1>
    </header>
    <section className="p-4">
      <h2 className="text-xl font-semibold">Home</h2>
      <p>This is the homepage of our website. Explore our offerings and learn more about us!</p>
    </section>
  </div>
);

// About Us Component
const About = () => (
  <div className="p-4">
    <header className="bg-green-600 text-white p-4 text-center">
      <h1 className="text-2xl font-bold">About Us</h1>
    </header>
    <section className="p-4">
      <h2 className="text-xl font-semibold">Who We Are</h2>
      <p>We are a team of dedicated professionals passionate about delivering quality solutions for our customers. Our goal is to create a positive impact through our work.</p>
    </section>
  </div>
);

// Contact Us Component
const Contact = () => (
  <div className="p-4">
    <header className="bg-purple-600 text-white p-4 text-center">
      <h1 className="text-2xl font-bold">Contact Us</h1>
    </header>
    <section className="p-4">
      <h2 className="text-xl font-semibold">Get in Touch</h2>
      <p>Have questions or want to get in touch? Reach out to us!</p>
      <ul>
        <li>Email: contact@ourwebsite.com</li>
        <li>Phone: +123-456-7890</li>
      </ul>
    </section>
  </div>
);

// AI Interview App Component
const AIInterviewApp = () => (
  <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
    <header className="bg-blue-600 text-white p-4 w-full text-center">
      <h1 className="text-2xl font-bold">AI Interview Platform</h1>
    </header>
    <main className="flex-grow w-full max-w-4xl p-4">
      <Card className="mb-6">
        <CardContent className="text-center">
          <h2 className="text-xl font-semibold mb-4">Real-Time Interview Assessment</h2>
          <p>
            Enhance your hiring process with our AI-driven interview platform.
            Conduct real-time assessments of candidates' communication skills efficiently and accurately.
          </p>
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardContent>
            <h3 className="text-lg font-semibold mb-2">Start a New Interview</h3>
            <p>
              Initiate a real-time AI interview session to evaluate candidates'
              responses and communication in real-world scenarios.
            </p>
            <Button className="mt-4 w-full">Start Interview</Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <h3 className="text-lg font-semibold mb-2">View Past Results</h3>
            <p>
              Access detailed reports of previously conducted interviews,
              including scores and AI insights.
            </p>
            <Button className="mt-4 w-full">View Reports</Button>
          </CardContent>
        </Card>
      </div>
    </main>
    <footer className="bg-gray-800 text-white p-4 text-center">
      <p>&copy; 2025 AI Interview Platform. All rights reserved.</p>
    </footer>
  </div>
);

// Main App Component with Navigation
const App = () => {
  return (
    <Router>
      <nav className="bg-gray-800 text-white p-4 text-center">
        <Link to="/" className="mx-2 text-white">Home</Link>
        <Link to="/about" className="mx-2 text-white">About Us</Link>
        <Link to="/contact" className="mx-2 text-white">Contact</Link>
        <Link to="/ai-interview" className="mx-2 text-white">AI Interview App</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ai-interview" element={<AIInterviewApp />} />
      </Routes>
    </Router>
  );
};

export default App;
