// src/components/ContactForm.tsx
import { useState, useEffect } from 'react';

interface Props {
  whatsappFallback: string;
}

interface FormState {
  nome: string;
  whatsapp: string;
  raca: string;
  idade: string;
  problema: string;
  adestramento: string;
  rotina: string;
  website: string; // honeypot
}

const emptyForm: FormState = {
  nome: '',
  whatsapp: '',
  raca: '',
  idade: '',
  problema: '',
  adestramento: '',
  rotina: '',
  website: '',
};

export default function ContactForm({ whatsappFallback }: Props) {
  const [mounted, setMounted] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState('idle');
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  useEffect(() => { setMounted(true); }, []);

  const inputClass =
    'w-full bg-white border-2 border-foreground rounded-none px-4 py-3 font-sans text-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-4 focus:ring-accent/20 transition-all';
  const labelClass = 'font-display text-label font-bold text-foreground mb-2 block tracking-widest uppercase';

  const set = (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const setRadio = (field: keyof FormState, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const validate = (): boolean => {
    const required: (keyof FormState)[] = ['nome', 'whatsapp', 'raca', 'idade', 'problema', 'adestramento', 'rotina'];
    const newErrors: Partial<Record<keyof FormState, string>> = {};
    required.forEach((key) => {
      if (!form[key]) newErrors[key] = 'CAMPO OBRIGATÓRIO';
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (form.website) return;
    if (!validate()) return;

    setStatus('loading');
    try {
      const res = await fetch('/api/contato', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (!mounted) {
    return (
      <div className="grid gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-14 bg-surface border-2 border-foreground animate-pulse" />
        ))}
      </div>
    );
  }

  if (status === 'success') {
    return (
      <div className="bg-foreground text-white border-4 border-accent p-10 text-center animate-[fadeIn_0.4s_ease-in-out]">
        <h3 className="font-display text-h2 text-accent mb-4">MENSAGEM RECEBIDA.</h3>
        <p className="font-sans text-body-lg">
          Em até 24h úteis eu vou te chamar no WhatsApp para analisar o seu caso.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8">
      <input
        name="website"
        value={form.website}
        onChange={set('website')}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: 'absolute', left: '-9999px', opacity: 0, pointerEvents: 'none' }}
      />

      <div>
        <label htmlFor="cf-nome" className={labelClass}>SEU NOME COMPLETO *</label>
        <input
          id="cf-nome"
          name="nome"
          type="text"
          value={form.nome}
          onChange={set('nome')}
          placeholder="COMO VOCÊ SE CHAMA?"
          className={`${inputClass} ${errors.nome ? 'border-accent' : ''}`}
        />
        {errors.nome && <span className="text-accent font-bold text-label mt-2 block">{errors.nome}</span>}
      </div>

      <div>
        <label htmlFor="cf-whatsapp" className={labelClass}>WHATSAPP COM DDD *</label>
        <input
          id="cf-whatsapp"
          name="whatsapp"
          type="tel"
          value={form.whatsapp}
          onChange={set('whatsapp')}
          placeholder="(11) 99999-9999"
          className={`${inputClass} ${errors.whatsapp ? 'border-accent' : ''}`}
        />
        {errors.whatsapp && <span className="text-accent font-bold text-label mt-2 block">{errors.whatsapp}</span>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label htmlFor="cf-raca" className={labelClass}>RAÇA DO CÃO *</label>
          <input
            id="cf-raca"
            name="raca"
            type="text"
            value={form.raca}
            onChange={set('raca')}
            placeholder="EX: PASTOR ALEMÃO"
            className={`${inputClass} ${errors.raca ? 'border-accent' : ''}`}
          />
        </div>
        <div>
          <label htmlFor="cf-idade" className={labelClass}>IDADE DO CÃO *</label>
          <input
            id="cf-idade"
            name="idade"
            type="text"
            value={form.idade}
            onChange={set('idade')}
            placeholder="EX: 18 MESES"
            className={`${inputClass} ${errors.idade ? 'border-accent' : ''}`}
          />
        </div>
      </div>

      <div>
        <label htmlFor="cf-problema" className={labelClass}>PRINCIPAL PROBLEMA COMPORTAMENTAL *</label>
        <textarea
          id="cf-problema"
          name="problema"
          rows={3}
          value={form.problema}
          onChange={set('problema')}
          placeholder="O QUE ESTÁ ACONTECENDO NA PRÁTICA?"
          className={`${inputClass} resize-none ${errors.problema ? 'border-accent' : ''}`}
        />
      </div>

      <div className="flex flex-col gap-6">
        <div>
          <span className={labelClass}>JÁ PASSOU POR ADESTRADOR? *</span>
          <div className="flex gap-10 mt-4">
            {['SIM', 'NÃO'].map((opt) => (
              <label key={opt} className="flex items-center gap-3 cursor-pointer group font-display text-h3">
                <input
                  type="radio"
                  name="adestramento"
                  value={opt}
                  checked={form.adestramento === opt}
                  onChange={() => setRadio('adestramento', opt)}
                  className="w-6 h-6 border-2 border-foreground accent-accent cursor-pointer"
                />
                {opt}
              </label>
            ))}
          </div>
        </div>

        <div>
          <span className={labelClass}>ESTÁ DISPOSTO A MUDAR A ROTINA? *</span>
          <div className="flex gap-10 mt-4">
            {['SIM', 'NÃO'].map((opt) => (
              <label key={opt} className="flex items-center gap-3 cursor-pointer group font-display text-h3">
                <input
                  type="radio"
                  name="rotina"
                  value={opt}
                  checked={form.rotina === opt}
                  onChange={() => setRadio('rotina', opt)}
                  className="w-6 h-6 border-2 border-foreground accent-accent cursor-pointer"
                />
                {opt}
              </label>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={handleSubmit}
        disabled={status === 'loading'}
        className="w-full bg-accent text-white font-display text-h2 py-5 border-4 border-foreground shadow-[8px_8px_0px_0px_rgba(26,29,35,1)] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_rgba(26,29,35,1)] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all disabled:opacity-50"
      >
        {status === 'loading' ? 'ENVIANDO...' : 'ENVIAR PARA ANÁLISE'}
      </button>

      {status === 'error' && (
        <p className="text-accent font-bold text-center">
          OCORREU UM ERRO. TENTE O WHATSAPP.
        </p>
      )}

      <p className="text-center font-display text-label tracking-widest text-muted-foreground">
        QUER IR DIRETO? <a href={whatsappFallback} className="text-accent underline decoration-2 underline-offset-4">FALALA NO WHATSAPP</a>
      </p>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      `}} />
    </div>
  );
}
