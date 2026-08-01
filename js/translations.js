// ===== i18n / Language support =====
// Add a new language by creating a new key in `translations` with the same
// keys as the existing languages. The UI selector is built from these keys.

const translations = {
  es: {
    title: 'Clínica Dental de Jesús',
    'nav.title': 'Clínica Dental de Jesús',
    'nav.about': 'Nosotros',
    'nav.services': 'Servicios',
    'nav.book': 'Agendar Cita',
    'nav.contact': 'Contacto',

    'hero.title': 'Una sonrisa vale más que mil palabras.',
    'hero.text': 'En <b>Clínica Dental de Jesús</b>, contamos con atención dental con un trato cercano, un diagnóstico preciso y tratamientos personalizados para ayudarte a mantener una sonrisa sana y llena de confianza.',
    'hero.location': '<b>Ubicados en Garibaldi 722, Local 15, Centro, Guadalajara, Jalisco, Mexico.</b>',
    'hero.cta': '¡Agenda tu cita!',
    'hero.image.alt': 'Consultorio Dental',

    'whatsapp.title': 'Chat with us on WhatsApp',
    'wa.general': 'https://wa.me/3330183780?text=Haz%20tu%20cita',

    'about.title': '¿Por qué elegirnos?',
    'about.experience.title': 'Más de 10 años de experiencia',
    'about.experience.desc': 'Más de 10 años ofreciendo atención dental profesional y confiable.',
    'about.prices.title': 'Precios Accesibles',
    'about.prices.desc': 'Cuidado dental profesional con costos equilibrados y accesibles.',
    'about.biosafety.title': 'Protocolos de Bioseguridad',
    'about.biosafety.desc': 'Cuidamos tu salud siguiendo estrictas medidas de higiene y esterilización en cada consulta.',
    'about.comprehensive.title': 'Atención Integral',
    'about.comprehensive.desc': 'Diagnóstico, prevención y tratamiento con un enfoque personalizado y profesional.',

    'team.title': 'Nuestros integrantes',
    'team.text': 'Equipo de dos profesionales dedicadas al cuidado de tu sonrisa.<br><b>Se requiere cita previa para todos nuestros servicios</b>',
    'team.dra1.name': 'Dra. Eduwiges Granda Velasco',
    'team.dra1.desc': 'Odontóloga dentista con más de 10 años de experiencia.',
    'team.dra2.name': 'Dra. Marisol Escareño Núñez',
    'team.dra2.desc': 'Odontóloga dentista comprometida con tu salud bucal.',
    'team.alt1': 'Dra. Eduwiges Granda Velasco',
    'team.alt2': 'Dra. Marisol Escareño Núñez',
    'team.wa1': 'https://wa.me/3330183780?text=Haz%20tu%20cita%20con%20Dra.%20Eduwiges%20Granda%20Velasco',
    'team.wa2': 'https://wa.me/3330183780?text=Haz%20tu%20cita%20con%20Dra.%20Marisol%20Escare%C3%B1o%20N%C3%BA%C3%B1ez',
    'team.book': 'Agendar Cita',

    'services.title': 'Nuestros servicios',
    'services.cleaning.title': 'Limpieza Dental',
    'services.cleaning.desc': 'Eliminación de placa y sarro para mantener una sonrisa saludable.',
    'services.cleaning.alt': 'Limpieza dental',
    'services.extractions.title': 'Extracciones',
    'services.extractions.desc': 'Extracción segura de piezas dentales dañadas o con problemas.',
    'services.amalgams.title': 'Amalgamas',
    'services.amalgams.desc': 'Restauración de caries con amalgamas de alta durabilidad.',
    'services.prosthetics.title': 'Prótesis Dentales',
    'services.prosthetics.desc': 'Prótesis fijas y removibles para recuperar la funcionalidad dental.',
    'services.periodontics.title': 'Periodoncia',
    'services.periodontics.desc': 'Tratamiento de encías para prevenir y controlar enfermedades periodontales.',
    'services.evaluation.title': 'Valoración',
    'services.evaluation.desc': 'Evaluación completa para determinar el mejor plan de tratamiento.',
    'services.family.title': 'Odontología Familiar',
    'services.family.desc': 'Atención dental completa para toda la familia en un solo lugar.',
    'services.resins.title': 'Resinas Dentales',
    'services.resins.desc': 'Restauración estética con resinas del color de tus dientes.',
    'services.alt': 'Servicio dental',

    'faq.title': 'Preguntas Frecuentes',
    'faq.q1': '¿Cómo puedo agendar una cita?',
    'faq.a1': 'Puedes agendar tu cita por teléfono o por WhatsApp con la dentista de tu preferencia.',
    'faq.dra1': 'Dra. Eduwiges',
    'faq.dra2': 'Dra. Marisol',
    'faq.q2': '¿Puedo ser atendido sin cita?',
    'faq.a2': 'No, todas las consultas requieren <b>cita previa.</b> Puedes agendar la tuya por teléfono o WhatsApp.',
    'faq.q3': '¿Qué servicios de odontología ofrecen?',
    'faq.a3': 'Ofrecemos limpieza dental, aplicación de coronas, amalgamas, prótesis dentales, periodoncia, valoraciones, odontología familiar y resinas dentales. Todos nuestros servicios son realizados por profesionales certificados.',
    'faq.q4': '¿Atienden a niños?',
    'faq.a4': 'Sí. Brindamos atención dental a niños y adultos en un ambiente cómodo, seguro y profesional.',
    'faq.cta': '¿Tienes más preguntas?',
    'faq.btn': 'Contáctanos',

    'contact.title': 'Contacto y Ubicación',
    'contact.address.title': 'Dirección',
    'contact.address.text': 'Calle Garibaldi 722, <b>Local 15</b>, Zona Centro, 44100 <b>Guadalajara, Jalisco.</b>',
    'contact.phone.title': 'Teléfono',
    'contact.name1': 'Dra. Eduwiges Granda Velasco',
    'contact.name2': 'Dra. Marisol Escareño Núñez',
    'contact.office': 'Consultorio',
    'contact.hours.title': 'Horarios',
    'contact.hours.weekdays': '<b>Lunes a Viernes:</b> 10:00 am - 2:00pm',
    'contact.hours.saturday': '<b>Sábados:</b> 10:00am - 2:00pm',

    'footer.title': 'Clínica Dental',
    'footer.text': 'Tu salud bucal es nuestra prioridad. Brindamos atención de calidad con un equipo de profesionales comprometidos.',
    'footer.services': 'Servicios',
    'footer.service.cleaning': 'Limpieza Dental',
    'footer.service.extractions': 'Extracciones',
    'footer.service.prosthetics': 'Prótesis Dentales',
    'footer.service.periodontics': 'Periodoncia',
    'footer.service.family': 'Odontología Familiar',
    'footer.hours': 'Horarios',
    'footer.hours.weekdays': 'Lunes a Viernes',
    'footer.hours.saturday': 'Sábados',
    'footer.hours.sunday': 'Domingos',
    'footer.hours.closed': 'Cerrado',
    'footer.contact': 'Contacto',
    'footer.address': 'Garibaldi 722, Local 15, Centro',
    'footer.phone': '+52 33 1234 5678',
    'footer.email': 'contacto@clinicadental.com',
    'footer.copyright': '© 2026 Clínica Dental de Jesús. Todos los derechos reservados.',
    'footer.credit': 'Made with love by Uriel Salazar 🤍'
  },

  en: {
    title: 'Clínica Dental de Jesús',
    'nav.title': 'Clínica Dental de Jesús',
    'nav.about': 'About Us',
    'nav.services': 'Services',
    'nav.book': 'Book Appointment',
    'nav.contact': 'Contact',

    'hero.title': 'A smile is worth more than a thousand words.',
    'hero.text': 'At <b>Clínica Dental de Jesús</b>, we provide dental care with a personal touch, an accurate diagnosis, and personalized treatments to help you keep a healthy, confident smile.',
    'hero.location': '<b>Located at Garibaldi 722, Local 15, Downtown, Guadalajara, Jalisco, Mexico.</b>',
    'hero.cta': 'Book your appointment!',
    'hero.image.alt': 'Dental Office',

    'whatsapp.title': 'Chat with us on WhatsApp',
    'wa.general': 'https://wa.me/3330183780?text=Schedule%20your%20appointment',

    'about.title': 'Why choose us?',
    'about.experience.title': 'Over 10 Years of Experience',
    'about.experience.desc': 'More than 10 years providing professional and reliable dental care.',
    'about.prices.title': 'Affordable Prices',
    'about.prices.desc': 'Professional dental care with balanced and affordable costs.',
    'about.biosafety.title': 'Biosafety Protocols',
    'about.biosafety.desc': 'We protect your health by following strict hygiene and sterilization measures at every visit.',
    'about.comprehensive.title': 'Comprehensive Care',
    'about.comprehensive.desc': 'Diagnosis, prevention, and treatment with a personalized and professional approach.',

    'team.title': 'Our team',
    'team.text': 'A team of two professionals dedicated to caring for your smile.<br><b>An appointment is required for all of our services</b>',
    'team.dra1.name': 'Dr. Eduwiges Granda Velasco',
    'team.dra1.desc': 'Dentist with more than 10 years of experience.',
    'team.dra2.name': 'Dr. Marisol Escareño Núñez',
    'team.dra2.desc': 'Dentist committed to your oral health.',
    'team.alt1': 'Dr. Eduwiges Granda Velasco',
    'team.alt2': 'Dr. Marisol Escareño Núñez',
    'team.wa1': 'https://wa.me/3330183780?text=Book%20an%20appointment%20with%20Dr.%20Eduwiges%20Granda%20Velasco',
    'team.wa2': 'https://wa.me/3330183780?text=Book%20an%20appointment%20with%20Dr.%20Marisol%20Escare%C3%B1o%20N%C3%BA%C3%B1ez',
    'team.book': 'Book Appointment',

    'services.title': 'Our services',
    'services.cleaning.title': 'Dental Cleaning',
    'services.cleaning.desc': 'Removal of plaque and tartar to keep a healthy smile.',
    'services.cleaning.alt': 'Dental cleaning',
    'services.extractions.title': 'Extractions',
    'services.extractions.desc': 'Safe removal of damaged or problem teeth.',
    'services.amalgams.title': 'Amalgams',
    'services.amalgams.desc': 'Cavity restoration with highly durable amalgams.',
    'services.prosthetics.title': 'Dental Prosthetics',
    'services.prosthetics.desc': 'Fixed and removable prosthetics to restore dental function.',
    'services.periodontics.title': 'Periodontics',
    'services.periodontics.desc': 'Gum treatment to prevent and control periodontal disease.',
    'services.evaluation.title': 'Evaluation',
    'services.evaluation.desc': 'Complete evaluation to determine the best treatment plan.',
    'services.family.title': 'Family Dentistry',
    'services.family.desc': 'Complete dental care for the whole family in one place.',
    'services.resins.title': 'Dental Resins',
    'services.resins.desc': 'Aesthetic restoration with tooth-colored resins.',
    'services.alt': 'Dental service',

    'faq.title': 'Frequently Asked Questions',
    'faq.q1': 'How can I book an appointment?',
    'faq.a1': 'You can book your appointment by phone or WhatsApp with the dentist of your choice.',
    'faq.dra1': 'Dr. Eduwiges',
    'faq.dra2': 'Dr. Marisol',
    'faq.q2': 'Can I be seen without an appointment?',
    'faq.a2': 'No, all consultations require a <b>prior appointment.</b> You can book yours by phone or WhatsApp.',
    'faq.q3': 'What dental services do you offer?',
    'faq.a3': 'We offer dental cleaning, crowns, amalgams, dental prosthetics, periodontics, evaluations, family dentistry, and dental resins. All of our services are performed by certified professionals.',
    'faq.q4': 'Do you treat children?',
    'faq.a4': 'Yes. We provide dental care for children and adults in a comfortable, safe, and professional environment.',
    'faq.cta': 'Have more questions?',
    'faq.btn': 'Contact us',

    'contact.title': 'Contact & Location',
    'contact.address.title': 'Address',
    'contact.address.text': 'Garibaldi St. 722, <b>Local 15</b>, Downtown, 44100 <b>Guadalajara, Jalisco.</b>',
    'contact.phone.title': 'Phone',
    'contact.name1': 'Dr. Eduwiges Granda Velasco',
    'contact.name2': 'Dr. Marisol Escareño Núñez',
    'contact.office': 'Office',
    'contact.hours.title': 'Hours',
    'contact.hours.weekdays': '<b>Monday to Friday:</b> 10:00 am - 2:00 pm',
    'contact.hours.saturday': '<b>Saturdays:</b> 10:00 am - 2:00 pm',

    'footer.title': 'Clínica Dental',
    'footer.text': 'Your oral health is our priority. We provide quality care with a team of committed professionals.',
    'footer.services': 'Services',
    'footer.service.cleaning': 'Dental Cleaning',
    'footer.service.extractions': 'Extractions',
    'footer.service.prosthetics': 'Dental Prosthetics',
    'footer.service.periodontics': 'Periodontics',
    'footer.service.family': 'Family Dentistry',
    'footer.hours': 'Hours',
    'footer.hours.weekdays': 'Monday to Friday',
    'footer.hours.saturday': 'Saturdays',
    'footer.hours.sunday': 'Sundays',
    'footer.hours.closed': 'Closed',
    'footer.contact': 'Contact',
    'footer.address': 'Garibaldi 722, Local 15, Downtown',
    'footer.phone': '+52 33 1234 5678',
    'footer.email': 'contacto@clinicadental.com',
    'footer.copyright': '© 2026 Clínica Dental de Jesús. All rights reserved.',
    'footer.credit': 'Made with love by Uriel Salazar 🤍'
  }
};

