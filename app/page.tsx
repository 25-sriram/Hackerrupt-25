"use client"

import { useEffect, useRef, useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// Helper component for the animated mascot
const Mascot = () => (
  <div className="relative w-40 h-40 md:w-48 md:h-48 mb-4 animate-bob">
    {/* Body */}
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-36 bg-gray-800 rounded-t-full rounded-b-lg border-4 border-gray-600"></div>
    {/* Tummy */}
    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-24 bg-white rounded-full"></div>
    {/* Visor */}
    <div className="absolute top-4 left-1/2 -translate-x-1/2 w-36 h-20 bg-gray-700 rounded-2xl border-4 border-gray-500 overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-80"></div>
      <div className="absolute inset-2 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 opacity-80 animate-glow"></div>
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-bold text-3xl font-pixel tracking-wider text-shadow-glow">
        HACK
      </span>
    </div>
    {/* Eyes */}
    <div className="absolute top-12 left-1/2 -translate-x-1/2 flex gap-6">
      <div className="w-5 h-5 bg-white rounded-full"></div>
      <div className="w-5 h-5 bg-white rounded-full"></div>
    </div>
    {/* Beak */}
    <div className="absolute top-20 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-12 border-l-transparent border-r-transparent border-b-yellow-400"></div>
    {/* Head Tuft */}
    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-4 h-8 bg-yellow-400 rounded-t-full -rotate-12"></div>
  </div>
)

const NavLink = ({ children, onClick, isActive }) => (
  <button
    onClick={onClick}
    className={`relative px-6 py-2 text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
      isActive ? "text-green-300 scale-105" : "text-white hover:text-green-300"
    }`}
  >
    <div
      className={`absolute inset-0 bg-black backdrop-blur-sm transition-all duration-300 ${
        isActive ? "bg-opacity-40" : "bg-opacity-20"
      }`}
      style={{ clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0% 100%)" }}
    ></div>
    <span className="relative">{children}</span>
    {isActive && (
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-green-400 animate-pulse"></div>
    )}
  </button>
)

const HomeSection = () => (
  <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
    <Mascot />
    <h1 className="font-pixel text-4xl md:text-7xl mb-2 animate-text-glitch tracking-widest">&lt;HACKERRUPT&gt;</h1>
    <p className="text-lg md:text-xl text-gray-300 mb-2">Turn Bugs into Brilliance</p>
    <p className="text-purple-400 font-bold mb-8">13th-14th Dec 2024</p>

    <div className="flex flex-col md:flex-row gap-6">
      <button className="hack-button bg-gradient-to-r from-purple-600 to-indigo-600">
        <span>Results for Social Innovation</span>
      </button>
      <button className="hack-button bg-gradient-to-r from-purple-600 to-indigo-600">
        <span>Results for Business Product</span>
      </button>
    </div>
  </div>
)

const AboutSection = () => (
  <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-20">
    <div className="max-w-4xl mx-auto">
      <h2 className="font-pixel text-3xl md:text-5xl mb-8 text-green-400 animate-slide-in-down">About HACKERRUPT</h2>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6 animate-slide-in-left">
          <p className="text-lg text-gray-300 leading-relaxed">
            HACKERRUPT is more than just a hackathon - it's a revolution in problem-solving. We bring together the
            brightest minds to transform bugs into breakthrough innovations.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Join us for 24 hours of intense coding, creative thinking, and collaborative building as we tackle
            real-world challenges with cutting-edge technology.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <span className="px-4 py-2 bg-purple-600/30 rounded-full text-purple-300 border border-purple-500">
              Innovation
            </span>
            <span className="px-4 py-2 bg-green-600/30 rounded-full text-green-300 border border-green-500">
              Collaboration
            </span>
            <span className="px-4 py-2 bg-blue-600/30 rounded-full text-blue-300 border border-blue-500">
              Technology
            </span>
          </div>
        </div>
        <div className="animate-slide-in-right">
          <div className="relative">
            <div className="w-64 h-64 mx-auto bg-gradient-to-br from-purple-600/20 to-green-600/20 rounded-full border-2 border-green-400/50 flex items-center justify-center">
              <div className="text-center">
                <div className="font-pixel text-4xl text-green-400 mb-2">24</div>
                <div className="text-gray-300">Hours of</div>
                <div className="text-green-300 font-bold">Innovation</div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-500 rounded-full animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const DomainsSection = () => (
  <div className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
    <div className="max-w-6xl mx-auto">
      <h2 className="font-pixel text-3xl md:text-5xl mb-12 text-center text-green-400 animate-slide-in-down">
        Challenge Domains
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            title: "AI & Machine Learning",
            description: "Build intelligent solutions using cutting-edge AI technologies",
            icon: "🤖",
            color: "from-purple-600 to-pink-600",
          },
          {
            title: "Web3 & Blockchain",
            description: "Create decentralized applications and smart contracts",
            icon: "⛓️",
            color: "from-blue-600 to-cyan-600",
          },
          {
            title: "IoT & Hardware",
            description: "Connect the physical world with smart devices",
            icon: "🔧",
            color: "from-green-600 to-teal-600",
          },
          {
            title: "Social Impact",
            description: "Solve real-world problems that matter to communities",
            icon: "🌍",
            color: "from-orange-600 to-red-600",
          },
          {
            title: "FinTech",
            description: "Revolutionize financial services with technology",
            icon: "💰",
            color: "from-yellow-600 to-orange-600",
          },
          {
            title: "HealthTech",
            description: "Improve healthcare through innovative solutions",
            icon: "🏥",
            color: "from-red-600 to-pink-600",
          },
        ].map((domain, index) => (
          <div
            key={domain.title}
            className="group relative p-6 bg-black/40 backdrop-blur-sm border border-gray-700 rounded-lg hover:border-green-400 transition-all duration-300 animate-slide-in-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${domain.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg`}
            ></div>
            <div className="relative z-10">
              <div className="text-4xl mb-4 text-center">{domain.icon}</div>
              <h3 className="font-bold text-xl mb-3 text-green-300 text-center">{domain.title}</h3>
              <p className="text-gray-300 text-center leading-relaxed">{domain.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)

const TimelineSection = () => (
  <div className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
    <div className="max-w-4xl mx-auto">
      <h2 className="font-pixel text-3xl md:text-5xl mb-12 text-center text-green-400 animate-slide-in-down">
        Event Timeline
      </h2>
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-400 to-purple-600"></div>

        <div className="space-y-12">
          {[
            {
              time: "9:00 AM",
              event: "Registration & Check-in",
              day: "Day 1",
              description: "Welcome breakfast and team formation",
            },
            {
              time: "10:00 AM",
              event: "Opening Ceremony",
              day: "Day 1",
              description: "Keynote speakers and challenge reveal",
            },
            {
              time: "11:00 AM",
              event: "Hacking Begins!",
              day: "Day 1",
              description: "24 hours of intense coding starts",
            },
            { time: "6:00 PM", event: "Dinner Break", day: "Day 1", description: "Networking dinner with mentors" },
            { time: "12:00 AM", event: "Midnight Snacks", day: "Night", description: "Fuel for the night owls" },
            { time: "8:00 AM", event: "Breakfast", day: "Day 2", description: "Morning energy boost" },
            { time: "11:00 AM", event: "Submission Deadline", day: "Day 2", description: "Final submissions due" },
            { time: "2:00 PM", event: "Presentations", day: "Day 2", description: "Teams pitch their solutions" },
            {
              time: "4:00 PM",
              event: "Awards Ceremony",
              day: "Day 2",
              description: "Winners announced and prizes awarded",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} animate-slide-in-${index % 2 === 0 ? "left" : "right"}`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className={`w-5/12 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
                <div className="bg-black/60 backdrop-blur-sm border border-gray-700 rounded-lg p-4 hover:border-green-400 transition-colors duration-300">
                  <div className="text-green-400 font-bold text-lg">{item.time}</div>
                  <div className="text-purple-400 text-sm mb-1">{item.day}</div>
                  <div className="text-white font-semibold mb-2">{item.event}</div>
                  <div className="text-gray-300 text-sm">{item.description}</div>
                </div>
              </div>
              <div className="w-2/12 flex justify-center">
                <div className="w-4 h-4 bg-green-400 rounded-full border-4 border-black relative z-10">
                  <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-75"></div>
                </div>
              </div>
              <div className="w-5/12"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
)

const TeamsSection = () => {
  const [selectedTeam, setSelectedTeam] = useState("Core Team")

  const teams = {
    "Core Team": [
      {
        name: "Mithun S",
        role: "President",
        image: "/mithun.png",
        
      },
      {
        name: "Kiran M S",
        role: "Vice President",
        image: "/kiran.png",
        
      },
      {
        name: "Srinidhi S",
        role: "Vice President",
        image: "/srinidhi.png",
        
      },
      {
        name: "Harsh S",
        role: "Vice President",
        image: "/harsh.png",
        
      },
      {
        name: "Jai Krishna Prasath D",
        role: "Secretary",
        image: "/jai.png",
       
      },

      {
        name: "Sarvesh Raghav B",
        role: "Operations Head",
        image: "/raghav1.png",
       
      },

      {
        name: "Ashika Haseen S",
        role: "Treasurer",
        image: "/ashika.png",
       
      },

      {
        name: "Nirrmal G",
        role: "Joint Secretary",
        image: "/nirrms.png",
       
      },
    ],
    "Executive Team": [
      {
        name: "Johan A",
        role: "Executive Associative",
        image: "/johan.png",
        
      },
     {
        name: "Aravinth T",
        role: "Executive Associative",
        image: "/aravinth.png",
        
      },
     {
        name: "Shrinithi Dasarathy",
        role: "Executive Associative",
        image: "/shrinithi.png",
        
      },

     {
        name: "Kavya K P",
        role: "Executive Associative",
        image: "/kavya.png",
        
      },
     {
        name: "Mirthun K S",
        role: "Executive Member",
        image: "/mirthun.png",
        
      },
     {
        name: "Shree Kowsik S B",
        role: "Executive Member",
        image: "/kowsik.png",
        
      },

     {
        name: "Salai B Dharshini",
        role: "Executive Member",
        image: "/salai.png",
        
      },

     {
        name: "C Dhinesh",
        role: "Executive Member",
        image: "/dhinesh.png",
        
      },

      {
        name: "Alagu Manikandan",
        role: "Executive Member",
        image: "/am.png",
        
      },
     {
        name: "Rethinagiri S",
        role: "Executive Member",
        image: "/rethinagiri.png",
        
      },
    
      {
        name: "Arpitha Paraneetharan",
        role: "Executive Member",
        image: "/arpritha.png",
        
      },
      {
        name: "Kesava Navya",
        role: "Executive Member",
        image: "/kesava.png",
        
      },
    ],

    "Web Team": [
      {
        name: "Sharmile S",
        role: "Web Team Lead",
        image: "/sharmile.png",
      },
      {
        name: "Sri Ram R",
        role: "Web Team Member",
        image: "/sri.png",
      },
      {
        name: "B Jashwanth Kumar",
        role: "Web Team Member",
        image: "/jaswanth.png",
      },
    ],

        "Design Team": [
      {
        name: "Aneesh Kumar R",
        role: "Design Team Head",
        image: "/aneesh.png",
        
      },
      {
        name: "Nantha Kishore S",
        role: "Design Team Member",
        image: "/nantha.png",
        
      },
      {
        name: "Kanisha S",
        role: "Design Team Head",
        image: "/kanisha.png",
        
      },
      {
        name: "Rajeshwari B C",
        role: "Design Team Member",
        image: "/raje.png",
        
      },
      {
        name: "Kavinithi R P",
        role: "Design Team Member",
        image: "/kavinithi.png",
        
      },
    ],
      "Content Team": [
      {
        name: "Sadhana S",
        role: "Content Team Head",
        image: "/sadhana.png",
        
      },
      {
        name: "Mona Shree",
        role: "Content Team Member",
        image: "/mona.png",
        
      },
      {
        name: "Vaishnavi Chitraa M",
        role: "Content Team Member",
        image: "/vaishnavi.png",
        
      },
      {
        name: "Tharun Kumar T",
        role: "Content Team Member",
        image: "/tk.png",
        
      },
    ],
        "Marketting And Outreach Team": [
      {
        name: "Shashank N S",
        role: "Marketting Team Head",
        image: "/shashank.png",
        
      },
      {
        name: "Hariganesh A",
        role: "Outreach Team Head",
        image: "/hari.png",
        
      },
      {
        name: "Priyanka A",
        role: "Marketting Team Member",
        image: "/priyanka.png",
        
      },
      {
        name: "Sharmila M",
        role: "Marketting Team Member",
        image: "/sharmila.png",
        
      },
      {
        name: "Bhavana G",
        role: "Marketting Team Member",
        image: "/bhavana.png",
        
      },
    ],
    "Photography Team": [
      {
        name: "V Raghav",
        role: "Photography Team Member",
        image: "/raghav.png",
        
      },
    ],
          
    "Faculty Co-ordinator": [
      {
        name: "DR.G Janaka Sudha",
        role: "Faculty Coordinator",
        image: "/janakasudha.png",
        
      },
      {
        name: "MR.K Srinivasan",
        role: "Faculty Coordinator",
        image: "/srinivasan.png",
        
      },
   
    ],
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="font-pixel text-3xl md:text-5xl mb-12 text-center text-green-400 animate-slide-in-down">
          Teams
        </h2>

        {/* Team Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(teams).map((teamName) => (
            <button
              key={teamName}
              onClick={() => setSelectedTeam(teamName)}
              className={`px-6 py-3 rounded-lg border transition-all duration-300 ${
                selectedTeam === teamName
                  ? "bg-green-600/30 border-green-400 text-green-300"
                  : "bg-black/40 border-gray-700 text-gray-300 hover:border-green-400 hover:text-green-300"
              }`}
            >
              {teamName}
            </button>
          ))}
        </div>

        {/* Team Members Grid */}
        <div className="flex flex-wrap justify-center gap-6">
          {teams[selectedTeam].map((member, index) => (
            <div
              key={index}
              className="group relative bg-black/40 backdrop-blur-sm border border-gray-700 rounded-lg p-6 hover:border-green-400 transition-all duration-300 animate-slide-in-up w-72 h-auto"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>

              <div className="relative z-10 text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-gray-600 group-hover:border-green-400 transition-colors duration-300">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <h3 className="font-bold text-lg text-white mb-2 group-hover:text-green-300 transition-colors duration-300">
                  {member.name}
                </h3>

                <p className="text-yellow-400 text-sm mb-4 font-semibold">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const SponsorsSection: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="font-pixel text-3xl md:text-5xl mb-12 text-green-400 animate-slide-in-down">
          Sponsors
        </h2>

        <div className="relative">
          {/* Decorative borders */}
          <div className="absolute inset-0 border-2 border-green-400/30 rounded-2xl transform rotate-1"></div>
          <div className="absolute inset-0 border-2 border-purple-400/20 rounded-2xl transform -rotate-1"></div>

          <div className="relative bg-black/60 backdrop-blur-sm border border-gray-700 rounded-2xl p-16 hover:border-green-400 transition-all duration-500">
            <div className="space-y-8">
              <div className="text-6xl md:text-8xl animate-pulse">🚀</div>

              {/* Changed heading */}
              <h3 className="font-pixel text-2xl md:text-4xl text-purple-400 mb-4">
                Want to sponsor us … ?
              </h3>

              <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                We’re working with amazing sponsors to bring you the best hackathon
                experience. Download our sponsorship brochure below!
              </p>

              {/* Button to download brochure */}
              <div>
                <a
                  href="/brochure.pdf" // put brochure.pdf inside /public folder
                  download="EWB_Sponsorship_Brochure.pdf" // optional custom filename
                  className="inline-block bg-green-500 text-black font-semibold px-6 py-3 rounded-lg hover:bg-green-400 transition-colors duration-300"
                >
                  Download Brochure
                </a>
              </div>

              {/* Decorative bouncing dots */}
              <div className="flex justify-center space-x-4 mt-6">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-bounce"></div>
                <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce delay-100"></div>
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce delay-200"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


const FAQSection = () => {
  const faqs = [
    {
      question: "What is Hackerrupt '25?",
      answer:
        "HackElite '24 is a premier hackathon event where developers, designers, and innovators come together to build amazing solutions in 24 hours. It's a platform to showcase your skills, learn new technologies, and network with like-minded individuals.",
    },
    {
      question: "Who can participate in  Hackerrupt '25?",
      answer:
        "HackElite '24 is open to all students, professionals, and tech enthusiasts. Whether you're a beginner or an expert, everyone is welcome to participate and contribute their unique skills to create innovative solutions.",
    },
    {
      question: "How many members can be in a team?",
      answer:
        "Teams can have a minimum of 2 members and a maximum of 4 members. You can form teams with your friends or join other participants during the team formation session at the event.",
    },
    {
      question: "What is the format of  Hackerrupt '25?",
      answer:
        "HackElite '24 is a 24-hour hackathon where teams work on building solutions for various problem statements. The event includes mentorship sessions, workshops, networking opportunities, and ends with project presentations and awards.",
    },
    {
      question: "What are the prizes for the winners?",
      answer:
        "Winners will receive exciting prizes including cash rewards, certificates, internship opportunities, and exclusive swag. Special recognition will be given to the most innovative solutions and best use of specific technologies.",
    },
    {
      question: "What do I need to bring to the hackathon?",
      answer:
        "Bring your laptop, chargers, any hardware you might need, and your enthusiasm! We'll provide food, drinks, internet, and a great venue. Don't forget to bring a valid ID for registration.",
    },
    {
      question: "What is the prize pool?",
      answer:
        "Hackerrupt '25 offers a grand prize pool worth over ₹30,000, along with exclusive goodies, internship opportunities, and certificates for top-performing teams.",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="font-pixel text-3xl md:text-5xl mb-12 text-center text-green-400 animate-slide-in-down">FAQ</h2>

        <div className="bg-black/40 backdrop-blur-sm border border-gray-700 rounded-lg p-6">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-gray-700 rounded-lg px-6 hover:border-green-400 transition-colors duration-300"
              >
                <AccordionTrigger className="text-left text-white hover:text-green-300 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-4 leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  )
}

const GallerySection = () => {
  const galleryImages = [
    "/gallery1.jpg",
    "/gallery2.jpg",
    "/gallery3.jpg",
    "/gallery4.jpg",
    "/gallery5.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () =>
    setCurrentIndex((p) => (p + 1) % galleryImages.length);
  const prevSlide = () =>
    setCurrentIndex((p) => (p - 1 + galleryImages.length) % galleryImages.length);

  // ✅ Auto-play effect (carousel slideshow)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((p) => (p + 1) % galleryImages.length);
    }, 4000); // 4 seconds per slide
    return () => clearInterval(interval);
  }, [galleryImages.length]);

  return (
    <section id="gallery" className="relative z-10 w-full min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="font-pixel text-3xl md:text-5xl mb-8 text-green-400 tracking-wide">
          GALLERY
        </h2>

        {/* Carousel */}
        <div className="relative overflow-hidden rounded-xl border border-green-500/40 bg-black/30 backdrop-blur-sm shadow-xl">
          {/* Track */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {galleryImages.map((img, i) => (
              <div key={i} className="w-full flex-shrink-0">
                <img
                  src={img}
                  alt={`Gallery ${i + 1}`}
                  className="w-full h-60 sm:h-80 md:h-[450px] object-cover"
                />
              </div>
            ))}
          </div>

          {/* Left arrow */}
          <button
            onClick={prevSlide}
            aria-label="Previous"
            className="absolute top-1/2 left-2 sm:left-4 -translate-y-1/2 h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 
                       rounded-full bg-green-500 text-black text-lg sm:text-xl shadow-lg hover:bg-green-400 transition"
          >
            &#8592;
          </button>

          {/* Right arrow */}
          <button
            onClick={nextSlide}
            aria-label="Next"
            className="absolute top-1/2 right-2 sm:right-4 -translate-y-1/2 h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 
                       rounded-full bg-green-500 text-black text-lg sm:text-xl shadow-lg hover:bg-green-400 transition"
          >
            &#8594;
          </button>
        </div>

        {/* Dots */}
        <div className="mt-4 flex justify-center gap-2">
          {galleryImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full transition ${
                currentIndex === i ? "bg-green-400" : "bg-gray-600 hover:bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};


const ContactSection = () => {
  return (
    <footer className="bg-black text-gray-300 py-12 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Column 1: Branding */}
        <div className="pl-6 md:pl-12">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text text-transparent">
            Hackerrupt '25
          </h2>
          <p className="mt-2">International Hackathon</p>

          {/* Contact Us section */}
  <div className="mt-4 text-gray-300">
    <h3 className="text-lg font-semibold text-green-400 flex items-center space-x-2">
      <i className="bi bi-telephone-fill"></i>
      <span>Contact Us</span>
    </h3>

    <div className="mt-3 space-y-4">
      {/* Contact 1 */}
      <div>
        <p className="flex items-center space-x-2">
          <i className="bi bi-person-fill text-purple-400"></i>
          <span className="font-medium">Mithun S</span>
        </p>
        <p className="flex items-center space-x-2 ml-6 mt-1">
          <i className="bi bi-telephone text-green-400"></i>
          <a href="tel:+917010341676" className="hover:text-green-400">
            +91 70103 41676
          </a>
        </p>
      </div>

      {/* Contact 2 */}
      <div>
        <p className="flex items-center space-x-2">
          <i className="bi bi-person-fill text-purple-400"></i>
          <span className="font-medium">Kiran M S</span>
        </p>
        <p className="flex items-center space-x-2 ml-6 mt-1">
          <i className="bi bi-telephone text-green-400"></i>
          <a href="tel:+918825594439" className="hover:text-green-400">
            +91 88255 94439
          </a>
        </p>
      </div>
    </div>
  </div>
        </div>

        {/* Column 2: Venue */}
        <div>
          <h3 className="text-green-400 font-semibold mb-4">Venue Address</h3>
          <p>
            Sri Venkateswara College Of Engineering, <br />
            Sriperumbudur,Kanchipuram dt. <br />
            Chennai, Tamil Nadu – 600123
          </p>

          <h3 className="text-green-400 font-semibold mt-6 mb-2">Branding Guidelines</h3>
          <a href="#" className="text-white-400 hover:underline">
            SVCE Branding
          </a>
        </div>

        {/* Column 3: Links */}
        <div>
          <h3 className="text-green-400 font-semibold mb-4">Additional Links</h3>
          <ul className="space-y-2">
            <li><a href="https://ace-interrupt.netlify.app/home" className="hover:text-green-400">ACE website</a></li>
            <li><a href="https://www.svce.ac.in/" className="hover:text-green-400">SVCE website</a></li>
          </ul>
        </div>

        {/* Column 4: Map */}
        <div>
          <h3 className="text-green-400 font-semibold mb-4">Location</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.4372901100777!2d79.94934537417062!3d12.959889387352392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a528cfa7c3a2b13%3A0xf4766f6f43c5a1d2!2sSri%20Venkateswara%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1726847000000!5m2!1sen!2sin"
            width="100%"
            height="220"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="text-center text-sm text-gray-500 mt-12 border-t border-gray-700 pt-6">
        © 2025 Hackerrupt'25. All rights reserved.
      </div>
    </footer>
  )
}

// Main App Component
export default function App() {
  const canvasRef = useRef(null)
  const [activeSection, setActiveSection] = useState("home")
  const [menuOpen, setMenuOpen] = useState(false);

  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    domains: useRef(null),
    timeline: useRef(null),
    teams: useRef(null),
    sponsors: useRef(null),
    faq: useRef(null),
    gallery: useRef(null),
    contact: useRef(null),
  }

  const scrollToSection = (sectionName) => {
    setActiveSection(sectionName)
    sectionRefs[sectionName].current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100

      Object.entries(sectionRefs).forEach(([name, ref]) => {
        if (ref.current) {
          const { offsetTop, offsetHeight } = ref.current
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(name)
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    let width, height, particles, animationFrameId

    const mouse = {
      x: undefined,
      y: undefined,
      radius: 120, // Area of effect for mouse interaction
    }

    const handleMouseMove = (event) => {
      mouse.x = event.clientX
      mouse.y = event.clientY
    }

    const handleMouseOut = () => {
      mouse.x = undefined
      mouse.y = undefined
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseout", handleMouseOut)

    class Particle {
      constructor(x, y, rowIndex) {
        this.originX = x
        this.originY = y
        this.rowIndex = rowIndex
        this.x = x
        this.y = y
        this.size = 2
        this.vx = 0 // velocity x
        this.vy = 0 // velocity y
        this.ease = 0.06 // springiness
        this.friction = 0.92 // energy loss
        this.angle = this.originX * 0.05 // Offset wave start
      }

      draw(context) {
        const distanceToOrigin = Math.hypot(this.x - this.originX, this.y - this.originY)
        const opacity = 1 - Math.min(1, distanceToOrigin / 60)
        const sizeFactor = 1 + Math.min(1, distanceToOrigin / 50) * 0.5

        context.fillStyle = `rgba(5, 255, 161, ${opacity})`
        context.beginPath()
        context.arc(this.x, this.y, this.size * sizeFactor, 0, Math.PI * 2)
        context.fill()
      }

      update() {
        // Determine the moving target for the spring effect
        let targetX = this.originX
        let targetY = this.originY
        const amplitude = 15
        const speed = 0.02

        if (this.rowIndex % 2 === 0) {
          // Even rows move horizontally
          targetX = this.originX + Math.sin(this.angle) * amplitude
        } else {
          // Odd rows move vertically
          targetY = this.originY + Math.sin(this.angle) * amplitude
        }
        this.angle += speed

        // Repulsion force from mouse
        if (mouse.x !== undefined) {
          const dx = this.x - mouse.x
          const dy = this.y - mouse.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < mouse.radius) {
            const forceDirectionX = dx / distance
            const forceDirectionY = dy / distance
            const force = (mouse.radius - distance) / mouse.radius

            this.vx += forceDirectionX * force * 2.5
            this.vy += forceDirectionY * force * 2.5
          }
        }

        // Attraction force to the moving target (spring effect)
        this.vx += (targetX - this.x) * this.ease
        this.vy += (targetY - this.y) * this.ease

        // Apply friction
        this.vx *= this.friction
        this.vy *= this.friction

        // Update position
        this.x += this.vx
        this.y += this.vy
      }
    }

    const init = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
      particles = []
      const gap = 28 // Gap between dots
      for (let y = 0; y < height; y += gap) {
        const rowIndex = Math.floor(y / gap)
        for (let x = 0; x < width; x += gap) {
          particles.push(new Particle(x, y, rowIndex))
        }
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height)
      particles.forEach((p) => {
        p.update()
        p.draw(ctx)
      })
      animationFrameId = requestAnimationFrame(animate)
    }

    const handleResize = () => {
      cancelAnimationFrame(animationFrameId)
      init()
      animate()
    }

    window.addEventListener("resize", handleResize)

    init()
    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseout", handleMouseOut)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="bg-black min-h-screen text-white font-sans overflow-hidden relative">
      {/* Background Canvas */}
      <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-0 opacity-80"></canvas>

      {/* Background Gradient */}
      <div className="fixed top-0 left-0 w-full h-1/2 bg-gradient-to-b from-green-900/50 to-transparent z-0"></div>

{/* Header */}
<header className="fixed top-0 left-0 w-full p-4 z-20 backdrop-blur-md">
  <div className="container mx-auto flex justify-between items-center bg-black/20 backdrop-blur-sm border-t-2 border-green-400 py-2 px-4">

    {/* Logo */}
    <div className="text-lg font-bold text-green-400">HACKERRUPT</div>

    {/* Desktop Navigation */}
    <nav className="hidden md:flex items-center space-x-4 text-sm sm:text-base">
      <NavLink onClick={() => scrollToSection("home")} isActive={activeSection === "home"}>Home</NavLink>
      <NavLink onClick={() => scrollToSection("about")} isActive={activeSection === "about"}>About</NavLink>
      <NavLink onClick={() => scrollToSection("domains")} isActive={activeSection === "domains"}>Domains</NavLink>
      <NavLink onClick={() => scrollToSection("timeline")} isActive={activeSection === "timeline"}>Timeline</NavLink>
      <NavLink onClick={() => scrollToSection("teams")} isActive={activeSection === "teams"}>Team</NavLink>
      <NavLink onClick={() => scrollToSection("sponsors")} isActive={activeSection === "sponsors"}>Sponsors</NavLink>
      <NavLink onClick={() => scrollToSection("faq")} isActive={activeSection === "faq"}>FAQ</NavLink>
      <NavLink onClick={() => scrollToSection("gallery")} isActive={activeSection === "gallery"}>Gallery</NavLink>
      <NavLink onClick={() => scrollToSection("contact")} isActive={activeSection === "contact"}>Contact Us</NavLink>
    </nav>

    {/* Mobile Toggle Button */}
    <button
      className="md:hidden flex flex-col space-y-1.5 focus:outline-none"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      <span className="block w-6 h-0.5 bg-green-400"></span>
      <span className="block w-6 h-0.5 bg-green-400"></span>
      <span className="block w-6 h-0.5 bg-green-400"></span>
    </button>
  </div>

  {/* Mobile Dropdown Menu */}
  {menuOpen && (
    <div className="md:hidden bg-black/95 border-t border-green-400 flex flex-col items-center py-6 space-y-4">
      <NavLink onClick={() => { scrollToSection("home"); setMenuOpen(false); }} isActive={activeSection === "home"}>Home</NavLink>
      <NavLink onClick={() => { scrollToSection("about"); setMenuOpen(false); }} isActive={activeSection === "about"}>About</NavLink>
      <NavLink onClick={() => { scrollToSection("domains"); setMenuOpen(false); }} isActive={activeSection === "domains"}>Domains</NavLink>
      <NavLink onClick={() => { scrollToSection("timeline"); setMenuOpen(false); }} isActive={activeSection === "timeline"}>Timeline</NavLink>
      <NavLink onClick={() => { scrollToSection("teams"); setMenuOpen(false); }} isActive={activeSection === "teams"}>Team</NavLink>
      <NavLink onClick={() => { scrollToSection("sponsors"); setMenuOpen(false); }} isActive={activeSection === "sponsors"}>Sponsors</NavLink>
      <NavLink onClick={() => { scrollToSection("faq"); setMenuOpen(false); }} isActive={activeSection === "faq"}>FAQ</NavLink>
      <NavLink onClick={() => { scrollToSection("gallery"); setMenuOpen(false); }} isActive={activeSection === "gallery"}>Gallery</NavLink>
      <NavLink onClick={() => { scrollToSection("contact"); setMenuOpen(false); }} isActive={activeSection === "contact"}>Contact Us</NavLink>
    </div>
  )}
</header>


      {/* Social Links */}
      <div className="fixed left-4 bottom-4 z-20 hidden md:flex flex-col items-center space-y-4">
        <span className="writing-mode-vertical-rl rotate-180 uppercase text-xs tracking-widest">Follow us on</span>
        <div className="w-px h-16 bg-green-400"></div>
        <a href="https://www.instagram.com/acesvce?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="hover:text-green-300 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </a>
        <a href="https://www.linkedin.com/company/ace-svce/" className="hover:text-green-300 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </a>
      </div>

      {/* Wireframe Globe */}
      <div className="fixed left-4 top-24 z-10 hidden md:block opacity-30">
        <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="48" stroke="#05FFa1" strokeWidth="2" />
          <ellipse cx="50" cy="50" rx="48" ry="15" stroke="#05FFa1" strokeWidth="2" />
          <ellipse cx="50" cy="50" rx="48" ry="30" stroke="#05FFa1" strokeWidth="2" transform="rotate(90 50 50)" />
          <ellipse cx="50" cy="50" rx="48" ry="22" stroke="#05FFa1" strokeWidth="1.5" strokeDasharray="4 4" />
        </svg>
      </div>

      <main className="relative z-10">
        {/* Home Section */}
        <section ref={sectionRefs.home} className="section-slide">
          <HomeSection />
        </section>

        {/* About Section */}
        <section ref={sectionRefs.about} className="section-slide">
          <AboutSection />
        </section>

        {/* Domains Section */}
        <section ref={sectionRefs.domains} className="section-slide">
          <DomainsSection />
        </section>

        {/* Timeline Section */}
        <section ref={sectionRefs.timeline} className="section-slide">
          <TimelineSection />
        </section>

        {/* Teams Section */}
        <section ref={sectionRefs.teams} className="section-slide">
          <TeamsSection />
        </section>

        {/* Sponsors Section */}
        <section ref={sectionRefs.sponsors} className="section-slide">
          <SponsorsSection />
        </section>

        {/* FAQ Section */}
        <section ref={sectionRefs.faq} className="section-slide">
          <FAQSection />
        </section>

        {/* Gallery Section */}
        <section ref={sectionRefs.gallery} className="section-slide">
          <GallerySection />
        </section>

        {/* Contact Section */}
        <section ref={sectionRefs.contact} className="section-slide">
          <ContactSection />
        </section>
      </main>

      <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Roboto+Mono:wght@400;700&display=swap');
                
                .font-pixel {
                    font-family: 'Press Start 2P', cursive;
                }
                .font-sans {
                    font-family: 'Roboto Mono', monospace;
                }
                .writing-mode-vertical-rl {
                    writing-mode: vertical-rl;
                }
                
                .hack-button {
                    position: relative;
                    padding: 1rem 2.5rem;
                    color: white;
                    font-weight: bold;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    border: none;
                    clip-path: polygon(0% 0%, 100% 0%, 92% 50%, 100% 100%, 0% 100%, 8% 50%);
                    transition: transform 0.2s ease, filter 0.3s ease;
                }
                .hack-button:hover {
                    transform: scale(1.05);
                    filter: brightness(1.2);
                }
                .hack-button span {
                    position: relative;
                    z-index: 1;
                }

                /* Added section slide animations */
                .section-slide {
                    opacity: 0;
                    transform: translateY(50px);
                    animation: slideInSection 0.8s ease-out forwards;
                }

                @keyframes slideInSection {
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes slide-in-down {
                    from {
                        opacity: 0;
                        transform: translateY(-30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes slide-in-left {
                    from {
                        opacity: 0;
                        transform: translateX(-30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                @keyframes slide-in-right {
                    from {
                        opacity: 0;
                        transform: translateX(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                @keyframes slide-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-slide-in-down {
                    animation: slide-in-down 0.6s ease-out forwards;
                }

                .animate-slide-in-left {
                    animation: slide-in-left 0.6s ease-out forwards;
                }

                .animate-slide-in-right {
                    animation: slide-in-right 0.6s ease-out forwards;
                }

                .animate-slide-in-up {
                    animation: slide-in-up 0.6s ease-out forwards;
                }

                @keyframes bob {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-15px); }
                }
                .animate-bob {
                    animation: bob 4s ease-in-out infinite;
                }

                .text-shadow-glow {
                    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #f09, 0 0 20px #f09, 0 0 25px #f09, 0 0 30px #f09, 0 0 35px #f09;
                }
                
                @keyframes text-glitch-anim {
                    0% {
                        text-shadow: 0.05em 0 0 rgba(180, 0, 255, 0.75), -0.05em 0 0 rgba(0, 255, 255, 0.75), 0 0.025em 0 rgba(255, 230, 0, 0.75);
                    }
                    15% {
                         text-shadow: 0.05em 0 0 rgba(180, 0, 255, 0.75), -0.05em 0 0 rgba(0, 255, 255, 0.75), 0 -0.05em 0 rgba(255, 230, 0, 0.75);
                    }
                    16% {
                         text-shadow: -0.05em 0 0 rgba(180, 0, 255, 0.75), 0.025em 0 0 rgba(0, 255, 255, 0.75), 0 0.05em 0 rgba(255, 230, 0, 0.75);
                    }
                    50% {
                         text-shadow: -0.05em 0 0 rgba(180, 0, 255, 0.75), 0.025em 0 0 rgba(0, 255, 255, 0.75), 0 -0.025em 0 rgba(255, 230, 0, 0.75);
                    }
                     100% {
                         text-shadow: -0.025em 0 0 rgba(180, 0, 255, 0.75), -0.025em 0 0 rgba(0, 255, 255, 0.75), -0.025em -0.025em 0 rgba(255, 230, 0, 0.75);
                    }
                }
                .animate-text-glitch {
                    color: #f0f0f0;
                    animation: text-glitch-anim 3s infinite linear alternate;
                }

                @keyframes glow {
                    from { filter: hue-rotate(0deg); }
                    to { filter: hue-rotate(360deg); }
                }
                .animate-glow {
                    animation: glow 5s linear infinite;
                }

            `}</style>
    </div>
  )
}
