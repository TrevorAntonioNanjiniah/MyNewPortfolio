import { useTheme } from 'next-themes'

export default function Header() {
  const { theme, setTheme } = useTheme()

  return (
    <header className="flex justify-between p-4">
      <h1 className="text-xl font-bold">NTA</h1>
      <button
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        className="border px-2 py-1 rounded"
      >
        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
      </button>
    </header>
  )
}