// ===== Language application logic =====
const STORAGE_KEY = 'preferredLanguage';

function applyLanguage(lang) {
  if (!translations[lang]) lang = 'es';

  const dict = translations[lang];

  document.documentElement.lang = lang;
  document.documentElement.dir = dict._dir || 'ltr';

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const key = el.getAttribute('data-i18n-html');
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });

  document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
    const key = el.getAttribute('data-i18n-alt');
    if (dict[key] !== undefined) el.setAttribute('alt', dict[key]);
  });

  document.querySelectorAll('[data-i18n-title]').forEach((el) => {
    const key = el.getAttribute('data-i18n-title');
    if (dict[key] !== undefined) el.setAttribute('title', dict[key]);
  });

  document.querySelectorAll('[data-i18n-href]').forEach((el) => {
    const key = el.getAttribute('data-i18n-href');
    if (dict[key] !== undefined) el.setAttribute('href', dict[key]);
  });

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    const isActive = btn.dataset.lang === lang;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
  });

  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch (e) {
    // localStorage unavailable; fall back to in-memory only
  }
}

function initLanguage() {
  let savedLang = null;
  try {
    savedLang = localStorage.getItem(STORAGE_KEY);
  } catch (e) {
    // ignore
  }

  const initialLang = translations[savedLang] ? savedLang : 'es';
  applyLanguage(initialLang);

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLanguage);
} else {
  initLanguage();
}
