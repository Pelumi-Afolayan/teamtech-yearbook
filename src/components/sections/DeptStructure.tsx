import SectionWrapper from '../layout/SectionWrapper'
import { orgChart } from '../../data/orgChart'
import type { OrgRole } from '../../types/orgChart'

interface LeadershipCardProps {
  role: OrgRole
  featured?: boolean
}

function LeadershipCard({
  role,
  featured = false,
}: LeadershipCardProps) {
  const initials =
    role.name === 'To Be Added'
      ? 'TBA'
      : role.name
          .split(' ')
          .map((word) => word[0])
          .join('')
          .slice(0, 2)

  return (
    <article
      className={`overflow-hidden border border-[#d7e0e4] bg-white shadow-sm ${
        featured ? 'w-full max-w-sm' : 'w-full'
      }`}
    >
      {role.photoUrl ? (
        <img
          src={role.photoUrl}
          alt={role.name}
          className="aspect-[4/5] w-full object-cover object-top"
        />
      ) : (
        <div className="flex aspect-[4/5] w-full items-center justify-center bg-gradient-to-br from-[#00344d] to-[#75a9c4]">
          <span className="text-4xl font-black tracking-[-0.05em] text-white">
            {initials}
          </span>
        </div>
      )}

      <div className="border-t-4 border-[#c90016] px-4 py-5 text-center">
        <h3 className="text-base font-black uppercase leading-tight text-[#00344d]">
          {role.name}
        </h3>

        <p className="mt-2 text-xs font-bold uppercase leading-relaxed tracking-[0.08em] text-[#c90016]">
          {role.position}
        </p>

        {role.unit && (
          <p className="mt-2 text-xs font-medium text-[#657d88]">
            {role.unit}
          </p>
        )}
      </div>
    </article>
  )
}

function DeptStructure() {
  return (
    <SectionWrapper
      id="department-structure"
      className="bg-[#f8f5ee] text-[#00344d]"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-4 text-lg font-black uppercase tracking-[0.18em] text-[#c90016]">
            Our Leadership
          </p>

          <h2 className="text-4xl font-black uppercase tracking-[-0.04em] sm:text-6xl">
            Department Structure
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#516a76]">
            The people who provided direction, coordination and leadership
            across the Technical Department.
          </p>
        </div>

        <div className="flex flex-col items-center">
          {orgChart.map((level, levelIndex) => {
            const isChaplain = level.id === 'chaplain'
            const isCoordinators = level.id === 'coordinators'

            return (
              <div
                key={level.id}
                className="flex w-full flex-col items-center"
              >
                <p className="mb-6 text-sm font-black uppercase tracking-[0.2em] text-[#75a9c4]">
                  {level.label}
                </p>

                <div
                  className={
                    isChaplain
                      ? 'flex w-full justify-center'
                      : isCoordinators
                        ? 'grid w-full max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2'
                        : 'grid w-full grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-6'
                  }
                >
                  {level.roles.map((role) => (
                    <LeadershipCard
                      key={role.id}
                      role={role}
                      featured={isChaplain}
                    />
                  ))}
                </div>

                {levelIndex < orgChart.length - 1 && (
                  <div className="my-8 flex flex-col items-center">
                    <div className="h-12 w-[2px] bg-[#c90016]" />
                    <div className="h-3 w-3 rotate-45 bg-[#c90016]" />
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </SectionWrapper>
  )
}

export default DeptStructure