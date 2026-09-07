import type { Unit } from '../../types/unit'

interface UnitCardProps {
  unit: Unit
}

function UnitCard({ unit }: UnitCardProps) {
  return (
    <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
      <img
        src={unit.groupPhotoUrl}
        alt={`${unit.name} group photo`}
        className="w-full h-56 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{unit.name}</h3>
        <p className="text-sm text-gray-600 mb-4">{unit.description}</p>
        <p className="text-sm">
          <span className="font-semibold">Head:</span> {unit.head}
        </p>
        {unit.assistants.length > 0 && (
          <p className="text-sm">
            <span className="font-semibold">
              {unit.assistants.length > 1 ? 'Assistants:' : 'Assistant:'}
            </span>{' '}
            {unit.assistants.join(', ')}
          </p>
        )}
      </div>
    </div>
  )
}

export default UnitCard