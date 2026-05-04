// src/pages/api/contato.ts
import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const smtpHost = import.meta.env.SMTP_HOST;
  const smtpPort = import.meta.env.SMTP_PORT;
  const smtpUser = import.meta.env.SMTP_USER;
  const smtpPass = import.meta.env.SMTP_PASS;

  if (!smtpHost || !smtpPort || !smtpUser || !smtpPass) {
    console.error('Variáveis de ambiente SMTP não configuradas.');
    return new Response(JSON.stringify({ error: 'Configuração do servidor incompleta.' }), { status: 500 });
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: Number(smtpPort),
    secure: Number(smtpPort) === 465, // true for 465, false for other ports
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

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

    const info = await transporter.sendMail({
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

    console.log('E-mail enviado: %s', info.messageId);

    return new Response(JSON.stringify({ message: 'Sucesso' }), { status: 200 });
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.error('Erro ao enviar e-mail com Nodemailer:', e.message);
      return new Response(JSON.stringify({ error: 'Erro ao enviar e-mail.' }), { status: 500 });
    } else {
      console.error('Erro desconhecido ao enviar e-mail:', e);
      return new Response(JSON.stringify({ error: 'Erro interno no servidor.' }), { status: 500 });
    }
  }
};
