import { 
Smartphone, 
Globe, 
  Handshake, 
  TrendingUp, 
  Instagram, 
  Phone, 
  CheckCircle2, 
  ArrowRight, 
  MessageCircle,
  BookOpen,
  Target,
  Users,
  Award,
  IndianRupee,
  Zap
} from 'lucide-react';
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-[linear-gradient(to_bottom_right,var(--color-brand-purple),var(--color-brand-blue))] rounded-xl flex items-center justify-center shadow-lg">
            <Zap className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-[Space_Grotesk] font-bold tracking-tight">Digital Solution</span>
        </div>
        <div className="hidden md:flex items-center gap-8 font-medium">
          <a href="#about" className="hover:text-brand-purple transition-colors">About</a>
          <a href="#workshop" className="hover:text-brand-purple transition-colors">Workshop</a>
          <a href="#founder" className="hover:text-brand-purple transition-colors">Founder</a>
          <a href="#enroll" className="btn-primary py-2 px-6 text-sm">Enroll Now</a>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-purple rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-brand-blue rounded-full blur-[120px]" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="opacity-1 translate-y-0">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-brand-purple uppercase bg-brand-purple/10 rounded-full border border-brand-purple/20">
            Empowering Digital Entrepreneurs
          </span>
          <h1 className="text-5xl md:text-7xl font-[Space_Grotesk] font-bold mb-6 leading-tight">
            Start Your Online Business <br />
            <span className="gradient-text">Journey Today 🚀</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Learn how to build an online business using just your mobile phone and internet. No complex setups, just pure strategy.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a href="#enroll" className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2">
              Enroll Now – ₹199 <ArrowRight className="w-5 h-5" />
            </a>
            <a href="https://chat.whatsapp.com/your-group-link" target="_blank" rel="noopener noreferrer" className="btn-secondary w-full sm:w-auto flex items-center justify-center gap-2">
              Join Community <Users className="w-5 h-5" />
            </a>
          </div>

          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white shadow-xl rounded-2xl border border-slate-100">
            <span className="text-2xl">🔥</span>
            <span className="font-bold text-slate-800">4-Day Online Business Workshop – ₹199 Only</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  const features = [
    { icon: Smartphone, title: "Mobile-First Business", desc: "Build everything using just your smartphone." },
    { icon: Globe, title: "Internet Opportunities", desc: "Unlock global markets from your home." },
    { icon: Handshake, title: "Brand Collaborations", desc: "Learn how to partner with top brands." },
    { icon: TrendingUp, title: "Personal Growth", desc: "Develop a mindset for success and scale." },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="opacity-1 translate-x-0">
            <h2 className="text-4xl font-[Space_Grotesk] font-bold mb-6">What is Digital Solution?</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Digital Solution is a thriving community built for the modern digital generation. We help individuals start and grow online businesses using mobile-first strategies, social media platforms, and personal branding.
            </p>
            <div className="space-y-4">
              {['Mobile-first strategies', 'Social media platforms', 'Brand collaborations', 'Personal branding'].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-brand-purple w-5 h-5" />
                  <span className="font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <div
                key={i}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:shadow-brand-blue/5 transition-all group"
              >
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-md mb-6 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                  <f.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">{f.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Founder = () => {
  return (
    <section id="founder" className="py-24 gradient-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-[40px] p-8 md:p-16 shadow-2xl border border-white flex flex-col md:flex-row items-center gap-12">
<img src="./photo.jpeg" alt="Srinu Reddy" className="w-full max-w-[320px] aspect-[3/4] rounded-[32px] overflow-hidden shadow-2xl shrink-0 object-cover" />
          
          <div className="flex-1">
            <h2 className="text-4xl font-[Space_Grotesk] font-bold mb-2">Meet Srinu Reddy</h2>
            <p className="text-brand-purple font-bold mb-6 text-lg uppercase tracking-wider">Founder & Mentor</p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Srinu Reddy is a digital entrepreneur with 2+ years of experience helping individuals start their online business journey. He has mentored hundreds of students to find their path in the digital economy.
            </p>
            
            <div className="bg-slate-50 p-6 rounded-2xl mb-8 border-l-4 border-brand-orange">
              <p className="italic text-slate-700 font-medium">
                "To empower people to create opportunities through online business and digital collaboration."
              </p>
            </div>
            
            <div className="flex flex-wrap gap-6">
              <a href="https://instagram.com/srinureddyofficial_" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-700 hover:text-brand-purple transition-colors font-semibold">
                <Instagram className="w-5 h-5" /> @srinureddyofficial_
              </a>
              <a href="tel:+918008491685" className="flex items-center gap-2 text-slate-700 hover:text-brand-purple transition-colors font-semibold">
                <Phone className="w-5 h-5" /> +91 8008491685
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Workshop = () => {
  const days = [
    {
      day: 1,
      title: "Business Introduction",
      points: ["Business Introduction", "Concept clarity", "Introduction to Digital Solution"]
    },
    {
      day: 2,
      title: "Business Model",
      points: ["Understanding business model", "Requirements to start", "Mindset & concepts", "Brand collaborations"]
    },
    {
      day: 3,
      title: "Growth Strategies",
      points: ["Growth strategies", "Skills required", "Income models", "Personal branding", "Surprise session"]
    },
    {
      day: 4,
      title: "Live Action Plan",
      points: ["30-Min Live Call with Srinu Reddy", "Step-by-step startup guide", "Income plan (₹15K–₹20K/month)", "Personal action plan"]
    },
    ];

  return (
    <section id="workshop" className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-[Space_Grotesk] font-bold mb-4">4-Day Online Business Workshop</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8">
            One hour daily sessions to help you understand and build your online business.
          </p>
          <div className="inline-block px-8 py-3 bg-brand-orange rounded-full text-white font-bold text-xl shadow-lg shadow-brand-orange/20">
            ₹199 Only
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {days.map((d, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all"
            >
              <div className="text-brand-orange font-[Space_Grotesk] font-bold text-4xl mb-4 opacity-50">0{d.day}</div>
              <ul className="space-y-3">
                {d.points.map((p, j) => (
                  <li key={j} className="flex items-start gap-2 text-slate-400 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Benefits = () => {
  const benefits = [
    { icon: BookOpen, title: "Online Business Fundamentals" },
    { icon: Smartphone, title: "Social Media Opportunities" },
    { icon: Award, title: "Personal Branding" },
    { icon: Target, title: "Digital Mindset" },
    { icon: Handshake, title: "Brand Collaborations" },
    { icon: IndianRupee, title: "Income Strategies" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-[Space_Grotesk] font-bold mb-4">What You Will Learn</h2>
          <p className="text-slate-600">Master the skills needed for the digital era.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center p-6"
            >
              <div className="w-16 h-16 bg-brand-purple/10 text-brand-purple rounded-2xl flex items-center justify-center mb-4">
                <b.icon className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-slate-800">{b.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Enrollment = () => {
  const perks = [
    " 4 Days Workshop Recordings Access",
    " 30-min Personal Live Call with Srinu Reddy",
    " Step-by-Step Income Blueprint",
    " ₹15K–₹20K/month Realistic Roadmap",
    " Lifetime Community Access",
    " Brand Collaboration Strategies",
    " Mobile-First Business Templates",
    " Direct WhatsApp Support",
    " Bonus Surprise Content"
  ];

  return (
    <section id="enroll" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden grid lg:grid-cols-2">
          <div className="p-10 md:p-16 bg-[linear-gradient(to_bottom_right,var(--color-brand-purple),var(--color-brand-blue))] text-white">
            <h2 className="text-4xl font-[Space_Grotesk] font-bold mb-8 text-white">Secure Your Spot – ₹199</h2>
            <div className="space-y-6">
              {perks.map((p, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="bg-white/20 p-1 rounded-full">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg font-medium">{p}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="p-10 md:p-16 flex flex-col justify-center">
            <h3 className="text-2xl font-[Space_Grotesk] font-bold mb-8">How to Enroll</h3>
            <div className="space-y-8 mb-10">
              {[
                { step: 1, text: "Scan QR & Pay ₹199 via UPI" },
                { step: 2, text: "Take payment screenshot" },
                { step: 3, text: "Send screenshot on WhatsApp with your name" },
                { step: 4, text: "Get access to workshop" },
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-6">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-500 shrink-0">
                    {s.step}
                  </div>
                  <p className="font-medium text-slate-700">{s.text}</p>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col gap-6">
              <div className="text-center">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Scan to Pay</p>
                <img src="./QR.jpeg" alt="UPI Payment QR Code" className="w-48 h-48 max-w-full mx-auto object-contain rounded-2xl border border-slate-200 shadow-inner" />
              </div>
              
              <a href="https://wa.me/918008491685?text=Hi%20Srinu,%20I've%20paid%20₹199%20for%20the%20workshop.%20Here%20is%20my%20screenshot." target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center justify-center gap-3">
                <MessageCircle className="w-6 h-6" /> Send Screenshot on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-[Space_Grotesk] font-bold mb-6">Have Questions?</h2>
        <p className="text-lg text-slate-600 mb-12">
          If you're confused, contact us directly and get personal guidance. We're here to help you start your journey.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a href="https://wa.me/918008491685" className="btn-secondary w-full sm:w-auto flex items-center justify-center gap-2">
            <MessageCircle className="w-5 h-5" /> Talk on WhatsApp
          </a>
          <a href="tel:+918008491685" className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2">
            <Phone className="w-5 h-5" /> Call Srinu Reddy
          </a>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-[linear-gradient(to_bottom_right,var(--color-brand-purple),var(--color-brand-blue))] rounded-xl flex items-center justify-center">
                <Zap className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-[Space_Grotesk] font-bold tracking-tight">Digital Solution</span>
            </div>
            <p className="text-slate-400 max-w-sm leading-relaxed">
              Digital Solution – Empowering digital entrepreneurs through education, collaboration, and community. Start your journey with us today.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#workshop" className="hover:text-white transition-colors">Workshop</a></li>
              <li><a href="#enroll" className="hover:text-white transition-colors">Enroll</a></li>
              <li><a href="https://chat.whatsapp.com/your-group-link" className="hover:text-white transition-colors">Community</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-lg">Contact</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> +91 8008491685</li>
              <li className="flex items-center gap-2"><Instagram className="w-4 h-4" /> @srinureddyofficial_</li>
              <li className="flex items-center gap-2"><MessageCircle className="w-4 h-4" /> WhatsApp Support</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-10 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Digital Solution. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Founder />
      <Workshop />
      <Benefits />
      <Enrollment />
      <Contact />
      <Footer />
    </div>
  );
}
