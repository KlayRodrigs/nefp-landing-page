import React, { useState } from 'react';
import { SITE_DATA } from '../../data/content';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { Mail, MapPin, Send, CheckCircle2, User } from 'lucide-react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Interesse em Pesquisa / NEFP',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Simulate submission
    setSubmitted(true);
  };

  return (
    <section id="contato" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Fale Conosco"
          badgeIcon={Mail}
          title="Entre em Contato com o NEFP"
          subtitle="Tem dúvidas sobre nossas pesquisas, interesse em parcerias acadêmicas ou quer ingressar na equipe? Envie-nos uma mensagem."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Info Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-gradient-to-br from-nefp-800 to-emerald-950 text-white p-8 rounded-3xl shadow-xl">
              <h3 className="text-xl font-bold mb-4">
                Informações Institucionais
              </h3>
              <p className="text-emerald-100 text-sm leading-relaxed mb-6">
                Nosso laboratório está sediado na Unidade Acadêmica de Serra Talhada da UFRPE, no coração do Sertão do Pajeú.
              </p>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-semibold">Endereço:</strong>
                    <span>{SITE_DATA.institution.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-semibold">E-mail:</strong>
                    <a
                      href={`mailto:${SITE_DATA.institution.email}`}
                      className="text-emerald-300 hover:underline"
                    >
                      {SITE_DATA.institution.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Preview */}
            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-sm h-52 bg-slate-100 relative">
              <iframe
                title="Localização UFRPE UAST"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3947.8860714774676!2d-38.3039644!3d-7.9942732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7a83d73507cf279%3A0xe54e63473919b69b!2sUAST%20-%20Unidade%20Acad%C3%AAmica%20de%20Serra%20Talhada%20-%20UFRPE!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Interactive Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 rounded-3xl">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-nefp-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Obrigado pelo seu envio!
                  </h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto">
                    Sua mensagem foi enviada para a coordenação do NEFP ({SITE_DATA.institution.email}). Responderemos o mais breve possível.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: 'Interesse em Pesquisa / NEFP', message: '' });
                    }}
                  >
                    Enviar outra mensagem
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Seu Nome Completo *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Ex: João da Silva"
                          className="w-full pl-10 pr-4 py-2.5 bg-slate-50 rounded-xl border border-slate-200 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-nefp-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Seu E-mail *
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="seu.email@exemplo.com"
                          className="w-full pl-10 pr-4 py-2.5 bg-slate-50 rounded-xl border border-slate-200 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-nefp-500"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Assunto
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-50 rounded-xl border border-slate-200 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-nefp-500 text-slate-700"
                    >
                      <option value="Interesse em Iniciação Científica / PIBITI">Interesse em Iniciação Científica / PIBITI</option>
                      <option value="Mestrado / Doutorado em Produção Vegetal">Mestrado / Doutorado em Produção Vegetal</option>
                      <option value="Parceria em Projetos / Publicações">Parceria em Projetos / Publicações</option>
                      <option value="Outros Assuntos">Outros Assuntos</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Mensagem *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Descreva seu interesse, formação acadêmica ou detalhes da dúvida..."
                      className="w-full p-4 bg-slate-50 rounded-xl border border-slate-200 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-nefp-500"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    icon={Send}
                    iconPosition="right"
                    className="w-full"
                  >
                    Enviar Mensagem
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
