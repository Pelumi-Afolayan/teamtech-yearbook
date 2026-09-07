import SectionWrapper from '../layout/SectionWrapper'
import { orgChart } from '../../data/orgChart'

function DeptStructure() {
  return (
    <SectionWrapper id="department-structure">
      <h2 className="text-3xl font-bold text-center mb-12">
        Department Structure
      </h2>
      <div className="flex flex-col items-center gap-6">
        {orgChart.map((level, index) => (
          <div key={level.id} className="flex flex-col items-center gap-6">
            <div className="flex flex-wrap justify-center gap-4">
              {level.roles.map((role) => (
                <div
                  key={role}
                  className="px-6 py-3 rounded-lg border border-gray-300 bg-white shadow-sm text-center font-medium"
                >
                  {role}
                </div>
              ))}
            </div>
            {index < orgChart.length - 1 && (
              <div className="text-2xl text-gray-400">↓</div>
            )}
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}

export default DeptStructure