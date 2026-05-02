// src/pages/api/contato.ts
import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const resendKey = import.meta.env.RESEND_API_KEY;

  if (!resendKey) {
    console.error('RESEND_API_KEY não configurada.');
    return new Response(JSON.stringify({ error: 'Configuração do servidor incompleta.' }), { status: 500 });
  }

  try {
    const body = await request.json();
    const { nome, whatsapp, raca, idade, problema, adestramento, rotina, website } = body;

    // Honeypot validation
    if (website) {
      return new Response(JSON.stringify({ message: 'Spam detectado.' }), { status: 200 });
    }

    // Basic validation
    if (!nome || !whatsapp || !raca || !problema) {
      return new Response(JSON.stringify({ error: 'Campos obrigatórios faltando.' }), { status: 400 });
    }

    const resend = new Resend(resendKey);

    const { error } = await resend.emails.send({
      from: 'Site Beatriz Mattos <contato@abeak9adestramento.com.br>',
      to: ['lucasapsimoes@gmail.com'],
      subject: `Novo Contato: ${nome}`,
      html: `
        <h2>Novo contato recebido pelo site</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>WhatsApp:</strong> ${whatsapp}</p>
        <p><strong>Raça do cão:</strong> ${raca}</p>
        <p><strong>Idade do cão:</strong> ${idade}</p>
        <p><strong>Problema:</strong> ${problema}</p>
        <p><strong>Adestramento anterior:</strong> ${adestramento}</p>
        <p><strong>Disposto a mudar rotina:</strong> ${rotina}</p>
      `,
    });

    if (error) {
      console.error('Erro Resend:', error);
      return new Response(JSON.stringify({ error: 'Erro ao enviar e-mail.' }), { status: 500 });
    }

    return new Response(JSON.stringify({ message: 'Sucesso' }), { status: 200 });
  } catch (e) {
    console.error('Erro API:', e);
    return new Response(JSON.stringify({ error: 'Erro interno no servidor.' }), { status: 500 });
  }
};
