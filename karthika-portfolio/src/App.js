import { useState, useEffect, useMemo, useCallback, memo } from 'react';
import { Download, Mail, Phone, MapPin, Github, Linkedin, Briefcase, GraduationCap, Code, Send, Award, ExternalLink, ArrowUp, Moon, Sun, Sparkles } from 'lucide-react';

// Data Layer
const portfolioData = {
  personal: {
    name: "KARTHIKA A",
    title: "Data Analyst",
    experience: "1.4 Years Experience",
    email: "karthikaarul@email.com",
    phone: "+91 9384403678",
    location: "Attur, Tamil Nadu",
    github: "https://github.com/Karthikaarul",
    linkedin: "https://www.linkedin.com/in/karthika-a-22b687220",
    resumeUrl: "https://drive.google.com/file/d/19sTVLZFhMMcBKDdj3bERNbvy5u3qefKI/view?usp=sharing",
    photo: "/karthika.jpeg"
  },
  about: [
    "I'm a passionate Data Analyst with 1.4 years of professional experience specializing in transforming complex datasets into actionable business insights. My expertise spans across Python, SQL, Power BI, and advanced statistical modeling, enabling me to deliver data-driven solutions that drive strategic decision-making.",
    "Throughout my career at CubeAI Solutions, I've successfully handled large-scale datasets exceeding 270M rows, built predictive analytics systems, and created interactive dashboards that have improved operational efficiency by 35%. I'm proficient in end-to-end data analytics - from data collection and preprocessing to visualization and presenting insights to stakeholders.",
    "I thrive in collaborative environments where I can leverage data to solve real-world business challenges. My goal is to continue growing as a data professional while contributing to organizations that value innovation, data integrity, and evidence-based decision making. I'm particularly interested in machine learning applications, business intelligence, and predictive analytics."
  ],
  experience: [
    {
      title: "Data Analyst",
      company: "CubeAI Solutions",
      period: "Jul 2024 - Present",
      responsibilities: [
        "Spearhead data analysis initiatives for enterprise clients, processing and analyzing massive datasets exceeding 270M+ rows using Python, SQL, and Excel. Implemented advanced data preprocessing techniques and OLTP-based data handling on AWS RDS, improving data accuracy by 45% and query performance by 60%.",
        "Architected and deployed a Ship Inspection Risk Prediction System integrating Power BI dashboards with a Flask-React web application. Developed machine learning models to predict optimal inspection intervals and assess risk factors. Implemented NLP algorithms to analyze ship age-based patterns, resulting in 40% improvement in inspection scheduling efficiency.",
        "Led the development of ACCL Business Analytics Dashboard - a comprehensive full-stack solution using Flask and React. Created dynamic reporting modules featuring month-wise and year-wise analytics for budget allocation, sales performance, growth metrics, and achievement tracking. Integrated advanced filtering capabilities and automated PowerPoint export functionality, reducing manual reporting time by 60%.",
        "Designed and implemented a Seasonal Forecasting & Time Series Dashboard utilizing advanced predictive models including Prophet and ARIMA algorithms. Developed React-based interactive visualizations to display seasonal patterns across multiple business modules, enabling proactive decision-making and resource allocation.",
        "Engineered automated ETL data pipelines and workflows that reduced manual data processing by 35% and improved report delivery speed by 50%. Implemented data quality checks and validation rules ensuring 99.5% data accuracy.",
        "Delivered comprehensive Power BI training workshop to 120+ engineering students, designing curriculum covering data modeling, DAX functions, and dashboard development. Achieved 95% positive feedback rating and improved participants' practical skills in business intelligence.",
        "Mentored and trained 5 junior analysts and interns in Python programming, Power BI, Machine Learning, Deep Learning, and NLP techniques. Developed training materials and hands-on projects that boosted team productivity by 20% and improved project delivery quality.",
        "Collaborated with cross-functional teams including product managers, software engineers, and business stakeholders to translate business requirements into analytical solutions. Presented data-driven insights and recommendations to C-level executives."
      ]
    }
  ],
  skills: [
    { title: 'Programming Languages', skills: 'Python (Advanced), SQL (Expert), R, VBA, JavaScript', icon: '💻' },
    { title: 'Data Visualization', skills: 'Power BI (Expert), Tableau, Matplotlib, Seaborn, Plotly', icon: '📊' },
    { title: 'Data Analysis Tools', skills: 'Excel (Advanced), Pandas, NumPy, Jupyter, Google Analytics', icon: '🔧' },
    { title: 'Database Management', skills: 'MySQL, PostgreSQL, MongoDB, AWS RDS, Azure SQL', icon: '🗄️' },
    { title: 'Statistical Analysis', skills: 'A/B Testing, Hypothesis Testing, Regression, Time Series', icon: '📈' },
    { title: 'Machine Learning', skills: 'Scikit-learn, Prophet, ARIMA, NLP, Predictive Modeling', icon: '🤖' },
    { title: 'Cloud & Big Data', skills: 'AWS (RDS, S3), Azure, Apache Spark, ETL Pipelines', icon: '☁️' },
    { title: 'Development Tools', skills: 'Git, Docker, Flask, React, REST APIs, Agile/Scrum', icon: '⚡' }
  ],
  projects: [
    {
      title: 'Lopera Analytics Dashboard',
      image: 'food.png',
      description: 'Designed and developed a comprehensive Power BI analytics dashboard for restaurant operations tracking sales performance, customer behavior patterns, and revenue trends across multiple locations. Implemented dynamic KPIs, automated daily reporting, and predictive analytics for inventory management. The dashboard helped management identify peak hours, optimize staffing, and increase revenue by 18%.',
      tools: 'Power BI, SQL Server, Excel, DAX',
      github: 'https://github.com/Karthikaarul/sales-analytics-dashboard',
      demo: 'https://github.com/Karthikaarul/sales-analytics-dashboard',
      video1: 'https://drive.google.com/file/d/1LC19dcalnQcctkzYJXOc9uuNyoJDvrCc/view?usp=sharing',
      video2:'https://drive.google.com/file/d/15qK0QDRiTMLla5axEvqFzjAoUrlf9W84/view?usp=sharing'
    },
    {
      title: 'ACCL Business Analytics Platform',
      image: 'erp.png',
      description: 'Built a full-stack business analytics platform using Flask and React for enterprise resource planning. Developed customer churn prediction models using Python machine learning libraries achieving 87% accuracy. Created automated reporting system with month-wise and year-wise budget analysis, sales forecasting, and achievement tracking. Integrated multi-filter capabilities and automated PowerPoint report generation, reducing manual reporting time by 60%.',
      tools: 'Python, Flask, React, Scikit-learn, Pandas, SQL',
      github: 'https://github.com/Karthikaarul/customer-churn-analysis',
      demo: 'https://github.com/Karthikaarul/customer-churn-analysis',
      video: 'https://drive.google.com/file/d/YOUR_FILE_ID_2/view?usp=sharing'
    },
    {
      title: 'Ship Inspection Risk Prediction System',
      image: 'Ship.png',
      description: 'Engineered a comprehensive risk prediction system for maritime vessel inspections combining Power BI dashboards with a Flask-React web interface. Implemented machine learning algorithms to predict inspection intervals based on historical data, vessel characteristics, and compliance records. Integrated NLP techniques for analyzing ship age-based inspection reports. The system improved inspection scheduling efficiency by 40% and helped identify high-risk vessels proactively.',
      tools: 'Python, NLP, Power BI, Flask, React, Machine Learning',
      github: 'https://github.com/Karthikaarul/market-basket-analysis',
      demo: 'https://github.com/Karthikaarul/market-basket-analysis',
      video: 'https://drive.google.com/file/d/YOUR_FILE_ID_3/view?usp=sharing'
    }
  ],
  certificates: [
    {
      title: 'Tableau',
      description: 'Professional certification validating expertise in building interactive dashboards, performing data blending, and applying advanced calculations and parameters in Tableau. Focused on transforming raw data into business-ready visual insights through storytelling and analytics best practices.',
      issuer: 'Cisco',
      year: '30-3-2025',
      skills:  'Tableau, Data Visualization, Dashboard Design, Business Intelligence, Data Storytelling'
    },
    
    {
      title: 'Data Analysis with Python',
      description: 'Comprehensive certification program focused on the complete data analytics workflow — from data collection and cleaning to exploratory data analysis, visualization, and statistical inference. Gained proficiency in Python libraries like Pandas, NumPy, Matplotlib, and Seaborn to analyze real-world datasets and present actionable insights.',
      issuer: 'IBM',
      year: '02-07-2024',
      skills: 'Python, Pandas, NumPy, Matplotlib, Seaborn, Data Cleaning, Exploratory Data Analysis'
    },
    {
      title: 'Full Stack with Python Programming',
      description: 'Intensive full-stack development certification covering Python backend development, REST API design, frontend integration, and database management. Learned to build dynamic web applications using Flask, SQL, and JavaScript, with an emphasis on data-driven architectures and performance optimization.',
      issuer: 'Guvi',
      year: '10-10-2023',
      skills: 'Python, Flask, SQL, JavaScript, API Development, Database Management, Web Development'
    },
    {
      title: 'AWS Certified Cloud Practitioner',
      description: 'Foundational certification demonstrating knowledge of AWS Cloud services, architecture, security, and pricing. Covers core AWS services including EC2, S3, RDS, and Lambda, along with cloud concepts and best practices.',
      issuer: 'Amazon Web Services',
      year: 'Ongoing',
      skills: 'AWS Cloud, RDS, S3, Cloud Architecture'
    }
  ]
};

