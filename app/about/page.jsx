import React from "react";
import {
  User,
  Heart,
  BookOpen,
  Coffee,
  Mail,
  Github,
  Twitter,
  Linkedin,
  Code,
  Star,
  Award,
  Zap,
} from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen w-full bg-background">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-20">
          <div className="relative mb-12">
            <div className="w-40 h-40 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-full mx-auto flex items-center justify-center shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <User className="w-20 h-20" />
            </div>
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
              <Star className="w-4 h-4" />
            </div>
          </div>
          <h1 className="text-6xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-8">
            About Ansh
          </h1>
          <p className="text-2xl max-w-4xl mx-auto leading-relaxed">
            Welcome to my digital universe! I'm a passionate developer, tech
            innovator, and lifelong learner crafting the future through code and
            creativity.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Story Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-8 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                <BookOpen className="w-6 h-6 " />
              </div>
              <h2 className="text-3xl font-bold">My Journey</h2>
            </div>
            <div className="space-y-6">
              <p className="leading-relaxed">
                Hey there! I'm Ansh, a tech enthusiast who believes in the
                transformative power of code. My adventure began in high school
                when I discovered my first programming language—Python. What
                started as curiosity quickly evolved into an unstoppable
                passion.
              </p>
              <p className="leading-relaxed">
                Over the years, I've journeyed through the vast landscape of
                technology, from web development to mobile apps, always pushing
                boundaries and exploring new frontiers. I've learned that the
                best way to truly master something is to share it with others.
              </p>
              <p className="leading-relaxed">
                This platform is my way of documenting discoveries, sharing
                knowledge, and hopefully inspiring fellow developers and curious
                minds to chase their dreams in tech.
              </p>
            </div>
          </div>

          {/* Skills & Passions */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-8 shadow-2xl hover:shadow-purple-500/20 transition-all duration-300">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                <Heart className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold">What Drives Me</h2>
            </div>
            <div className="space-y-6">
              {[
                {
                  icon: Code,
                  title: "Full-Stack Development",
                  desc: "Creating seamless digital experiences from frontend to backend",
                },
                {
                  icon: Zap,
                  title: "Innovation & Problem Solving",
                  desc: "Turning complex challenges into elegant solutions",
                },
                {
                  icon: Award,
                  title: "Open Source Contribution",
                  desc: "Building the future together with the global developer community",
                },
                {
                  icon: BookOpen,
                  title: "Knowledge Sharing",
                  desc: "Mentoring and teaching through tutorials and content creation",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start group">
                  <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mt-2 mr-4 group-hover:scale-125 transition-transform"></div>
                  <div>
                    <h3 className="font-semibold  mb-2 flex items-center">
                      <item.icon className="w-4 h-4 mr-2 text-cyan-400" />
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-lg rounded-2xl border border-white/20 p-8 mb-20 shadow-2xl">
          <h2 className="text-3xl font-bold  text-center mb-12">
            Journey Milestones
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "100+", label: "Projects Completed" },
              { value: "25K+", label: "Lines of Code" },
              { value: "5+", label: "Years Experience" },
              { value: "50+", label: "Happy Clients" },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Ansh's Coding Journey Timeline */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-8 mb-20 shadow-2xl">
          <h2 className="text-3xl font-bold  text-center mb-12">
            Ansh's Coding Evolution
          </h2>
          <div className="space-y-12">
            {[
              {
                phase: "The Spark of Curiosity",
                description:
                  "Ansh's coding journey began in high school when he stumbled upon Python. What started as simple curiosity quickly turned into passion, spending countless hours experimenting with code and building small projects.",
                gradient: "from-yellow-400 to-orange-500",
              },
              {
                phase: "Diving Deeper",
                description:
                  "After mastering the basics, Ansh's thirst for knowledge grew. He explored complex topics like data structures, algorithms, and web development, taking on freelance projects to apply knowledge in real-world scenarios.",
                gradient: "from-blue-400 to-cyan-500",
              },
              {
                phase: "Taking on Challenges",
                description:
                  "With years of experience, Ansh began tackling significant challenges. From contributing to open-source projects to developing his own applications, he continued pushing limits and growing as a developer.",
                gradient: "from-purple-400 to-pink-500",
              },
              {
                phase: "Giving Back",
                description:
                  "Today, Ansh is not only a proficient coder but also a mentor. He regularly contributes to the programming community through tutorials, talks, and helping new coders find their footing in software development.",
                gradient: "from-green-400 to-emerald-500",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-center gap-8`}
              >
                <div className="md:w-1/3">
                  <div
                    className={`w-full h-64 bg-gradient-to-br ${item.gradient} rounded-xl shadow-xl flex items-center justify-center transform hover:scale-105 transition-transform duration-300`}
                  >
                    <div className=" text-6xl font-bold opacity-50">
                      {index + 1}
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold  mb-4">{item.phase}</h3>
                  <p className="leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl shadow-2xl p-12  mb-20 transform hover:scale-105 transition-transform duration-300">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-8">My Mission</h2>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto">
              To democratize technology by making complex concepts accessible to
              everyone, empowering the next generation of developers to build
              amazing things and turn their wildest ideas into reality.
            </p>
          </div>
        </div>

        {/* Fun Facts */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-8 mb-20 shadow-2xl">
          <h2 className="text-3xl font-bold  text-center mb-12">
            Fun Facts About Ansh
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Coffee,
                color: "text-amber-400",
                text: "I code better with a perfect cup of coffee in hand",
              },
              {
                icon: BookOpen,
                color: "text-green-400",
                text: "Always reading about cutting-edge technologies and innovations",
              },
              {
                icon: User,
                color: "text-blue-400",
                text: "Love connecting with fellow developers and creative minds",
              },
              {
                icon: Heart,
                color: "text-red-400",
                text: "Passionate about helping newcomers start their tech journey",
              },
            ].map((fact, index) => (
              <div
                key={index}
                className="flex items-center group hover:bg-white/5 rounded-xl p-4 transition-all duration-300"
              >
                <div
                  className={`w-12 h-12 ${fact.color} mr-6 group-hover:scale-110 transition-transform`}
                >
                  <fact.icon className="w-full h-full" />
                </div>
                <p className="group-hover: transition-colors">{fact.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Connect Section */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-8 shadow-2xl">
          <h2 className="text-3xl font-bold  text-center mb-8">
            Let's Connect & Create!
          </h2>
          <p className="text-center mb-12 text-lg">
            Ready to collaborate, learn, or just chat about tech? I'd love to
            hear from you!
          </p>
          <div className="flex flex-wrap text-accent-foreground justify-center gap-6">
            {[
              {
                icon: Mail,
                label: "Email Me",
                color: "from-cyan-500 to-blue-500",
                href: "mailto:ansh@example.com",
              },
              {
                icon: Github,
                label: "GitHub",
                color: "from-gray-300 to-gray-600",
                href: "#",
              },
              {
                icon: Twitter,
                label: "Twitter",
                color: "from-blue-400 to-blue-600",
                href: "#",
              },
              {
                icon: Linkedin,
                label: "LinkedIn",
                color: "from-blue-600 to-blue-800",
                href: "#",
              },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className={`flex items-center cursor-pointer bg-gradient-to-r ${social.color}  px-8 py-4 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300`}
              >
                <social.icon className="w-5 h-5 mr-3" />
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
