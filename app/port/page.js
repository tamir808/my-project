import Link from 'next/link';

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-transparent to-emerald-100/50 pointer-events-none" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 left-20 w-80 h-80 bg-emerald-200/30 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="max-w-6xl mx-auto px-6 py-16 relative z-10">
        {/* Hero */}
        <section className="text-center max-w-3xl mx-auto mb-20">
          <div className="w-48 h-48 rounded-full overflow-hidden  mb-8 mx-auto shadow-lg">
            <img 
              className="w-full h-full object-cover"  
              src="https://media.discordapp.net/attachments/1416045745265447095/1420372623929376850/IMG_1124.jpg?ex=69468996&is=69453816&hm=598d267ab31cec25c757fd75edc973277ed5aec554607aa6916df578f214d7be&=&format=webp&width=992&height=1764" 
              alt="Tamir Bishrel" 
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">
            Tamir Bishrel
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Student 
          </p>
        </section>

        {/* About */}
        <section className="glass-effect rounded-2xl p-8 md:p-12 border border-gray-100 shadow-lg mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              About <span className="text-emerald-600">Me</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. 
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
            </p>
          </div>
        </section>

      

        {/* Bio */}
        <section className="mt-24">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            My <span className="text-emerald-600">Journey</span>
          </h2>
          <div className="max-w-3xl mx-auto px-4">
            <div className="space-y-8">
              {/* 2009 */}
              <div className="flex items-start">
                <div className="bg-emerald-100 text-emerald-800 font-medium px-4 py-2 rounded-full">2009</div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold text-gray-800">Born in Mongolia</h3>
                  <p className="text-gray-600">Opened my eyes to the world</p>
                </div>
              </div>
              
              {/* 2010 */}
              <div className="flex items-start">
                <div className="bg-emerald-100 text-emerald-800 font-medium px-4 py-2 rounded-full">2010</div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold text-gray-800">Turned 1 year old</h3>
                  <p className="text-gray-600">Began my journey in Mongolia</p>
                </div>
              </div>
              
              {/* 2015 */}
              <div className="flex items-start">
                <div className="bg-emerald-100 text-emerald-800 font-medium px-4 py-2 rounded-full">2015</div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold text-gray-800">Started school</h3>
                  <p className="text-gray-600">Began my education journey</p>
                </div>
              </div>
              
              {/* 2025 - Present */}
              <div className="flex items-start">
                <div className="bg-emerald-100 text-emerald-800 font-medium px-4 py-2 rounded-full">2025 - Present</div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold text-gray-800">High School student</h3>
                  <p className="text-gray-600">Pursuing interests in IT/CS</p>
                </div>
              </div>
              
              {/* Future */}
              <div className="flex items-start">
                <div className="bg-emerald-100 text-emerald-800 font-medium px-4 py-2 rounded-full">Future</div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold text-gray-800">University</h3>
                  <p className="text-gray-600">Aspiring to study abroad</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <br/>

        {/* Skills */}
        <section className="mt-24">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            My <span className="text-emerald-600">Skills</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
            {['HTML/CSS', 'JavaScript', 'React', 'Next.js', 'UI/UX Design', 'Problem Solving', 'Teamwork', 'Communication'].map((skill, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-emerald-50 to-emerald-100 text-emerald-700 rounded-full border border-emerald-100 shadow-sm hover:shadow-md transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </section> <br/> <br/> <br/>
          {/* Contact */}
        <section className="glass-effect rounded-2xl p-8 md:p-12 border border-gray-100 shadow-lg mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Get In <span className="text-emerald-600">Touch</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Feel free to reach out for collaborations or just a friendly hello
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <a 
                href="bishreltamir20@gmail.com" 
                className="flex items-center justify-center gap-3 p-4 bg-white/50 rounded-xl hover:bg-emerald-50 transition-colors border border-gray-100"
              >
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-700">bishreltamir20@gmail.com</span>
              </a>
              
              
              <a  
                href="https://github.com/tamir808" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 p-4 bg-white/50 rounded-xl hover:bg-emerald-50 transition-colors border border-gray-100"
              >
                <svg className="w-6 h-6 text-emerald-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 7.069c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.7 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.196 22 16.425 22 12.017 22 6.484 17.522 2 12 2z" />
                </svg>
                <span className="text-gray-700">@tamir808</span>
              </a>
              
              <a 
                href="https://www.instagram.com/b.tamir_?igsh=NDJ2NzU3anV0enJl&utm_source=qr" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 p-4 bg-white/50 rounded-xl hover:bg-emerald-50 transition-colors border border-gray-100"
              >
                <svg className="w-6 h-6 text-emerald-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
                <span className="text-gray-700">@b.tamir_</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}