// Custom Hook for Scroll Detection
const useScrollDetection = (threshold = 300) => {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    const handleScroll = () => setShowButton(window.scrollY > threshold);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);
  return showButton;
};

// Animated Card Component
const Card = memo(({ children, className = '', hoverable = true, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const baseStyles = {
    padding: '25px',
    background: 'linear-gradient(135deg, #f6f9fc 0%, #ffffff 100%)',
    borderRadius: '16px',
    border: '1px solid #e8ecf1',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    position: 'relative',
    overflow: 'hidden',
    marginBottom: '24px',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)'
  };

  const hoverStyles = hoverable && isHovered ? {
    transform: 'translateY(-8px) scale(1.02)',
    boxShadow: '0 12px 32px rgba(102, 126, 234, 0.2)'
  } : {};

  return (
    <div 
      style={{...baseStyles, ...hoverStyles}}
      onMouseEnter={() => hoverable && setIsHovered(true)}
      onMouseLeave={() => hoverable && setIsHovered(false)}
      className={className}
    >
      {isHovered && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
          animation: 'shimmer 2s infinite'
        }}/>
      )}
      {children}
    </div>
  );
});

// Animated Contact Item
const ContactItem = memo(({ icon: Icon, children, href, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '8px 14px',
        background: isHovered ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.08)',
        borderRadius: '10px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        fontSize: '14px',
        transition: 'all 0.3s ease',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
        cursor: href ? 'pointer' : 'default'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Icon size={18} style={{ 
        transition: 'transform 0.3s ease',
        transform: isHovered ? 'rotate(10deg) scale(1.1)' : 'rotate(0) scale(1)'
      }} />
      {href ? (
        <a href={href} style={{ color: 'white', textDecoration: 'none' }}>
          {children}
        </a>
      ) : (
        <span>{children}</span>
      )}
    </div>
  );
});

