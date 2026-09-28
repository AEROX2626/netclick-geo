'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll(); // Check initial state
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll('.reveal-on-scroll').forEach((el) => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  const toggleAccordion = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <>
      {/* Header */}
      <header
        className={`fixed w-full top-0 z-50 transition-all duration-300 bg-white/90 backdrop-blur-md border-b border-gray-100 ${
          isScrolled ? 'shadow-md py-1' : 'py-3'
        }`}
        id="header"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <a
                href="#"
                className="text-3xl font-black font-sans tracking-tight"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              >
                <span className="text-mv-dark">Netclick</span>
                <span className="text-mv-primary">Digital</span>
              </a>
            </div>
            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8 space-x-reverse">
              <a href="#home" className="text-mv-dark font-medium hover:text-mv-primary transition-colors">
                בית
              </a>
              <a href="#ecosystem" className="text-mv-dark font-medium hover:text-mv-primary transition-colors">
                השיטה שלנו
              </a>
              <a href="#process" className="text-mv-dark font-medium hover:text-mv-primary transition-colors">
                תכנית עבודה
              </a>
              <a href="#pricing" className="text-mv-dark font-medium hover:text-mv-primary transition-colors">
                מסלולים
              </a>
              <a href="#faq" className="text-mv-dark font-medium hover:text-mv-primary transition-colors">
                שאלות ותשובות
              </a>
            </nav>

            {/* CTA & Mobile Toggle */}
            <div className="flex items-center gap-4">
              <a
                href="#contact"
                className="hidden md:inline-flex items-center justify-center px-6 py-2.5 border border-transparent rounded-full shadow-sm text-sm font-semibold text-white bg-mv-primary hover:bg-blue-700 transition-all shadow-blue-500/30 hover:shadow-blue-500/50"
              >
                דברו איתנו
              </a>
              <button
                id="mobile-menu-btn"
                className="md:hidden text-mv-dark hover:text-mv-primary focus:outline-none"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Nav Menu */}
        <div
          id="mobile-menu"
          className={`${
            isMobileMenuOpen ? 'block' : 'hidden'
          } md:hidden bg-white border-b border-gray-100 absolute w-full shadow-lg left-0 top-20`}
        >
          <div className="px-4 pt-2 pb-6 space-y-2">
            <a
              href="#home"
              className="mobile-link block px-3 py-2 rounded-md text-base font-medium text-mv-dark hover:bg-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              בית
            </a>
            <a
              href="#ecosystem"
              className="mobile-link block px-3 py-2 rounded-md text-base font-medium text-mv-dark hover:bg-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              השיטה שלנו
            </a>
            <a
              href="#process"
              className="mobile-link block px-3 py-2 rounded-md text-base font-medium text-mv-dark hover:bg-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              תכנית עבודה
            </a>
            <a
              href="#pricing"
              className="mobile-link block px-3 py-2 rounded-md text-base font-medium text-mv-dark hover:bg-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              מסלולים
            </a>
            <a
              href="#faq"
              className="mobile-link block px-3 py-2 rounded-md text-base font-medium text-mv-dark hover:bg-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              שאלות ותשובות
            </a>
            <a
              href="#contact"
              className="mobile-link block w-full text-center mt-4 px-6 py-3 border border-transparent rounded-full text-base font-semibold text-white bg-mv-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              דברו איתנו
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-mv-light">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-400/10 blur-3xl animate-pulse-slow"></div>
        <div
          className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-mv-accent/10 blur-3xl animate-pulse-slow"
          style={{ animationDelay: '1s' }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            {/* Text Content */}
            <div className="mb-12 lg:mb-0 text-center lg:text-right animate-fade-in-up">
              <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-mv-primary text-sm font-bold tracking-wide mb-4">
                GEO - נראות במנועי AI
              </span>
              <h1 className="text-5xl lg:text-6xl font-black text-mv-dark leading-tight mb-6">
                הלקוחות שלכם כבר שואלים את ChatGPT.<br />
                <span className="text-gradient">האם אתם התשובה?</span>
              </h1>
              <p className="text-lg lg:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                עידן החיפוש השתנה. היום, מקבלי החלטות ולקוחות קצה מסתמכים על מנועי AI כמו ChatGPT, Perplexity ו-Gemini
                כדי לקבל המלצות. אנו בונים עבורכם אקוסיסטם דיגיטלי מתקדם (GEO & SEO) שמבטיח שהמותג שלכם לא רק יופיע –
                אלא יוצג כסמכות העליונה בתחומכם.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-white bg-mv-primary hover:bg-blue-700 shadow-lg shadow-blue-500/40 transition-all hover:-translate-y-1"
                >
                  לשיחת ייעוץ והתאמה <i className="fas fa-arrow-left mr-2"></i>
                </a>
                <a
                  href="#ecosystem"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-mv-primary bg-white border border-mv-primary hover:bg-blue-50 transition-all"
                >
                  איך זה עובד
                </a>
              </div>
            </div>
            {/* Phones Mockup */}
            <div className="relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex justify-center items-center gap-4 lg:gap-6 perspective-[1500px]">
                {/* ChatGPT Phone */}
                <div className="phone-wrapper animate-float-1 transform preserve-3d">
                  <div className="phone w-64 h-[500px] bg-white rounded-[40px] relative shadow-2xl border-4 border-gray-100 overflow-hidden flex flex-col">
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-full z-10"></div>
                    <div className="flex justify-between items-center px-5 pt-4 pb-2 text-xs font-semibold text-gray-800 bg-white z-0">
                      <span>9:41</span>
                      <div className="flex gap-1">
                        <i className="fas fa-signal"></i>
                        <i className="fas fa-wifi"></i>
                        <i className="fas fa-battery-full"></i>
                      </div>
                    </div>
                    <div className="flex justify-between items-center px-4 py-3 border-b border-gray-100">
                      <i className="fas fa-bars text-gray-500"></i>
                      <div className="flex items-center gap-2 font-bold text-gray-800">
                        <div className="w-5 h-5 rounded-full bg-[#10A37F] flex items-center justify-center text-white text-[10px]">
                          <i className="fas fa-bolt"></i>
                        </div>
                        ChatGPT 4o <span className="text-gray-400 text-xs">▾</span>
                      </div>
                      <i className="fas fa-pen-to-square text-gray-500"></i>
                    </div>
                    <div className="flex-1 p-4 flex flex-col gap-4 overflow-hidden bg-white">
                      <div className="self-end bg-gray-100 text-gray-800 px-4 py-3 rounded-2xl rounded-tr-sm text-sm max-w-[85%]">
                        אילו חברות מומלצות לשירותי מחשוב ענן ואבטחת מידע לארגונים?
                      </div>
                      <div className="flex gap-3 items-start">
                        <div className="w-7 h-7 rounded-full bg-[#10A37F] flex items-center justify-center text-white flex-shrink-0 text-xs">
                          <i className="fas fa-bolt"></i>
                        </div>
                        <div className="text-sm text-gray-800 leading-relaxed pt-1">
                          לאבטחת מידע ארגוני, מומלץ לבחור בחברות המציעות פתרונות ענן מקיפים ותאימות לתקנים מחמירים.
                          חברות בולטות כוללות את <span className="biz-mark-cgpt">העסק שלך</span>, שזוכה להמלצות רבות בזכות
                          ארכיטקטורה מאובטחת ושירות תמיכה מתקדם{' '}
                          <span className="inline-flex gap-1 ml-1">
                            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full typing-dot"></span>
                            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full typing-dot"></span>
                            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full typing-dot"></span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="mx-3 mb-4 px-4 py-3 bg-gray-100 rounded-full flex justify-between items-center text-gray-500 text-sm">
                      <span>שאלו את ChatGPT</span>
                      <div className="flex gap-3 text-gray-600">
                        <i className="fas fa-camera"></i>
                        <i className="fas fa-microphone"></i>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Gemini Phone */}
                <div className="phone-wrapper animate-float-2 transform preserve-3d">
                  <div className="phone w-64 h-[500px] bg-white rounded-[40px] relative shadow-2xl border-4 border-gray-100 overflow-hidden flex flex-col">
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-full z-10"></div>
                    <div className="flex justify-between items-center px-5 pt-4 pb-2 text-xs font-semibold text-gray-800 bg-white z-0">
                      <span>9:41</span>
                      <div className="flex gap-1">
                        <i className="fas fa-signal"></i>
                        <i className="fas fa-wifi"></i>
                        <i className="fas fa-battery-full"></i>
                      </div>
                    </div>
                    <div className="flex justify-between items-center px-4 py-3 border-b border-gray-100">
                      <i className="fas fa-bars text-gray-500"></i>
                      <div className="flex items-center gap-2 font-bold text-gray-800">
                        <div className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-red-500">
                          <i className="fas fa-sparkles"></i>
                        </div>
                        Gemini <span className="bg-blue-50 text-blue-600 px-2 py-0.5 rounded-md text-[10px]">2.5 Pro</span>
                      </div>
                      <i className="fas fa-pen-to-square text-gray-500"></i>
                    </div>
                    <div className="flex-1 p-4 flex flex-col gap-4 overflow-hidden bg-white">
                      <div className="self-end bg-gray-100 text-gray-800 px-4 py-3 rounded-2xl rounded-tr-sm text-sm max-w-[85%]">
                        מיהם משרדי עורכי הדין המומלצים לליווי סטארטאפים ומיזוגים?
                      </div>
                      <div className="flex gap-3 items-start">
                        <div className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-red-500 flex-shrink-0 text-lg pt-1">
                          <i className="fas fa-sparkles"></i>
                        </div>
                        <div className="text-sm text-gray-800 leading-relaxed pt-1">
                          בדירוג משרדי עורכי הדין המובילים לליווי חברות הייטק, משרדים כמו{' '}
                          <span className="biz-mark-gem">העסק שלך</span> בולטים במיוחד בזכות המומחיות בעסקאות בינלאומיות
                          וליווי אסטרטגי צמוד מיום ההקמה...{' '}
                          <span className="inline-flex gap-1 ml-1">
                            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full typing-dot"></span>
                            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full typing-dot"></span>
                            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full typing-dot"></span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="mx-3 mb-4 px-4 py-3 bg-gray-100 rounded-full flex justify-between items-center text-gray-500 text-sm">
                      <span>שאלו את Gemini</span>
                      <div className="flex gap-3 text-gray-600">
                        <i className="fas fa-camera"></i>
                        <i className="fas fa-microphone"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Features (Why Us) */}
      <section id="ecosystem" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-block py-1 px-3 rounded-full bg-gray-100 text-mv-dark text-xs font-bold tracking-wide mb-4">
              למה נטקליק דיגיטל
            </span>
            <h2 className="text-4xl font-black text-mv-dark mb-4">
              העתיד כבר כאן. <span className="text-gradient">וכך נכבוש אותו יחד.</span>
            </h2>
            <p className="text-lg text-gray-600">
              נוכחות במנועי בינה מלאכותית דורשת הרבה יותר מ&quot;קידום אתרים&quot; מסורתי. בנטקליק דיגיטל יצרנו מתודולוגיה מוכחת
              המשלבת תוכן עומק סמכותי, יחסי ציבור דיגיטליים (Digital PR) וארכיטקטורת נתונים טכנית מתקדמת.
            </p>
          </div>

          <div className="space-y-24">
            {/* Feature 1: Content Authority */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-white rounded-3xl p-8 shadow-xl border border-gray-100 reveal-on-scroll relative overflow-hidden">
                {/* BG glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-60 -mr-10 -mt-10"></div>
                <div className="flex flex-col gap-4 mb-10 relative z-10">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-sm font-bold text-mv-primary mb-1 tracking-wide uppercase">Share of Voice</div>
                      <div className="text-4xl font-black text-mv-dark tracking-tight">1,247</div>
                      <div className="text-sm text-gray-500 font-medium mt-1">אזכורים במנועי AI</div>
                    </div>
                    <div className="bg-gradient-to-br from-green-400 to-green-500 rounded-2xl px-4 py-2 flex flex-col items-center justify-center text-white shadow-lg shadow-green-500/30">
                      <span className="flex items-center gap-1 text-lg font-bold">
                        <i className="fas fa-arrow-trend-up"></i> 312%+
                      </span>
                    </div>
                  </div>
                </div>
                {/* Beautiful CSS Bar Chart */}
                <div className="relative h-48 w-full flex items-end justify-between gap-3 px-2 z-10">
                  {/* Horizontal Grid lines */}
                  <div className="absolute inset-0 flex flex-col justify-between z-0 pb-6">
                    <div className="w-full border-t border-gray-100 border-dashed"></div>
                    <div className="w-full border-t border-gray-100 border-dashed"></div>
                    <div className="w-full border-t border-gray-100 border-dashed"></div>
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  {/* Bars */}
                  <div className="relative z-10 w-full group flex flex-col items-center justify-end h-full">
                    <div className="w-full max-w-[40px] bg-blue-50 rounded-t-xl h-[25%] transition-all duration-300 group-hover:bg-blue-100"></div>
                    <div className="mt-3 text-xs font-bold text-gray-400">Q1</div>
                  </div>
                  <div className="relative z-10 w-full group flex flex-col items-center justify-end h-full">
                    <div className="w-full max-w-[40px] bg-blue-100 rounded-t-xl h-[45%] transition-all duration-300 group-hover:bg-blue-200"></div>
                    <div className="mt-3 text-xs font-bold text-gray-400">Q2</div>
                  </div>
                  <div className="relative z-10 w-full group flex flex-col items-center justify-end h-full">
                    <div className="w-full max-w-[40px] bg-blue-300 rounded-t-xl h-[70%] transition-all duration-300 shadow-sm group-hover:bg-blue-400"></div>
                    <div className="mt-3 text-xs font-bold text-gray-500">Q3</div>
                  </div>
                  <div className="relative z-10 w-full group flex flex-col items-center justify-end h-full cursor-pointer">
                    {/* Tooltip */}
                    <div className="absolute -top-10 bg-mv-dark text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">
                      1,247
                    </div>
                    <div className="w-full max-w-[48px] bg-gradient-to-t from-mv-primary to-blue-400 rounded-t-xl h-[100%] transition-all duration-300 shadow-xl shadow-blue-500/30 relative">
                      <div className="absolute top-0 inset-x-0 h-1.5 bg-white/30 rounded-t-xl"></div>
                    </div>
                    <div className="mt-3 text-sm font-black text-mv-primary">Q4</div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <span className="text-mv-accent font-bold tracking-wide uppercase text-sm mb-2 block">ניטור</span>
                <h3 className="text-3xl font-black text-mv-dark mb-4">מדידה חכמה בסביבה משתנה.</h3>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  תחום הבינה המלאכותית לומד ומשתנה מדי יום. אנו מפעילים מערכות אנליטיקה מתקדמות למעקב אחר נתח החשיפה שלכם
                  (Share of Voice), ניתוח סנטימנט, וביצוע אופטימיזציה בזמן אמת שמבטיחה שתישארו בפסגה.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <i className="fas fa-check text-green-500"></i>
                    <span className="text-gray-700 font-medium">ניטור citations במנועים העיקריים</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <i className="fas fa-check text-green-500"></i>
                    <span className="text-gray-700 font-medium">דוחות חודשיים: share of voice, sentiment, accuracy</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <i className="fas fa-check text-green-500"></i>
                    <span className="text-gray-700 font-medium">זיהוי gaps והתאמת אסטרטגיה</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <i className="fas fa-check text-green-500"></i>
                    <span className="text-gray-700 font-medium">דשבורד שקוף עם המספרים</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline Section */}
      <section id="process" className="py-24 bg-mv-gray relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-block py-1 px-3 rounded-full bg-white border border-gray-200 text-mv-dark text-xs font-bold tracking-wide mb-4 shadow-sm">
              תוכנית עבודה
            </span>
            <h2 className="text-4xl font-black text-mv-dark mb-4">
              הדרך לדומיננטיות. <span className="text-gradient">שלב אחרי שלב.</span>
            </h2>
            <p className="text-lg text-gray-600">
              ההצלחה שלכם מתחילה בתוכנית עבודה מוסדרת, שקופה ומדויקת. מהלך דיגיטלי שלם דורש אפיון חכם, עיצוב ובניית אתר מקצועי, יצירת סמכות והתאמה טכנולוגית עמוקה למנועי החיפוש וה-AI.
            </p>
          </div>
          {/* Process Grid */}
          <div className="grid md:grid-cols-4 gap-8 lg:gap-12 relative">
            {/* Connective Line */}
            <div className="hidden md:block absolute top-10 right-20 left-20 h-1 bg-gray-200 z-0"></div>
            {/* Step 1 */}
            <div className="relative z-10 text-center group">
              <div className="w-20 h-20 mx-auto bg-white rounded-full shadow-md flex items-center justify-center text-2xl font-black text-gray-400 group-hover:text-mv-primary group-hover:border-mv-primary group-hover:scale-110 transition-all mb-6 border-4 border-gray-100 relative z-20">
                01
              </div>
              <div className="text-sm font-bold text-mv-primary mb-2 tracking-widest uppercase">Audit & Strategy</div>
              <h3 className="text-xl font-bold text-mv-dark mb-3">אפיון ומחקר מעמיק</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                הכל מתחיל בתכנון. אנו לומדים את העסק, מאפיינים את מבנה האתר הנדרש, ממפים את המתחרים שלכם ובודקים בדיוק אילו שאלות הלקוחות שלכם שואלים את מנועי ה-AI.
              </p>
            </div>
            {/* Step 2 */}
            <div className="relative z-10 text-center group">
              <div className="w-20 h-20 mx-auto bg-white rounded-full shadow-md flex items-center justify-center text-2xl font-black text-gray-400 group-hover:text-mv-primary group-hover:border-mv-primary group-hover:scale-110 transition-all mb-6 border-4 border-gray-100 relative z-20">
                02
              </div>
              <div className="text-sm font-bold text-mv-primary mb-2 tracking-widest uppercase">Web Development</div>
              <h3 className="text-xl font-bold text-mv-dark mb-3">עיצוב ובניית האתר</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                הופכים את התכנון למציאות. מעצבים ומפתחים אתר מרשים מותאם אישית, תוך הטמעת תשתית טכנולוגית (Schema) שתעזור לבינה המלאכותית לסרוק ולהבין שאתם המקור המוסמך ביותר.
              </p>
            </div>
            {/* Step 3 */}
            <div className="relative z-10 text-center group">
              <div className="w-20 h-20 mx-auto bg-white rounded-full shadow-md flex items-center justify-center text-2xl font-black text-gray-400 group-hover:text-mv-accent group-hover:border-mv-accent group-hover:scale-110 transition-all mb-6 border-4 border-gray-100 relative z-20">
                03
              </div>
              <div className="text-sm font-bold text-mv-primary mb-2 tracking-widest uppercase">Content & PR</div>
              <h3 className="text-xl font-bold text-mv-dark mb-3">תוכן ובניית סמכות</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                מייצרים עבורכם תוכן עומק איכותי ומבססים את המוניטין שלכם. אנו דואגים שהשם שלכם יופיע ויצוטט בפורטלים, מגזינים ומקורות מידע חיצוניים שמנועי ה-AI סומכים עליהם.
              </p>
            </div>
            {/* Step 4 */}
            <div className="relative z-10 text-center group">
              <div className="w-20 h-20 mx-auto bg-white rounded-full shadow-md flex items-center justify-center text-2xl font-black text-gray-400 group-hover:text-mv-accent group-hover:border-mv-accent group-hover:scale-110 transition-all mb-6 border-4 border-gray-100 relative z-20">
                04
              </div>
              <div className="text-sm font-bold text-mv-primary mb-2 tracking-widest uppercase">Promote & Optimize</div>
              <h3 className="text-xl font-bold text-mv-dark mb-3">קידום שוטף ואופטימיזציה</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                השקת האתר היא רק יריית הפתיחה. כדי להפוך אותו למכונת לידים, נדרשת עבודת קידום אינטנסיבית ושוטפת. אנו מטמיעים את האתר עמוק באלגוריתמים של גוגל, מקדמים אותו באופן אקטיבי במילות חיפוש אסטרטגיות ודואגים שיופיע בתשובות של מנועי ה-AI, הכל בליווי ניטור מדויק ואופטימיזציה יומיומית.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-gray-100 text-mv-dark text-xs font-bold tracking-wide mb-4">
              מסלולים
            </span>
            <h2 className="text-4xl font-black text-mv-dark mb-4">
              השקעה בנכס דיגיטלי. <span className="text-gradient">תשואה לטווח ארוך.</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              נוכחות דיגיטלית חזקה מתחילה בתשתית SEO יציבה ומתפתחת לדומיננטיות במנועי ה-AI. בנינו מסלולים שקופים,
              המותאמים אישית לשלב בו העסק שלכם נמצא, מתוך מטרה לייצר עבורכם זרימת לידים איכותית.
            </p>
          </div>

          {/* 2-Option Comparison Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {/* Package 1: Growth */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 flex flex-col relative hover:shadow-2xl transition-shadow">
              <h3 className="text-2xl font-bold text-mv-dark mb-2">Growth</h3>
              <p className="text-gray-500 mb-6 font-medium">אתר תוכן מורחב</p>
              <div className="mb-8 border-b border-gray-100 pb-8">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-5xl font-black text-mv-dark">₪1,389</span>
                  <span className="text-gray-500">/ חודש</span>
                </div>
                <div className="text-gray-500 text-sm font-medium">+ ₪1,700 עלות הקמה חד פעמית</div>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3">
                  <i className="fas fa-check text-green-500 mt-1"></i>
                  <span className="text-gray-700">עיצוב ובניית אתר - עד 7 מסכים</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-check text-green-500 mt-1"></i>
                  <span className="text-gray-700">מעטפת ליווי, אחסון, ותחזוקה יום-יומית ללא הגבלה</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-check text-green-500 mt-1"></i>
                  <span className="text-gray-700">דומיין ללא עלות</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-check text-green-500 mt-1"></i>
                  <span className="text-gray-700">הטמעת אסטרטגיות שיווק באתר</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-check text-green-500 mt-1"></i>
                  <span className="text-gray-700">תשתית אורגנית פסיבית (חשיפה במילות חיפוש כלליות)</span>
                </li>
              </ul>
              <a
                href="#contact"
                className="block w-full py-4 text-center rounded-xl text-mv-primary bg-blue-50 hover:bg-blue-100 font-bold transition-colors"
              >
                לשיחת אפיון
              </a>
            </div>

            {/* Package 2: Growth + SEO */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-mv-primary flex flex-col relative hover:shadow-2xl transition-shadow transform md:-translate-y-2">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-4 bg-mv-primary text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                מומלץ
              </div>
              <h3 className="text-2xl font-bold text-mv-dark mb-2">Growth + SEO</h3>
              <p className="text-gray-500 mb-6 font-medium">מורחב + SEO</p>
              <div className="mb-8 border-b border-gray-100 pb-8">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-5xl font-black text-mv-dark">₪2,679</span>
                  <span className="text-gray-500">/ חודש</span>
                </div>
                <div className="text-gray-500 text-sm font-medium">+ ₪2,900 עלות הקמה חד פעמית</div>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3">
                  <i className="fas fa-check text-green-500 mt-1"></i>
                  <span className="text-gray-700">עיצוב ובניית אתר - עד 9 מסכים</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-check text-green-500 mt-1"></i>
                  <span className="text-gray-700">מעטפת ליווי ותחזוקה מקיפה ללא הגבלה</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-check text-green-500 mt-1"></i>
                  <span className="text-gray-700">מחקר מילות מפתח ובניית אסטרטגיה</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-check text-green-500 mt-1"></i>
                  <span className="text-gray-700">קידום אורגני ב-50 מילות מפתח בגוגל</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-check text-green-500 mt-1"></i>
                  <span className="text-gray-700">דו&quot;ח תוצאות רבעוני</span>
                </li>
              </ul>
              <a
                href="#contact"
                className="block w-full py-4 text-center rounded-xl text-white bg-mv-primary hover:bg-blue-700 shadow-lg shadow-blue-500/30 transition-all hover:-translate-y-1"
              >
                לשיחת אפיון
              </a>
            </div>
          </div>

          {/* Premium Pricing Card (Full Spectrum + GEO) */}
          <div className="max-w-4xl mx-auto bg-gradient-royal rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            {/* Decorative BG */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-mv-accent rounded-full blur-3xl opacity-20 -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-20 -ml-20 -mb-20"></div>

            <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center border-b border-white/20 pb-8 mb-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-widest mb-4">
                  SEO + GEO
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">קידום במנועי AI + קידום אורגני בגוגל</h3>
                <p className="text-blue-200">חבילה מתקדמת וכוללת</p>
              </div>
              <div className="mt-6 md:mt-0 text-right md:text-left">
                <div className="text-blue-200 text-sm mb-1">החל מ-</div>
                <div className="flex flex-col items-end mt-1">
                  <div className="flex items-baseline justify-end gap-2 mb-1">
                    <span className="text-5xl font-black text-white">₪3,590</span>
                    <span className="text-blue-200">/ חודש</span>
                  </div>
                  <div className="text-blue-200 text-sm font-medium opacity-90">+ ₪3,800 עלות הקמה חד פעמית</div>
                </div>
              </div>
            </div>

            <div className="relative z-10 grid md:grid-cols-2 gap-8 text-white">
              {/* SEO Column */}
              <div>
                <h4 className="font-bold text-lg mb-4 text-blue-200 border-b border-white/10 pb-2">בסיס SEO מלא:</h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check text-green-400 mt-1"></i>
                    <span className="font-bold text-white bg-white/10 px-2 rounded">עיצוב ובניית אתר מורחב</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check text-green-400 mt-1"></i>
                    <span>מחקר מילות מפתח ובניית אסטרטגיה</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check text-green-400 mt-1"></i>
                    <span>עד 70 מילות מפתח למעקב ועבודה</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check text-green-400 mt-1"></i>
                    <span>אודיט טכני מלא ותיקונים קריטיים</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check text-green-400 mt-1"></i>
                    <span>אופטימיזציה של דפים באתר</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check text-green-400 mt-1"></i>
                    <span>הקמת מערך מדידה - Search Console ו-GA4</span>
                  </li>
                </ul>
              </div>
              {/* GEO Column */}
              <div>
                <h4 className="font-bold text-lg mb-4 text-mv-accent border-b border-white/10 pb-2">+ שכבת ה-GEO:</h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <i className="fas fa-sparkles text-mv-accent mt-1"></i>
                    <span className="font-semibold">נוכחות ב-ChatGPT, Perplexity ו-Gemini</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check text-green-400 mt-1"></i>
                    <span>יצירת תוכן מובנה ו-Schema Markup מתקדם</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check text-green-400 mt-1"></i>
                    <span>סמכות מקצועית אסטרטגית - יחסי מדיה פעילים</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check text-green-400 mt-1"></i>
                    <span>רישום בבסיסי נתונים ומקורות שמנועי AI מצטטים</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check text-green-400 mt-1"></i>
                    <span>אופטימיזציה לשאלות שיח ושאילתות טבעיות</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check text-green-400 mt-1"></i>
                    <span>דוחות AI Visibility חודשיים מקיפים</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative z-10 mt-10 text-center">
              <a
                href="#contact"
                className="inline-block px-10 py-4 bg-white text-mv-dark font-bold rounded-full shadow-lg hover:bg-gray-50 hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                בואו נדבר על האתר שלכם
              </a>
            </div>
          </div>

          <div className="text-center mt-12 mb-4">
            <span className="inline-block bg-white border border-gray-200 text-gray-500 px-8 py-3 rounded-full text-sm font-bold shadow-sm">
              <i className="fas fa-info-circle mr-2 text-mv-primary"></i> כל המחירים אינם כוללים מע&quot;מ
            </span>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="reviews" className="py-24 bg-mv-gray relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-white border border-gray-200 text-mv-dark text-xs font-bold tracking-wide mb-4 shadow-sm">
              לקוחות מספרים
            </span>
            <h2 className="text-4xl font-black text-mv-dark mb-4">
              הצלחות שמדברות <span className="text-gradient">בעד עצמן.</span>
            </h2>
          </div>

          {/* Horizontal scroll container */}
          <div className="flex overflow-x-auto gap-6 pb-12 hide-scrollbar snap-x snap-mandatory">
            {[
              {
                text: `"אחרי שנים שהוצאנו עשרות אלפי שקלים על קידום ממומן שרק הלך והתייקר, החלטנו לעבור לאסטרטגיה של נוכחות בבינה מלאכותית וקידום אורגני עם נטקליק דיגיטל. תוך 4 חודשים הלידים התחילו להגיע באופן קבוע, והאיכות שלהם הרבה יותר גבוהה ממה שהכרנו. צוות מקצועי שעובד בשקיפות מלאה."`,
                initial: 'ד',
                name: 'דורון אלמוג',
                role: 'אלמוג שמאות מקרקעין'
              },
              {
                text: `"הייתי סקפטית לגבי קידום ב-ChatGPT כי לא הבנתי איך לקוחות משתמשים בזה. הצוות בנטקליק עשה אפיון מדויק, בנה תשתית באתר שמדברת בשפה של הכלים האלה, והיום אנחנו מקבלים פניות מאנשים שפשוט שאלו את ה-AI 'מי עורך הדין המומלץ בחיפה'. פשוט מדהים לראות את זה קורה."`,
                initial: 'ק',
                name: 'עו״ד קרן פרידמן',
                role: "פרידמן ושות' - משרד עורכי דין"
              },
              {
                text: `"בעבר עבדנו עם חברות קידום שלא באמת הבינו תהליכי B2B. נטקליק יצרו עבורנו תוכן מעמיק שגרם למנועים כמו Perplexity ו-Gemini לצטט אותנו כמומחים בתחום האנרגיה הסולארית למפעלים. העבודה שקופה לחלוטין ויש דוחות מפורטים בכל חודש שמראים בדיוק את ההתקדמות."`,
                initial: 'י',
                name: 'יריב כהן',
                role: 'GreenTech פתרונות אנרגיה עסקיים'
              },
              {
                text: `"חיפשתי חברה שתבנה לי אתר שישקף את היוקרה של הסטודיו וגם יביא תנועה איכותית. החבילה המשולבת נתנה לי אתר יפהפה תוך זמן קצר, והקידום האורגני התחיל לתת פירות בצורה יציבה. היום לקוחות מספרים לי שהם קראו עליי המלצות בבינה המלאכותית לפני שהתקשרו."`,
                initial: 'מ',
                name: 'מאיה צור',
                role: 'Studio Maya - אדריכלות ועיצוב'
              },
              {
                text: `"מה שאהבתי אצל נטקליק זה שהם לא מבטיחים הבטחות שווא. אמרו מראש שייקח זמן לבסס סמכות כדי ש-Google ו-AI יזהו אותנו, אבל מהרגע שהתחלנו לטפס – זרימת הלקוחות לא פוסקת. הם מטפלים באתר, בתוכן ובאזכורים הטכניים ברשת בצורה סופר קפדנית."`,
                initial: 'א',
                name: 'אביב רז',
                role: 'R.A אבטחה ומתח נמוך'
              },
              {
                text: `"היינו רגילים לקבל לידים קרים מקמפיינים ממומנים שדרשו המון עבודת שכנוע. מאז שנטקליק שילבו אותנו במנועי AI, הלקוחות שמגיעים כבר יודעים עלינו הכל. הם פשוט שאלו את Claude או ChatGPT על פרויקטים מומלצים להשקעה בצפון, והשם שלנו עלה כסמכות. שינוי מטורף באיכות הפניות."`,
                initial: 'ע',
                name: 'עמית תגר',
                role: 'Tager יזמות ונדל"ן'
              },
              {
                text: `"כחברת תוכנה B2B, היה לנו קשה מאוד לבלוט בגוגל מול ענקיות הטכנולוגיה. נטקליק דיגיטל בנו לנו אסטרטגיית GEO שהכניסה אותנו ישירות לתשובות של מנועי הבינה המלאכותית בדיוק כשמנהלי רכש מחפשים פתרונות לניהול מלאי. זה ה-ROI הכי גבוה שראינו מפעילות דיגיטלית עד היום."`,
                initial: 'ש',
                name: 'שירן פלדמן',
                role: 'סמנכ"לית שיווק, StockBase'
              },
              {
                text: `"התחרות בתחום האסתטיקה הרפואית פסיכית. רצינו לבדל את עצמנו, והמעבר לקידום מבוסס AI פשוט עשה את העבודה. מטופלות מגיעות אלינו אחרי שהבינה המלאכותית המליצה עלינו כקליניקה עם הדירוג והאמינות הגבוהים ביותר באזור. בניית הסמכות שנטקליק עשו עבורנו פשוט עובדת."`,
                initial: 'ר',
                name: 'ד"ר רון גלבוע',
                role: 'גלבוע מדיקל קליניק'
              },
              {
                text: `"צוות מנצח שמבין לעומק את המהפכה שקורית עכשיו בדיגיטל. מעבר לאתר המרשים שהם בנו לנו, העובדה שאנחנו מופיעים כהמלצה ב-Gemini וב-Perplexity לשאילתות של מיסוי חברות, מביאה למשרד שלנו לקוחות פרימיום שכבר סומכים עלינו עוד לפני שיחת הטלפון הראשונה."`,
                initial: 'מ',
                name: 'מיכל בר-און',
                role: "בר-און ושות' רואי חשבון"
              },
              {
                text: `"אנחנו מוכרים ציוד סאונד וקולנוע ביתי ברמות הגבוהות ביותר (High-End). חיפשנו דרך להגיע ללקוחות שעושים מחקר מעמיק ברשת לפני קנייה. נטקליק סידרו לנו נוכחות בכל הכלים החכמים, והיום כשלקוח שואל על מפרטים טכניים - ה-AI מפנה אותו אלינו כמקור מוסמך. אלופים."`,
                initial: 'ת',
                name: 'תומר יצחקי',
                role: 'SoundSpace מערכות שמע'
              }
            ].map((review, i) => (
              <div key={i} className="snap-center shrink-0 w-80 md:w-96 bg-white rounded-3xl p-8 shadow-md border border-gray-100 flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex text-mv-accent text-sm">
                    <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                  </div>
                  <i className="fas fa-quote-left text-4xl text-blue-100"></i>
                </div>
                <p className="text-gray-600 mb-8 flex-1 leading-relaxed text-sm">
                  {review.text}
                </p>
                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-100">
                  <div className="w-12 h-12 bg-blue-100 text-mv-primary rounded-full flex items-center justify-center font-bold text-lg">
                    {review.initial}
                  </div>
                  <div>
                    <h4 className="font-bold text-mv-dark">{review.name}</h4>
                    <p className="text-xs text-gray-500">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-gray-100 text-mv-dark text-xs font-bold tracking-wide mb-4">
              שאלות ותשובות
            </span>
            <h2 className="text-4xl font-black text-mv-dark mb-4">
              מה שואלים אותנו <span className="text-gradient">לפני שמתחילים.</span>
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                id: 'faq1',
                q: 'תוך כמה זמן רואים תוצאות?',
                a: 'בדרך כלל מרגישים שיפור משמעותי בחשיפה ובתנועה לאתר תוך 60-90 יום. עם זאת, תהליך בניית סמכות אמיתית ויצירת נוכחות מאסיבית בגוגל ובמנועי AI דורש התמדה, ולכן ההשפעה המלאה המייצרת זרימת פניות יציבה נבנית במלואה לאורך 6-9 חודשים.'
              },
              {
                id: 'faq2',
                q: 'איך מודדים הצלחה?',
                a: 'אנו מודדים הצלחה קודם כל בשורה התחתונה: עלייה בכמות הכניסות האיכותיות לאתר, צמיחה בכמות הלידים, והגדלת נתח החשיפה של המותג שלכם בתוצאות החיפוש ובמודלי ה-AI. הלקוחות שלנו מקבלים דוחות שקופים ומפורטים המציגים את ההתקדמות בכל מדד.'
              },
              {
                id: 'faq3',
                q: 'כבר יש לי SEO. למה צריך גם GEO?',
                a: 'מצוין! תשתית SEO חזקה היא נקודת פתיחה נהדרת. אנו נוסיף על כך את שכבת הקידום החדישה ב-AI, נשפר את מבנה התוכן כדי שהבינה המלאכותית תבין ותמליץ עליכם, וניצור מעטפת אזכורים רחבה שתהפוך את העסק שלכם למותג-על בקטגוריה שלו.'
              },
              {
                id: 'faq4',
                q: 'האם זה מחליף קידום אתרים (SEO) רגיל?',
                a: 'ממש לא, זהו שדרוג משמעותי. השירות שלנו מעניק מעטפת כוללת שנועדה לייצר חשיפה ומיתוג מקסימלי גם במנועי החיפוש של גוגל וגם במנועי הבינה המלאכותית החדשים. אנו בונים אסטרטגיה הוליסטית הדואגת שהעסק שלכם יהיה נוכח, בולט ומומלץ בכל מקום בו הלקוחות שלכם מחפשים מידע.'
              },
              {
                id: 'faq5',
                q: 'האם זה רלוונטי ל-B2C?',
                a: 'כן, בהחלט! המעטפת הדיגיטלית שלנו רלוונטית לכל תחומי העיסוק ולכל סוגי העסקים (גם B2B וגם B2C). ברגע שלקוחות מחפשים מידע, השוואות או המלצות בתחום שלכם - אנחנו דואגים שתופיעו בפניהם כמותג המוביל והאמין ביותר בתעשייה.'
              },
              {
                id: 'faq6',
                q: 'האם צריך להקים אתר חדש בשביל השירות?',
                a: 'לא בהכרח. במידה ויש לכם אתר קיים הבנוי על תשתית איכותית, צוות הפיתוח וה-SEO שלנו יוכל לבצע עליו את ההתאמות הנדרשות, להטמיע את הסכמות (Schema Markup) המתקדמות ולשפר את ארכיטקטורת הנתונים כדי שיתאים בצורה מושלמת לדרישות הסריקה של מנועי ה-AI.'
              }
            ].map((faq) => (
              <div key={faq.id} className="border border-gray-200 rounded-2xl overflow-hidden">
                <button
                  className="w-full px-6 py-5 text-right flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors focus:outline-none"
                  onClick={() => toggleAccordion(faq.id)}
                >
                  <span className="font-bold text-mv-dark text-lg">{faq.q}</span>
                  <i
                    className={`fas fa-chevron-down text-mv-primary accordion-icon ${
                      openFaq === faq.id ? 'open' : ''
                    }`}
                  ></i>
                </button>
                <div
                  className={`accordion-content bg-white px-6 ${
                    openFaq === faq.id ? 'open' : ''
                  }`}
                >
                  <div className="py-4 text-gray-600 leading-relaxed">{faq.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section / Footer Wrap */}
      <section id="contact" className="py-24 bg-gradient-royal relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20 -mr-40 -mt-40 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-mv-accent rounded-full blur-3xl opacity-20 -ml-40 -mb-40 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text / Info */}
            <div className="text-white">
              <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-blue-200 text-xs font-bold tracking-wide mb-4 border border-white/20">
                בואו נתחיל
              </span>
              <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                מוכנים להפוך למקור הסמכות<br />
                <span className="text-[#FF8A9B]">בתעשייה שלכם?</span>
              </h2>
              <p className="text-lg text-blue-100 mb-10 leading-relaxed">
                הצעד הראשון לדומיננטיות מתחיל באבחון נכון. השאירו פרטים, ונקיים פגישת יעוץ מקצועית בה ננתח את הנראות הדיגיטלית שלכם מול המתחרים, ונבנה מפת דרכים אסטרטגית לכיבוש ה-AI והחיפוש האורגני.
              </p>
              <ul className="space-y-4 mb-10 text-blue-100">
                <li className="flex items-center gap-3">
                  <i className="fas fa-check text-green-400"></i>
                  <span>ניתוח עומק של נראות המותג במנועי AI</span>
                </li>
                <li className="flex items-center gap-3">
                  <i className="fas fa-check text-green-400"></i>
                  <span>זיהוי &apos;Quick Wins&apos; ויצירת אסטרטגיית חדירה</span>
                </li>
                <li className="flex items-center gap-3">
                  <i className="fas fa-check text-green-400"></i>
                  <span>הערכת הפער מול המתחרים שלכם</span>
                </li>
                <li className="flex items-center gap-3">
                  <i className="fas fa-check text-green-400"></i>
                  <span>ייעוץ אסטרטגי טהור, ללא התחייבות</span>
                </li>
              </ul>

              <div className="flex gap-6">
                <a href="tel:077-6149440" className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-mv-accent transition-colors">
                    <i className="fas fa-phone-alt text-sm"></i>
                  </div>
                  <div>
                    <p className="text-xs text-blue-200">חייגו עכשיו</p>
                    <p className="text-lg font-bold font-sans tracking-wider">077-6149440</p>
                  </div>
                </a>
                <a href="https://wa.me/972503938151" className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-green-500 transition-colors">
                    <i className="fab fa-whatsapp text-lg"></i>
                  </div>
                  <div>
                    <p className="text-xs text-blue-200">הודעה מהירה</p>
                    <p className="text-lg font-bold">בוואטסאפ</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="glass-card rounded-3xl p-8 md:p-10 relative">
              <h3 className="text-2xl font-bold text-mv-dark mb-6">השאירו פרטים ונחזור אליכם</h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert('הטופס נשלח בהצלחה! (סימולציה)');
                }}
                className="space-y-5"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">שם מלא *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-mv-primary focus:border-mv-primary outline-none transition-all bg-white/80"
                      placeholder="ישראל ישראלי"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">שם החברה</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-mv-primary focus:border-mv-primary outline-none transition-all bg-white/80"
                      placeholder="העסק שלי בע״מ"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">טלפון *</label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-mv-primary focus:border-mv-primary outline-none transition-all bg-white/80"
                      placeholder="077-6149440"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">דוא&quot;ל *</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-mv-primary focus:border-mv-primary outline-none transition-all bg-white/80"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">איך נוכל לעזור?</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-mv-primary focus:border-mv-primary outline-none transition-all bg-white/80 resize-none"
                    placeholder="ספרו לנו קצת על העסק שלכם..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl text-white bg-mv-primary hover:bg-blue-700 font-bold text-lg shadow-lg shadow-blue-500/30 transition-all hover:-translate-y-1"
                >
                  שלחו פנייה
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Bottom */}
      <footer className="bg-mv-dark border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-blue-200 text-sm">&copy; 2026 Netclick Digital - כל הזכויות שמורות.</div>
          <div className="flex gap-6 text-sm text-blue-200">
            <a href="#" className="hover:text-white transition-colors">
              תקנון שימוש ותנאי הסכם לקוח
            </a>
            <a href="#" className="hover:text-white transition-colors">
              הצהרת נגישות
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
