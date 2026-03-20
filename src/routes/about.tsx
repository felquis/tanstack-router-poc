import { createFileRoute } from '@tanstack/react-router'

// eslint-disable-next-line react-refresh/only-export-components
export const Route = createFileRoute('/about')({
  component: LazyAboutComponent,
})

function LazyAboutComponent() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-purple-600">About 📖</h1>
      <p className="mt-4 text-gray-600">
        Este é um experimento sobre como dados pessoais podem ser transmitidos
        de maneira segura através da internet. Usamos este POC para demonstrar
        boas práticas de segurança, criptografia e proteção de dados.
      </p>
      <div className="mt-6 space-y-4">
        <div className="p-4 bg-green-50 border border-green-200 rounded">
          <p className="font-semibold">✅ Tecnologias Utilizadas:</p>
          <ul className="text-sm list-disc list-inside mt-2 space-y-1">
            <li>TanStack Router para roteamento eficiente</li>
            <li>Route-level code splitting para melhor performance</li>
            <li>Link prefetching automático</li>
            <li>Validação de formulários no client-side</li>
            <li>HTTPS para comunicação segura (recomendado)</li>
          </ul>
        </div>
        <div className="p-4 bg-yellow-50 border border-yellow-200 rounded">
          <p className="font-semibold">🔒 Princípios de Segurança:</p>
          <ul className="text-sm list-disc list-inside mt-2 space-y-1">
            <li>Nunca transmita senhas em texto plano</li>
            <li>Use criptografia end-to-end quando possível</li>
            <li>Valide dados no servidor, não apenas no cliente</li>
            <li>Implemente hash seguro para senhas (bcrypt, Argon2)</li>
            <li>Use tokens JWT com expiração para autenticação</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