// Project Card Component
const ProjectCard = memo(({ project, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <Card delay={delay}>
      <div style={{ 
        position: 'relative', 
        overflow: 'hidden',
        borderRadius: '12px',
        marginBottom: '20px'
      }}>
        <img 
          src={project.image}
          alt={project.title}
          style={{
            width: '100%',
            height: '250px',
            objectFit: 'cover',
            borderRadius: '12px',
            border: '1px solid #e8ecf1',
            transition: 'all 0.5s ease',
            transform: imageLoaded ? 'scale(1)' : 'scale(1.1)',
            opacity: imageLoaded ? 1 : 0
          }}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
        />
        {!imageLoaded && (
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 1.5s infinite'
          }} />
        )}
      </div>
      <h3 style={{ 
        fontSize: '22px', 
        color: '#302b63', 
        marginBottom: '12px', 
        fontWeight: '700',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
        transition: 'all 0.5s ease 0.1s'
      }}>
        {project.title}
      </h3>
      <p style={{ 
        color: '#555', 
        lineHeight: '1.8', 
        marginBottom: '10px',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
        transition: 'all 0.5s ease 0.2s'
      }}>
        {project.description}
      </p>
      <p style={{ 
        color: '#667eea', 
        fontWeight: 'bold', 
        marginBottom: '16px',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
        transition: 'all 0.5s ease 0.3s'
      }}>
        Tools: {project.tools}
      </p>
      <div style={{ 
        display: 'flex', 
        gap: '12px', 
        flexWrap: 'wrap',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
        transition: 'all 0.5s ease 0.4s'
      }}>
        <AnimatedButton href={project.github} icon={Github} color="#667eea">
          View Code
        </AnimatedButton>
        <AnimatedButton href={project.demo} icon={ExternalLink} color="#764ba2">
          Live Demo
        </AnimatedButton>
      </div>
    </Card>
  );
});

