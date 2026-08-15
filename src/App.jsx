import React, { useState } from 'react';
import { Menu, X, Heart, BookOpen, Users, Mail, MapPin, Phone, Award } from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans text-gray-800 bg-slate-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-100 shadow-sm">
        <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black tracking-tight text-blue-700">Educa-Psy</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden space-x-8 md:flex">
              <a href="#accueil" className="font-medium text-slate-600 hover:text-blue-600">Accueil</a>
              <a href="#mission" className="font-medium text-slate-600 hover:text-blue-600">Mission</a>
              <a href="#axes" className="font-medium text-slate-600 hover:text-blue-600">Axes d'action</a>
              <a href="#partenaires" className="font-medium text-slate-600 hover:text-blue-600">Partenaires</a>
              <a href="#contact" className="font-medium text-slate-600 hover:text-blue-600">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-slate-600 hover:text-blue-600 hover:bg-slate-100"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="px-4 pt-2 pb-4 border-b md:hidden bg-white/95 backdrop-blur-md border-slate-100">
            <div className="flex flex-col space-y-3">
              <a href="#accueil" onClick={() => setIsMenuOpen(false)} className="font-medium text-slate-600">Accueil</a>
              <a href="#mission" onClick={() => setIsMenuOpen(false)} className="font-medium text-slate-600">Mission</a>
              <a href="#axes" onClick={() => setIsMenuOpen(false)} className="font-medium text-slate-600">Axes d'action</a>
              <a href="#partenaires" onClick={() => setIsMenuOpen(false)} className="font-medium text-slate-600">Partenaires</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="font-medium text-slate-600">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header id="accueil" className="px-4 pt-32 pb-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-blue-200 bg-blue-800/60 rounded-full border border-blue-400/30">
            Éducation • Soutien Psychosocial • Jeunesse
          </span>
          <h1 className="mb-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Favoriser le bien-être psychosocial et l'épanouissement des jeunes
          </h1>
          <p className="max-w-2xl mx-auto mb-8 text-lg sm:text-xl text-blue-100/90 leading-relaxed">
            Educa-Psy œuvre au cœur des communautés pour accompagner la jeunesse à travers le mentorat, le soutien cognitif et la cohésion sociale.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a href="#contact" className="px-8 py-3.5 font-semibold text-blue-900 bg-white rounded-xl shadow-lg hover:bg-blue-50 transition duration-200">
              Nous contacter
            </a>
            <a href="#mission" className="px-8 py-3.5 font-semibold text-white bg-blue-700/50 rounded-xl border border-blue-400/30 hover:bg-blue-700/80 transition duration-200">
              En savoir plus
            </a>
          </div>
        </div>
      </header>

      {/* Section Mission & Vision */}
      <section id="mission" className="py-20 bg-white">
        <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <span className="text-sm font-bold tracking-wider text-blue-600 uppercase">Notre Engagement</span>
              <h2 className="mt-2 mb-6 text-3xl font-extrabold text-slate-900 sm:text-4xl">
                Un accompagnement adapté aux défis de la communauté
              </h2>
              <p className="mb-4 text-slate-600 leading-relaxed">
                Située à Grand-Goâve, l'organisation **Educa-Psy** propose des programmes ciblés visant l'éducation communautaire, la santé mentale et le développement cognitif des jeunes.
              </p>
              <p className="text-slate-600 leading-relaxed">
                À travers nos interventions sur le terrain, nous créons des espaces d'apprentissage sûrs et inclusifs favorisant l'apprentissage, la citoyenneté et le bien-être collectif.
              </p>
            </div>
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="mb-4 text-xl font-bold text-slate-900">Nos Objectifs Clés</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="p-1 text-blue-600 bg-blue-100 rounded-lg mt-0.5"><Heart size={18} /></div>
                  <span className="text-sm text-slate-700">Offrir un accompagnement psychosocial adapté à la jeunesse.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 text-blue-600 bg-blue-100 rounded-lg mt-0.5"><BookOpen size={18} /></div>
                  <span className="text-sm text-slate-700">Renforcer les compétences cognitives et éducatives.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 text-blue-600 bg-blue-100 rounded-lg mt-0.5"><Users size={18} /></div>
                  <span className="text-sm text-slate-700">Promouvoir la citoyenneté et le soutien communautaire.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Axes d'intervention */}
      <section id="axes" className="py-20 bg-slate-50">
        <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Nos Axes d'Intervention</h2>
            <p className="mt-3 text-slate-600">Des actions concrètes au service du développement humain.</p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="p-8 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition">
              <div className="flex items-center justify-center w-12 h-12 mb-6 text-blue-600 bg-blue-50 rounded-xl">
                <Heart size={26} />
              </div>
              <h3 className="mb-3 text-xl font-bold text-slate-900">Soutien Psychosocial</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Accompagnement émotionnel et social des enfants et jeunes pour renforcer leur résilience et leur bien-être.
              </p>
            </div>

            <div className="p-8 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition">
              <div className="flex items-center justify-center w-12 h-12 mb-6 text-blue-600 bg-blue-50 rounded-xl">
                <BookOpen size={26} />
              </div>
              <h3 className="mb-3 text-xl font-bold text-slate-900">Développement Cognitif</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Ateliers éducatifs, soutien scolaire et activités de stimulation intellectuelle adaptées aux besoins locaux.
              </p>
            </div>

            <div className="p-8 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition">
              <div className="flex items-center justify-center w-12 h-12 mb-6 text-blue-600 bg-blue-50 rounded-xl">
                <Users size={26} />
              </div>
              <h3 className="mb-3 text-xl font-bold text-slate-900">Mentorat & Jeunesse</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Programmes de parrainage et d'éducation à la citoyenneté pour former les leaders communautaires de demain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partenaires Partenaires officiels */}
      <section id="partenaires" className="py-16 bg-white border-t border-b border-slate-100">
        <div className="max-w-6xl px-4 mx-auto text-center sm:px-6 lg:px-8">
          <span className="text-xs font-bold tracking-wider text-slate-400 uppercase">Confiance & Collaborations</span>
          <h2 className="mt-1 mb-10 text-2xl font-bold text-slate-800">Nos Partenaires Partenaires Officiels</h2>
          
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
            <div className="flex items-center gap-3 px-6 py-4 bg-slate-50 rounded-2xl border border-slate-200/60 shadow-sm">
              <Award className="text-blue-600" size={28} />
              <span className="text-lg font-black tracking-wider text-slate-700">AUF</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-4 bg-slate-50 rounded-2xl border border-slate-200/60 shadow-sm">
              <Award className="text-blue-600" size={28} />
              <span className="text-lg font-black tracking-wider text-slate-700">AJART</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900 text-white">
        <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-extrabold sm:text-4xl">Contactez-nous</h2>
              <p className="mb-8 text-slate-400">
                Vous souhaitez en savoir plus sur nos activités, proposer un partenariat ou rejoindre nos initiatives ? Écrivez-nous dès maintenant.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-slate-800 rounded-xl text-blue-400"><MapPin size={20} /></div>
                  <span className="text-slate-300">Grand-Goâve</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-slate-800 rounded-xl text-blue-400"><Mail size={20} /></div>
                  <span className="text-slate-300">contact@educa-psy.org</span>
                </div>
              </div>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="p-8 space-y-4 bg-slate-800/80 rounded-3xl border border-slate-700/50">
              <div>
                <label className="block mb-2 text-sm font-medium text-slate-300">Nom complet</label>
                <input type="text" placeholder="Votre nom" className="w-full px-4 py-3 bg-slate-900/80 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-blue-500" />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-slate-300">Adresse e-mail</label>
                <input type="email" placeholder="votre@email.com" className="w-full px-4 py-3 bg-slate-900/80 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-blue-500" />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-slate-300">Message</label>
                <textarea rows="4" placeholder="Votre message..." className="w-full px-4 py-3 bg-slate-900/80 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-blue-500"></textarea>
              </div>
              <button type="submit" className="w-full py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition duration-200">
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center bg-slate-950 text-slate-500 text-sm border-t border-slate-800/50">
        <p>© {new Date().getFullYear()} Educa-Psy. Tous droits réservés.</p>
      </footer>
    </div>
  );
}
