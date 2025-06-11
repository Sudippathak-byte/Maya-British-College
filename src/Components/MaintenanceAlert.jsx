const MaintenanceAlert = () => {
  const announcementText = "📢 Admissions Open—Apply Now! 🎓 Get yourself a British Degree Right from Nepal! Turn your ambitions into achievements with Maya British College in partnership with the University of Central Lancashire (UCLan). Courses Offered: ✅ BSc (Hons) in Business Computing & Information Systems (BCIS) (Data Science, AI, and Cyber Security) ✅ BSc (Hons) in Cybersecurity & Networking 📍 Yeti Marg, Kamal Pokhari, Kathmandu 📞 980-3664090 | 9860140513";

  return (
    <div 
      className="w-full bg-[#00609a] text-white py-1 overflow-hidden"
    >
      <div 
        className="inline-block whitespace-nowrap animate-marquee"
        style={{
          animationDuration: '50s',
          paddingLeft: '80%', // Start off-screen

        }}
      >
        {announcementText}
      </div>
      
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee linear infinite;
        }
      `}</style>
    </div>
  );
};

export default MaintenanceAlert;