// Animated Button Component
const AnimatedButton = memo(({ children, onClick, href, icon: Icon, color = '#667eea' }) => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '10px 20px',
    background: color,
    color: 'white',
    textDecoration: 'none',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '600',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    border: 'none',
    cursor: 'pointer',
    transform: isHovered ? 'translateY(-2px) scale(1.05)' : 'translateY(0) scale(1)',
    boxShadow: isHovered ? `0 8px 20px ${color}66` : `0 2px 8px ${color}33`
  };

  const content = (
    <>
      {Icon && <Icon size={18} style={{ 
        transition: 'transform 0.3s ease',
        transform: isHovered ? 'rotate(10deg)' : 'rotate(0)'
      }} />}
      {children}
    </>
  );

  const handlers = {
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false)
  };

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" style={buttonStyle} {...handlers}>
      {content}
    </a>
  ) : (
    <button onClick={onClick} style={buttonStyle} {...handlers}>
      {content}
    </button>
  );
});

// Skill Card Component with Animation
const SkillCard = memo(({ skill, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <Card delay={delay}>
      <div style={{
        fontSize: '32px',
        marginBottom: '12px',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'scale(1) rotate(0deg)' : 'scale(0) rotate(-180deg)',
        transition: 'all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)'
      }}>
        {skill.icon}
      </div>
      <h3 style={{ 
        fontSize: '18px', 
        fontWeight: '700', 
        marginBottom: '12px', 
        color: '#302b63',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
        transition: 'all 0.5s ease 0.2s'
      }}>
        {skill.title}
      </h3>
      <p style={{ 
        color: '#555',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
        transition: 'all 0.5s ease 0.3s'
      }}>
        {skill.skills}
      </p>
    </Card>
  );
});

// Navigation Button Component
const NavButton = memo(({ section, activeSection, onClick, children }) => {
  const isActive = activeSection === section;
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <button
      style={{
        padding: '10px 20px',
        border: 'none',
        borderRadius: '10px',
        cursor: 'pointer',
        fontSize: '14px',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        fontWeight: '600',
        letterSpacing: '0.3px',
        backgroundColor: isActive ? '#667eea' : 'rgba(255, 255, 255, 0.1)',
        color: isActive ? 'white' : 'rgba(255, 255, 255, 0.8)',
        boxShadow: isActive ? '0 4px 12px rgba(102, 126, 234, 0.4)' : 'none',
        transform: isHovered ? 'translateY(-2px) scale(1.05)' : 'translateY(0) scale(1)'
      }}
      onClick={() => onClick(section)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </button>
  );
});

// Floating particles background
const FloatingParticles = memo(() => {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    left: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5
  }));

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
      {particles.map(p => (
        <div
          key={p.id}
          style={{
            position: 'absolute',
            width: `${p.size}px`,
            height: `${p.size}px`,
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.3)',
            left: `${p.left}%`,
            bottom: '-20px',
            animation: `floatUp ${p.duration}s ${p.delay}s infinite ease-in-out`,
            boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)'
          }}
        />
      ))}
    </div>
  );
});

