import { useState, useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState('')

  useEffect(() => {
    // Listen for messages from main process
    if (window.electron) {
      window.electron.on('main-process-message', (msg: string) => {
        setMessage(msg)
      })
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-8">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl w-full">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            <span className="text-blue-600">Electron</span> + React + TypeScript
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            with <span className="text-cyan-600 font-semibold">Tailwind CSS</span>
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl p-6 text-white">
            <p className="text-sm font-medium mb-2">Counter Example</p>
            <div className="flex items-center justify-between">
              <button
                onClick={() => setCount(count - 1)}
                className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                -
              </button>
              <span className="text-3xl font-bold">{count}</span>
              <button
                onClick={() => setCount(count + 1)}
                className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                +
              </button>
            </div>
          </div>

          {message && (
            <div className="bg-green-50 border border-green-200 rounded-xl p-4">
              <p className="text-sm font-medium text-green-800 mb-1">
                Message from Main Process:
              </p>
              <p className="text-green-700">{message}</p>
            </div>
          )}

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-purple-50 rounded-lg p-4">
              <h3 className="font-semibold text-purple-900 mb-2">⚡ Fast</h3>
              <p className="text-sm text-purple-700">
                Built with Vite for lightning-fast development
              </p>
            </div>
            <div className="bg-pink-50 rounded-lg p-4">
              <h3 className="font-semibold text-pink-900 mb-2">🎨 Styled</h3>
              <p className="text-sm text-pink-700">
                Beautiful UI with Tailwind CSS utilities
              </p>
            </div>
            <div className="bg-amber-50 rounded-lg p-4">
              <h3 className="font-semibold text-amber-900 mb-2">🔒 Type-Safe</h3>
              <p className="text-sm text-amber-700">
                Full TypeScript support for better DX
              </p>
            </div>
            <div className="bg-cyan-50 rounded-lg p-4">
              <h3 className="font-semibold text-cyan-900 mb-2">⚛️ React</h3>
              <p className="text-sm text-cyan-700">
                Modern React with hooks and components
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-200">
            <p className="text-center text-gray-600 text-sm">
              Edit <code className="bg-gray-100 px-2 py-1 rounded text-blue-600">src/renderer/App.tsx</code> and save to test hot-reload
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
