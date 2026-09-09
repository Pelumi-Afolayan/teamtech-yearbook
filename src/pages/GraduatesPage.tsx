import { Link } from 'react-router'
import GradClass from '../components/sections/GradClass'

function GraduatesPage() {
  return (
    <main className="min-h-screen bg-[#f5ecdc] pt-20">
      <div className="bg-[#00344d] px-6 py-8 text-white">
        <div className="mx-auto max-w-6xl">
          <Link
            to="/"
            className="text-sm font-bold uppercase tracking-[0.15em] text-white/75 transition hover:text-[#ef3340]"
          >
            ← Back to Yearbook
          </Link>
        </div>
      </div>

      <GradClass />
    </main>
  )
}

export default GraduatesPage