// Main Portfolio Component
export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('about');
  const [fadeIn, setFadeIn] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [particlesEnabled, setParticlesEnabled] = useState(true);
  
  const showBackToTop = useScrollDetection(300);

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes photoFloat {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-15px) rotate(5deg); }
      }
      @keyframes glowPulse {
        0%, 100% { opacity: 0.5; transform: scale(1); }
        50% { opacity: 0.9; transform: scale(1.2); }
      }
      @keyframes shimmer {
        0% { background-position: -200% 0; }
        100% { background-position: 200% 0; }
      }
      @keyframes floatUp {
        0% { 
          transform: translateY(0) translateX(0); 
          opacity: 0;
        }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { 
          transform: translateY(-100vh) translateX(${Math.random() * 100 - 50}px); 
          opacity: 0;
        }
      }
      @keyframes ripple {
        0% { transform: scale(1); opacity: 1; }
        100% { transform: scale(2); opacity: 0; }
      }
      @keyframes gradientShift {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    setFadeIn(false);
    const timer = setTimeout(() => setFadeIn(true), 100);
    return () => clearTimeout(timer);
  }, [activeSection]);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleNavigation = useCallback((section) => {
    setActiveSection(section);
  }, []);

  const bgColor = darkMode 
    ? 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)'
    : 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)';

  const styles = useMemo(() => ({
    container: {
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      width: '100%',
      minHeight: '100vh',
      margin: '0',
      padding: '20px',
      background: bgColor,
      backgroundSize: '400% 400%',
      animation: 'gradientShift 15s ease infinite',
      boxSizing: 'border-box',
      position: 'relative',
      transition: 'all 0.5s ease'
    },
    header: {
      background: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(20px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      color: 'white',
      padding: '40px 30px',
      borderRadius: '24px',
      marginBottom: '30px',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
      position: 'relative',
      overflow: 'hidden',
      opacity: isLoaded ? 1 : 0,
      transform: isLoaded ? 'translateY(0) scale(1)' : 'translateY(-50px) scale(0.9)',
      transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)',
      zIndex: 1
    },
    content: {
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      padding: '40px',
      borderRadius: '24px',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
      marginBottom: '40px',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      opacity: fadeIn ? 1 : 0,
      transform: fadeIn ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
      transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
      position: 'relative',
      zIndex: 1
    },
    sectionTitle: {
      fontSize: '32px',
      marginBottom: '30px',
      color: '#1a1a2e',
      fontWeight: '700',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      paddingBottom: '20px',
      borderBottom: '2px solid #e0e0e0',
      opacity: fadeIn ? 1 : 0,
      transform: fadeIn ? 'translateX(0)' : 'translateX(-30px)',
      transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
    },
    skillsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
      gap: '20px',
      marginTop: '30px'
    }
  }), [isLoaded, fadeIn, bgColor]);

  const renderSection = useMemo(() => {
    switch(activeSection) {
      case 'about':
        return (
          <div>
            <h2 style={styles.sectionTitle}>
              <Sparkles size={28} />
              About Me
            </h2>
            {portfolioData.about.map((para, idx) => (
              <p 
                key={idx} 
                style={{ 
                  fontSize: '17px', 
                  lineHeight: '1.8', 
                  color: '#555', 
                  marginTop: idx > 0 ? '15px' : 0,
                  opacity: fadeIn ? 1 : 0,
                  transform: fadeIn ? 'translateY(0)' : 'translateY(20px)',
                  transition: `all 0.6s ease ${0.3 + idx * 0.1}s`
                }}
              >
                {para}
              </p>
            ))}
          </div>
        );
      
      case 'experience':
        return (
          <div>
            <h2 style={styles.sectionTitle}>
              <Briefcase size={28} />
              Work Experience
            </h2>
            {portfolioData.experience.map((exp, idx) => (
              <Card key={idx} delay={idx * 100}>
                <div style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: '5px',
                  background: 'linear-gradient(180deg, #667eea 0%, #764ba2 100%)'
                }}></div>
                <h3 style={{ fontSize: '22px', color: '#302b63', margin: '0 0 8px 0', fontWeight: '700' }}>
                  {exp.title}
                </h3>
                <p style={{ fontSize: '16px', color: '#6b7280', margin: '0 0 16px 0', fontWeight: '500' }}>
                  {exp.company} | {exp.period}
                </p>
                <ul style={{ lineHeight: '1.8', color: '#555' }}>
                  {exp.responsibilities.map((resp, i) => (
                    <li 
                      key={i}
                      style={{
                        opacity: fadeIn ? 1 : 0,
                        transform: fadeIn ? 'translateX(0)' : 'translateX(-20px)',
                        transition: `all 0.4s ease ${0.5 + i * 0.1}s`
                      }}
                    >
                      {resp}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        );
      
      case 'skills':
        return (
          <div>
            <h2 style={styles.sectionTitle}>
              <Code size={28} />
              Technical Skills
            </h2>
            <div style={styles.skillsGrid}>
              {portfolioData.skills.map((skill, idx) => (
                <SkillCard key={idx} skill={skill} delay={idx * 100} />
              ))}
            </div>
          </div>
        );
      
      case 'projects':
        return (
          <div>
            <h2 style={styles.sectionTitle}>
              <Briefcase size={28} />
              Projects
            </h2>
            {portfolioData.projects.map((project, idx) => (
              <ProjectCard key={idx} project={project} delay={idx * 150} />
            ))}
          </div>
        );
      
      case 'education':
        return (
          <div>
            <h2 style={styles.sectionTitle}>
              <GraduationCap size={28} />
              Education
            </h2>
            {portfolioData.education.map((edu, idx) => (
              <Card key={idx} delay={idx * 100}>
                <div style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: '5px',
                  background: 'linear-gradient(180deg, #667eea 0%, #764ba2 100%)'
                }}></div>
                <h3 style={{ fontSize: '22px', color: '#302b63', margin: '0 0 8px 0', fontWeight: '700' }}>
                  {edu.degree}
                </h3>
                <p style={{ fontSize: '16px', color: '#6b7280', margin: '0 0 16px 0', fontWeight: '500' }}>
                  {edu.institution} | {edu.period}
                </p>
                <p style={{ color: '#667eea', fontWeight: 'bold', marginBottom: '12px' }}>GPA: {edu.gpa}</p>
                {edu.highlights && (
                  <ul style={{ lineHeight: '1.8', color: '#555', paddingLeft: '20px' }}>
                    {edu.highlights.map((highlight, i) => (
                      <li 
                        key={i}
                        style={{
                          opacity: fadeIn ? 1 : 0,
                          transform: fadeIn ? 'translateX(0)' : 'translateX(-20px)',
                          transition: `all 0.4s ease ${0.5 + i * 0.1}s`
                        }}
                      >
                        {highlight}
                      </li>
                    ))}
                  </ul>
                )}
              </Card>
            ))}
          </div>
        );
      
      case 'certificates':
        return (
          <div>
            <h2 style={styles.sectionTitle}>
              <Award size={28} />
              Certifications
            </h2>
            {portfolioData.certificates.map((cert, idx) => (
              <Card key={idx} delay={idx * 100}>
                <h3 style={{ fontSize: '22px', color: '#302b63', marginBottom: '12px', fontWeight: '700' }}>
                  {cert.title}
                </h3>
                <p style={{ color: '#555', lineHeight: '1.8', marginBottom: '10px' }}>
                  {cert.description}
                </p>
                {cert.skills && (
                  <p style={{ 
                    color: '#764ba2', 
                    fontWeight: '600', 
                    marginBottom: '10px',
                    fontSize: '14px',
                    padding: '8px 12px',
                    background: 'rgba(118, 75, 162, 0.1)',
                    borderRadius: '8px',
                    display: 'inline-block'
                  }}>
                    🎯 Skills: {cert.skills}
                  </p>
                )}
                <p style={{ color: '#667eea', fontWeight: 'bold', marginTop: '10px' }}>
                  📅 Issued: {cert.year} | {cert.issuer}
                </p>
              </Card>
            ))}
          </div>
        );
      
      default:
        return null;
    }
  }, [activeSection, styles, fadeIn]);

  return (
    <div style={styles.container}>
      {particlesEnabled && <FloatingParticles />}
      
      <header style={styles.header}>
        <div style={{
          position: 'absolute',
          top: '-50%',
          right: '-20%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(102, 126, 234, 0.4) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
          animation: 'glowPulse 4s ease-in-out infinite'
        }}></div>
        
        <div style={{
          position: 'absolute',
          bottom: '-30%',
          left: '-10%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(118, 75, 162, 0.3) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
          animation: 'glowPulse 5s ease-in-out infinite reverse'
        }}></div>
        
        <div style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          display: 'flex',
          gap: '10px',
          zIndex: 10
        }}>
          <button
            onClick={() => setDarkMode(!darkMode)}
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'white',
              transition: 'all 0.3s ease',
              transform: darkMode ? 'rotate(180deg)' : 'rotate(0deg)'
            }}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <button
            onClick={() => setParticlesEnabled(!particlesEnabled)}
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'white',
              transition: 'all 0.3s ease',
              opacity: particlesEnabled ? 1 : 0.5
            }}
            aria-label="Toggle particles"
          >
            <Sparkles size={20} />
          </button>
        </div>

        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '30px', 
          flexWrap: 'wrap', 
          position: 'relative', 
          zIndex: 1 
        }}>
          <img 
            src={portfolioData.personal.photo}
            alt={portfolioData.personal.name}
            style={{
              width: '150px',
              height: '150px',
              borderRadius: '50%',
              border: '4px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)',
              objectFit: 'cover',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              animation: isLoaded ? 'photoFloat 3s ease-in-out infinite' : 'none',
              transition: 'transform 0.3s ease'
            }}
          />
          <div style={{ flex: 1, minWidth: '250px' }}>
            <h1 style={{
              fontSize: '48px',
              margin: '0 0 10px 0',
              fontWeight: '800',
              letterSpacing: '-1px',
              background: 'linear-gradient(135deg, #fff 0%, #a8b8ff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateY(0)' : 'translateY(-20px)',
              transition: 'all 0.8s ease 0.2s'
            }}>
              {portfolioData.personal.name}
            </h1>
            <p style={{ 
              fontSize: '20px', 
              margin: '0 0 25px 0', 
              opacity: 0.85,
              transform: isLoaded ? 'translateY(0)' : 'translateY(-10px)',
              transition: 'all 0.8s ease 0.3s'
            }}>
              {portfolioData.personal.title} | {portfolioData.personal.experience}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
              <ContactItem icon={Mail} href={`mailto:${portfolioData.personal.email}`} delay={400}>
                {portfolioData.personal.email}
              </ContactItem>
              <ContactItem icon={Phone} href={`tel:${portfolioData.personal.phone}`} delay={500}>
                {portfolioData.personal.phone}
              </ContactItem>
              <ContactItem icon={MapPin} delay={600}>
                {portfolioData.personal.location}
              </ContactItem>
              <ContactItem icon={Github} href={portfolioData.personal.github} delay={700}>
                GitHub
              </ContactItem>
              <ContactItem icon={Linkedin} href={portfolioData.personal.linkedin} delay={800}>
                LinkedIn
              </ContactItem>
            </div>
            <div style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateY(0)' : 'translateY(10px)',
              transition: 'all 0.8s ease 0.9s'
            }}>
              <AnimatedButton 
                onClick={() => window.location.href = `mailto:${portfolioData.personal.email}`}
                icon={Send}
                color="rgba(255, 255, 255, 0.95)"
              >
                <span style={{ color: '#302b63' }}>Get in Touch</span>
              </AnimatedButton>
            </div>
          </div>
        </div>
      </header>

      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '30px',
        flexWrap: 'wrap',
        gap: '20px',
        opacity: isLoaded ? 1 : 0,
        transform: isLoaded ? 'translateY(0)' : 'translateY(-20px)',
        transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s',
        position: 'relative',
        zIndex: 1
      }}>
        <nav style={{
          display: 'flex',
          gap: '10px',
          flexWrap: 'wrap',
          background: 'rgba(255, 255, 255, 0.05)',
          padding: '10px',
          borderRadius: '16px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)'
        }}>
          {['about', 'experience', 'skills', 'projects', 'education', 'certificates'].map(section => (
            <NavButton 
              key={section} 
              section={section} 
              activeSection={activeSection} 
              onClick={handleNavigation}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </NavButton>
          ))}
        </nav>
        
        <AnimatedButton 
          onClick={() => window.open(portfolioData.personal.resumeUrl, '_blank')}
          icon={Download}
          color="#667eea"
        >
          Download Resume
        </AnimatedButton>
      </div>

      <main style={styles.content}>
        {renderSection}
      </main>

      <button
        onClick={scrollToTop}
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          backgroundColor: '#667eea',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(102, 126, 234, 0.4)',
          transition: 'all 0.3s ease',
          zIndex: 1000,
          opacity: showBackToTop ? 1 : 0,
          visibility: showBackToTop ? 'visible' : 'hidden',
          transform: showBackToTop ? 'scale(1) rotate(0deg)' : 'scale(0.8) rotate(-180deg)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.15) rotate(0deg)';
          e.currentTarget.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.6)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = showBackToTop ? 'scale(1) rotate(0deg)' : 'scale(0.8) rotate(-180deg)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.4)';
        }}
        aria-label="Back to top"
      >
        <ArrowUp size={24} />
      </button>
    </div>
  );
}