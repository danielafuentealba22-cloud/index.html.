import React, { useState, useEffect } from 'react';
import {
  Heart,
  MapPin,
  Clock,
  Calendar,
  Users,
  Gift,
  Camera,
  Mail,
  Phone,
  MessageCircle,
} from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [rsvpForm, setRsvpForm] = useState({
    name: '',
    email: '',
    guests: '0',
    allergies: '',
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleRsvpChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setRsvpForm({
      ...rsvpForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleRsvpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('¡Gracias por confirmar tu asistencia! Te contactaremos pronto.');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-rose-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-rose-100 via-pink-50 to-rose-200">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1600')",
          }}
        ></div>

        <div
          className={`text-center z-10 px-4 transition-all duration-2000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="mb-8">
            <Heart className="w-16 h-16 text-rose-600 mx-auto mb-6 animate-pulse" />
            <h1 className="text-6xl md:text-8xl font-serif text-rose-800 mb-4 font-bold">
              Carolynne & Diego
            </h1>
            <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-rose-600 to-transparent mx-auto mb-6"></div>
            <p className="text-2xl md:text-3xl text-rose-700 font-light tracking-wide mb-8">
              Nos casamos
            </p>
            <p className="text-xl md:text-2xl text-rose-600 font-medium">
              10 de enero de 2026
            </p>
          </div>

          <button
            onClick={() => scrollToSection('historia')}
            className="mt-8 bg-rose-600 text-white px-8 py-3 rounded-full font-medium hover:bg-rose-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Ver más
          </button>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-pink-200/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-rose-200/30 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-5 w-16 h-16 bg-pink-300/30 rounded-full blur-lg"></div>
      </section>

      {/* Navigation */}
      <nav className="sticky top-0 bg-white/95 backdrop-blur-sm shadow-md z-50 py-4">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex justify-center space-x-8">
            {[
              { id: 'historia', label: 'Nuestra Historia' },
              { id: 'ceremonia', label: 'Ceremonia' },
              { id: 'rsvp', label: 'Confirmar' },
              { id: 'galeria', label: 'Galería' },
              { id: 'regalos', label: 'Regalos' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-rose-700 font-medium hover:text-rose-900 transition-colors duration-200 py-2 px-4 rounded-lg hover:bg-rose-50"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Nuestra Historia */}
      <section id="historia" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif text-rose-800 mb-8">
            Nuestra Historia
          </h2>
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-rose-100">
            <Heart className="w-12 h-12 text-rose-500 mx-auto mb-6" />
            <p className="text-lg text-rose-700 leading-relaxed">
              Desde el primer día supimos que algo especial nos unía. Esta es
              una celebración del amor, la amistad y el compromiso que hemos
              construido juntos. Queremos compartir este momento tan especial
              con las personas que más queremos.
            </p>
          </div>
        </div>
      </section>

      {/* Ceremonia y Recepción */}
      <section
        id="ceremonia"
        className="py-20 px-4 bg-gradient-to-r from-rose-50 to-pink-50"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif text-center text-rose-800 mb-16">
            Ceremonia y Recepción
          </h2>

          <div className="bg-white rounded-2xl p-8 shadow-xl border border-rose-100">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center">
                  <Calendar className="w-6 h-6 text-rose-600 mr-4" />
                  <div>
                    <span className="font-medium text-rose-800">Fecha:</span>
                    <p className="text-rose-700">10 de enero de 2026</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Clock className="w-6 h-6 text-rose-600 mr-4" />
                  <div>
                    <span className="font-medium text-rose-800">Hora:</span>
                    <p className="text-rose-700">17:00 hrs</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-rose-600 mr-4 mt-1" />
                  <div>
                    <span className="font-medium text-rose-800">Lugar:</span>
                    <p className="text-rose-700">Jardín El Encanto</p>
                    <p className="text-rose-600 text-sm">
                      Camino Los Álamos #456, Talca
                    </p>
                    <a
                      href="https://www.google.com/maps"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-rose-600 hover:text-rose-800 underline text-sm mt-1 inline-block"
                    >
                      Ver en Google Maps
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="text-center bg-rose-50 rounded-xl p-6">
                  <Users className="w-12 h-12 text-rose-600 mx-auto mb-4" />
                  <h3 className="text-xl font-serif text-rose-800 mb-2">
                    Código de Vestimenta
                  </h3>
                  <p className="text-rose-700 font-medium">Formal Elegante</p>
                  <p className="text-rose-600 text-sm mt-2">
                    Evitar colores blanco y beige
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RSVP */}
      <section id="rsvp" className="py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-serif text-center text-rose-800 mb-8">
            Confirma tu Asistencia
          </h2>
          <p className="text-center text-rose-700 mb-12">
            Por favor confirma tu asistencia lo antes posible
          </p>

          <form
            onSubmit={handleRsvpSubmit}
            className="bg-white rounded-2xl p-8 shadow-xl border border-rose-100"
          >
            <div className="space-y-6">
              <div>
                <label className="block text-rose-800 font-medium mb-2">
                  Nombre completo
                </label>
                <input
                  type="text"
                  name="name"
                  value={rsvpForm.name}
                  onChange={handleRsvpChange}
                  className="w-full px-4 py-3 border border-rose-200 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all duration-200"
                  required
                />
              </div>

              <div>
                <label className="block text-rose-800 font-medium mb-2">
                  Número de acompañantes
                </label>
                <select
                  name="guests"
                  value={rsvpForm.guests}
                  onChange={handleRsvpChange}
                  className="w-full px-4 py-3 border border-rose-200 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all duration-200"
                  required
                >
                  <option value="0">Solo yo</option>
                  <option value="1">1 acompañante</option>
                  <option value="2">2 acompañantes</option>
                  <option value="3">3 acompañantes</option>
                </select>
              </div>

              <div>
                <label className="block text-rose-800 font-medium mb-2">
                  Alergias o requerimientos alimenticios
                </label>
                <textarea
                  name="allergies"
                  value={rsvpForm.allergies}
                  onChange={handleRsvpChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-rose-200 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all duration-200"
                  placeholder="Déjanos saber si tienes alguna alergia o requerimiento especial..."
                ></textarea>
              </div>

              <div>
                <label className="block text-rose-800 font-medium mb-2">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  name="email"
                  value={rsvpForm.email}
                  onChange={handleRsvpChange}
                  className="w-full px-4 py-3 border border-rose-200 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all duration-200"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-rose-500 to-rose-600 text-white py-4 rounded-lg font-medium hover:from-rose-600 hover:to-rose-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Confirmar Asistencia
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Galería */}
      <section
        id="galeria"
        className="py-20 px-4 bg-gradient-to-r from-pink-50 to-rose-50"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif text-rose-800 mb-8">Galería</h2>
          <div className="bg-white rounded-2xl p-12 shadow-lg border border-rose-100">
            <Camera className="w-16 h-16 text-rose-500 mx-auto mb-6" />
            <p className="text-lg text-rose-700">
              Pronto compartiremos nuestras fotos favoritas con ustedes.
            </p>
            <p className="text-rose-600 mt-4">
              ¡Estamos emocionados de crear nuevos recuerdos juntos!
            </p>
          </div>
        </div>
      </section>

      {/* Regalos */}
      <section id="regalos" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif text-center text-rose-800 mb-16">
            Regalos
          </h2>

          <div className="bg-white rounded-2xl p-8 shadow-xl border border-rose-100">
            <div className="text-center mb-8">
              <Gift className="w-12 h-12 text-rose-600 mx-auto mb-4" />
              <p className="text-lg text-rose-700 mb-6">
                Lo más importante para nosotros es tu presencia, pero si deseas
                hacernos un regalo:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-rose-50 rounded-xl p-6">
                <h3 className="text-xl font-serif text-rose-800 mb-4">
                  Transferencia Bancaria
                </h3>
                <div className="space-y-2 text-rose-700">
                  <p>
                    <span className="font-medium">Banco:</span> Banco X
                  </p>
                  <p>
                    <span className="font-medium">Cuenta Rut:</span> 12345678-9
                  </p>
                  <p>
                    <span className="font-medium">Titular:</span> Camila
                    Rodríguez
                  </p>
                </div>
              </div>

              <div className="bg-rose-50 rounded-xl p-6">
                <h3 className="text-xl font-serif text-rose-800 mb-4">
                  Sobre en el Evento
                </h3>
                <p className="text-rose-700">
                  También puedes traer tu sobre el día del evento. Habrá un
                  buzón especial para recibirlo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gradient-to-r from-rose-800 to-rose-900">
        <div className="max-w-4xl mx-auto text-center">
          <Heart className="w-8 h-8 text-rose-200 mx-auto mb-4" />
          <p className="text-rose-200 text-xl font-serif mb-2">
            Con amor, Carolynne & Diego ❤
          </p>
          <p className="text-rose-300 text-sm">
            10 de enero de 2026 • Celebremos juntos este día especial
          </p>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/56900000000"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200 z-50"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="sr-only">¿Tienes dudas?</span>
      </a>
    </div>
  );
}

export default App;
