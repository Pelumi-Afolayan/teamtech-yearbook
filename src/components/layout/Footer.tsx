import { Link } from 'react-router'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#00283b] px-6 py-12 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Link
            to="/"
            className="inline-block text-xl font-black uppercase tracking-[-0.03em]"
          >
            RUC Team Tech
          </Link>

          <p className="mt-3 max-w-md text-sm leading-6 text-white/65">
            Celebrating the service, people and memories of the RUC Chapel of
            Power Technical Department.
          </p>

          <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-[#ef3340]">
            Legacy of Lights
          </p>
        </div>

        <div className="flex flex-col gap-5 sm:items-end">
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap gap-x-6 gap-y-3 text-xs font-bold uppercase tracking-[0.12em]"
          >
            <Link to="/" className="transition hover:text-[#ef3340]">
              Home
            </Link>

            <Link
              to="/graduates"
              className="transition hover:text-[#ef3340]"
            >
              Graduates
            </Link>

            <Link
              to="/memories"
              className="transition hover:text-[#ef3340]"
            >
              Memories
            </Link>

            <Link
              to="/#awards"
              className="transition hover:text-[#ef3340]"
            >
              Awards
            </Link>
          </nav>

          <p className="text-xs text-white/45">
            © {currentYear} RUC Chapel of Power Technical Department
          </p>
           <p>
            Designed and developed by{' '}
            <span className="font-semibold text-white">
            Jesupelumi Afolayan
            </span>
        </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer