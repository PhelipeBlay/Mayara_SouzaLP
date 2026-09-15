import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Container } from "@/components/ui/Container";
import { contact } from "@/data/contact";

export default function Privacidade() {
  const year = new Date().getFullYear();

  return (
    <>
      <Helmet>
        <title>Política de Privacidade — Mayara Souza Psicanalista</title>
        <meta name="description" content="Política de privacidade do site de Mayara Souza, psicóloga e psicanalista em Curitiba." />
      </Helmet>

      <section className="bg-cream pt-32 pb-24">
        <Container>
          <div className="max-w-3xl mx-auto">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-blush-600 text-sm font-sans mb-10 hover:text-blush-700 transition-colors"
            >
              ← Voltar ao site
            </Link>

            <h1 className="font-serif text-4xl md:text-5xl text-petrol-600 mb-3">
              Política de Privacidade
            </h1>
            <p className="text-ink-soft text-sm mb-12">
              Última atualização: {year} · {contact.site}
            </p>

            <div className="prose prose-stone max-w-none space-y-8 text-ink leading-relaxed">

              <section>
                <h2 className="font-serif text-2xl text-petrol-600 mb-3">1. Quem somos</h2>
                <p>
                  Este site é operado por <strong>Mayara Souza</strong>, psicóloga e psicanalista,
                  CRP-08/19827, com consultório em {contact.address.full}.
                  Nosso site é {contact.site}.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-petrol-600 mb-3">2. Quais dados coletamos</h2>
                <p>Podemos coletar os seguintes tipos de dados pessoais:</p>
                <ul className="list-disc list-inside space-y-2 mt-3 text-ink-soft">
                  <li>Nome e sobrenome (quando fornecido voluntariamente pelo usuário)</li>
                  <li>Número de telefone/WhatsApp (quando fornecido voluntariamente)</li>
                  <li>Endereço de e-mail (quando fornecido voluntariamente)</li>
                  <li>Dados de navegação (páginas visitadas, tempo de sessão, dispositivo — via cookies de análise)</li>
                  <li>Dados de origem de tráfego (UTM parameters — para entender de onde vêm os visitantes)</li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-petrol-600 mb-3">3. Como usamos seus dados</h2>
                <p>Os dados coletados são utilizados para:</p>
                <ul className="list-disc list-inside space-y-2 mt-3 text-ink-soft">
                  <li>Responder às suas mensagens e solicitações de agendamento</li>
                  <li>Melhorar a experiência de navegação no site</li>
                  <li>Mensurar a efetividade de campanhas de marketing (com sua autorização)</li>
                  <li>Cumprir obrigações legais e regulatórias</li>
                </ul>
                <p className="mt-3">
                  Não vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros
                  para fins comerciais. Informações de saúde compartilhadas em atendimento
                  clínico são protegidas pelo sigilo profissional conforme o Código de Ética
                  do CFP.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-petrol-600 mb-3">4. Cookies e tecnologias de rastreamento</h2>
                <p>
                  Este site pode utilizar cookies e tecnologias semelhantes para análise de
                  tráfego e personalização de conteúdo. Isso inclui:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-3 text-ink-soft">
                  <li><strong>Google Analytics</strong> — análise de tráfego e comportamento de navegação</li>
                  <li><strong>Meta Pixel (Facebook)</strong> — mensuração de campanhas no Instagram e Facebook</li>
                  <li><strong>Google Ads</strong> — mensuração de conversões de campanhas</li>
                </ul>
                <p className="mt-3">
                  Você pode desativar cookies nas configurações do seu navegador.
                  Para mais informações sobre como o Google utiliza dados, acesse:{" "}
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blush-600 underline">
                    policies.google.com/privacy
                  </a>.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-petrol-600 mb-3">5. Por quanto tempo guardamos seus dados</h2>
                <p>
                  Retemos seus dados pessoais apenas pelo tempo necessário para as finalidades
                  descritas nesta política ou conforme exigido por lei. Dados de sessões de
                  psicoterapia são mantidos conforme o Código de Ética do CFP (mínimo de 5 anos).
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-petrol-600 mb-3">6. Seus direitos (LGPD)</h2>
                <p>
                  Em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você tem direito a:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-3 text-ink-soft">
                  <li>Confirmar a existência de tratamento dos seus dados</li>
                  <li>Acessar seus dados pessoais</li>
                  <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
                  <li>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários</li>
                  <li>Revogar o consentimento a qualquer momento</li>
                  <li>Solicitar a portabilidade dos dados</li>
                </ul>
                <p className="mt-3">
                  Para exercer esses direitos, entre em contato pelo e-mail:{" "}
                  <a href={`mailto:${contact.email}`} className="text-blush-600 underline">
                    {contact.email}
                  </a>
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-petrol-600 mb-3">7. Segurança dos dados</h2>
                <p>
                  Adotamos medidas técnicas e organizacionais para proteger seus dados contra
                  acesso não autorizado, alteração, divulgação ou destruição. A comunicação
                  via WhatsApp e e-mail é criptografada pelas respectivas plataformas.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-petrol-600 mb-3">8. Links externos</h2>
                <p>
                  Este site pode conter links para sites de terceiros (Instagram, Doctoralia,
                  Google Maps). Não nos responsabilizamos pelas práticas de privacidade desses
                  sites. Recomendamos que você leia as políticas de privacidade de cada site que visitar.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-petrol-600 mb-3">9. Alterações nesta política</h2>
                <p>
                  Podemos atualizar esta Política de Privacidade periodicamente. A versão mais
                  recente estará sempre disponível nesta página com a data de atualização.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-petrol-600 mb-3">10. Contato</h2>
                <p>
                  Em caso de dúvidas sobre esta política ou sobre o tratamento dos seus dados,
                  entre em contato:
                </p>
                <address className="not-italic mt-3 space-y-1 text-ink-soft">
                  <p><strong className="text-ink">Mayara Souza</strong> — {contact.crp}</p>
                  <p>{contact.address.full}</p>
                  <p>E-mail: <a href={`mailto:${contact.email}`} className="text-blush-600 underline">{contact.email}</a></p>
                  <p>WhatsApp: <a href={`https://wa.me/${contact.whatsappNumber}`} className="text-blush-600 underline">{contact.whatsappDisplay}</a></p>
                </address>
              </section>

            </div>

            <div className="mt-16 pt-8 border-t border-blush-200">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-blush-600 text-sm font-sans hover:text-blush-700 transition-colors"
              >
                ← Voltar ao site
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
