
import { Mail, MapPin, Globe, TrendingUp, Award, GraduationCap, Briefcase, Star, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const skills = [
    'SEO (On-Page, Local, Technical)',
    'Keyword Research',
    'WordPress',
    'Google Analytics',
    'Search Console',
    'Content Strategy'
  ];

  const tools = [
    'Ahrefs',
    'Screaming Frog',
    'Trello',
    'Google Suite',
    'Google Business Profile',
    'Schema Markup'
  ];

  const experiences = [
    {
      company: 'BOOSTA',
      role: 'SEO Specialist',
      description: 'Led SEO for gambling websites in North America & Asia; achieved top 3 keyword ranking in 4 months',
      highlight: 'Top 3 Rankings'
    },
    {
      company: 'Rotate Digital',
      role: 'SEO Consultant',
      description: 'Full-site optimization for moving companies in the US market',
      highlight: 'Full-Site Optimization'
    },
    {
      company: 'Web 20 Ranker',
      role: 'Local SEO Specialist',
      description: 'Managed Google Business Profile listings from setup to top-ranking positions',
      highlight: 'GBP Expert'
    },
    {
      company: 'Amazon Affiliate SEO',
      role: 'SEO Strategist',
      description: 'Built and optimized affiliate site for the North American market',
      highlight: 'Affiliate Success'
    },
    {
      company: 'Upwork Freelance',
      role: 'SEO Consultant',
      description: 'Various global clients, providing SEO and Google Business Profile services',
      highlight: 'Global Reach'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-cyan-600/5"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto animate-fadeIn">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-4xl font-bold shadow-xl">
              AC
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold mb-4 gradient-text">
              Albina Chymbru
            </h1>
            <p className="text-xl sm:text-2xl text-slate-600 mb-6 font-medium">
              SEO Specialist | WordPress | On-Page & Local SEO
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 text-slate-600">
              <Mail className="w-5 h-5 text-blue-500" />
              <a href="mailto:albina.chymbru@gmail.com" className="hover:text-blue-600 transition-colors">
                albina.chymbru@gmail.com
              </a>
            </div>
          </div>

          <Button 
            onClick={() => scrollToSection('about')}
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Learn More About Me
            <ChevronDown className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl font-bold mb-4 gradient-text">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
          </div>
          
          <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm animate-fadeInUp">
            <CardContent className="p-8">
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Detail-oriented SEO expert with <strong>4+ years of experience</strong> across international markets. 
                I specialize in on-page SEO, local SEO (Google Business Profile), keyword research, content strategy, 
                and WordPress site optimization.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                I'm passionate about helping businesses improve their online visibility and achieve sustainable growth. 
                My approach combines technical expertise with strategic thinking, ensuring that every optimization 
                contributes to measurable results. I'm <strong>responsible, organized, and passionate about continuous learning</strong> 
                in the ever-evolving world of SEO.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Experience</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="shadow-lg border-0 bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fadeInUp">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <Briefcase className="w-8 h-8 text-blue-500 flex-shrink-0" />
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                      {exp.highlight}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{exp.company}</h3>
                  <p className="text-blue-600 font-medium mb-3">{exp.role}</p>
                  <p className="text-slate-600 leading-relaxed">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Skills & Tools</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm animate-fadeInUp">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <TrendingUp className="w-8 h-8 text-blue-500 mr-3" />
                  <h3 className="text-2xl font-bold text-slate-800">Core Skills</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <Badge key={index} variant="outline" className="px-3 py-2 text-sm border-blue-200 text-blue-700 hover:bg-blue-50 transition-colors">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm animate-fadeInUp">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Globe className="w-8 h-8 text-cyan-500 mr-3" />
                  <h3 className="text-2xl font-bold text-slate-800">Tools & Platforms</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {tools.map((tool, index) => (
                    <Badge key={index} variant="outline" className="px-3 py-2 text-sm border-cyan-200 text-cyan-700 hover:bg-cyan-50 transition-colors">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Education</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
          </div>
          
          <div className="space-y-6">
            <Card className="shadow-lg border-0 bg-white animate-fadeInUp">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <GraduationCap className="w-8 h-8 text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">EWHA University, Seoul</h3>
                    <p className="text-blue-600 font-medium mb-2">BA in Social Sciences, Public Policy</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-white animate-fadeInUp">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <GraduationCap className="w-8 h-8 text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Kyiv International University</h3>
                    <p className="text-blue-600 font-medium mb-2">BA in International Relations</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-white animate-fadeInUp">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Award className="w-8 h-8 text-cyan-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Professional Certifications</h3>
                    <ul className="text-slate-600 space-y-1">
                      <li>• Affiliate Lab by Matt Diggity</li>
                      <li>• Ahrefs SEO Courses</li>
                      <li>• Scrimba (HTML/CSS/JavaScript)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center animate-fadeInUp">
          <Star className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-6">
            Let's Work Together on Your SEO Success
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Ready to boost your website's visibility and drive more organic traffic? 
            Let's discuss how I can help you achieve your SEO goals.
          </p>
          
          <Button 
            asChild
            size="lg"
            className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <a href="mailto:albina.chymbru@gmail.com">
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-slate-900 text-center">
        <p className="text-slate-400">
          © 2024 Albina Chymbru. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Index;
