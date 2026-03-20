import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

// eslint-disable-next-line react-refresh/only-export-components
export const Route = createFileRoute('/form')({
  component: FormComponent,
})

function FormComponent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    gender: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form data submitted:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-2">📋 Formulário</h1>
      <p className="text-gray-600 mb-6">
        Experimento de transmissão segura de dados pessoais
      </p>

      {submitted && (
        <div className="mb-4 p-4 bg-green-100 border border-green-400 rounded">
          <p className="text-green-700 font-semibold">✅ Dados recebidos com sucesso!</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold mb-1">
            Nome
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Seu nome completo"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="seu@email.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-semibold mb-1">
            Telefone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="+55 (00) 00000-0000"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-semibold mb-1">
            Senha
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Digite uma senha forte"
          />
        </div>

        <div>
          <label htmlFor="gender" className="block text-sm font-semibold mb-1">
            Sexo
          </label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Selecione uma opção</option>
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
            <option value="outro">Outro</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition"
        >
          Enviar
        </button>
      </form>

      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded">
        <p className="text-sm text-gray-700">
          <strong>🔒 Nota de segurança:</strong> Neste experimento, os dados são
          armazenados apenas localmente no navegador (localStorage). Em produção,
          use HTTPS, criptografia end-to-end e nunca transmita senhas em texto plano.
        </p>
      </div>
    </div>
  )
}
