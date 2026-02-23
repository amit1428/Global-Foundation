export default function NarrativeSection() {
  return (
    <section className="bg-sky-50 py-16 px-4 md:px-12">
      {/* Title */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800">
          Good Karma - Global Foundation 
        </h2>
        <div className="w-40 h-1 bg-green-500 mx-auto mt-3 rounded-full" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div className="space-y-6">
          <h3 className="flex items-center gap-3 text-blue-700 font-semibold text-lg">
            <span className="w-8 h-8 flex items-center justify-center rounded-full border border-blue-600">
              1
            </span>
            Food for education (primary cause)
          </h3>

          <ul className="space-y-3 text-gray-700 text-sm md:text-base">
            <li className="hover:translate-x-1 transition">
              • <b>Core Mid Day Meal program</b> including kitchen facilities,
              vehicles, salaries, training etc.
            </li>
            <li className="hover:translate-x-1 transition">
              • <b>ICDS:</b> Anganwadi feeding program (age 3–6)
            </li>
            <li className="hover:translate-x-1 transition">
              • <b>Other meal programs:</b> Milk distribution & breakfast feeding
            </li>
            <li className="hover:translate-x-1 transition">
              • <b>Infrastructure:</b> Seating areas, trolleys, utensils
            </li>
          </ul>
        </div>

        {/* CENTER CIRCLE */}
        <div className="flex justify-center">
          <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full border-[14px] border-blue-700 flex items-center justify-center hover:scale-105 transition duration-300">
            <div className="absolute inset-2 rounded-full border-[12px] border-green-500" />
            <div className="absolute inset-8 rounded-full border-[10px] border-orange-500" />

            <div className="text-center z-10 px-4">
              <p className="text-green-700 font-semibold text-lg">
                Social causes
              </p>
              <p className="text-green-700 font-semibold text-lg">
                supported by
              </p>
              <p className="text-green-800 font-bold text-xl">TAPF</p>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="space-y-8">
          {/* Sustainability */}
          <div className="hover:shadow-lg p-5 rounded-xl transition">
            <h3 className="flex items-center gap-3 text-green-600 font-semibold text-lg">
              <span className="w-8 h-8 flex items-center justify-center rounded-full border border-green-600">
                2
              </span>
              Sustainability (ancillary cause)
            </h3>

            <ul className="mt-3 space-y-2 text-gray-700 text-sm md:text-base">
              <li>• <b>Energy:</b> Shift to renewable sources</li>
              <li>• <b>Water:</b> Minimize freshwater usage</li>
              <li>• <b>Waste:</b> Effective waste management</li>
            </ul>
          </div>

          {/* Education */}
          <div className="hover:shadow-lg p-5 rounded-xl transition">
            <h3 className="flex items-center gap-3 text-orange-500 font-semibold text-lg">
              <span className="w-8 h-8 flex items-center justify-center rounded-full border border-orange-500">
                3
              </span>
              Education beyond MDM
            </h3>

            <p className="mt-3 text-gray-700 text-sm md:text-base">
              • <b>Scholarship program:</b> Financial aid for government school
              children and MDM beneficiaries pursuing higher education or
              specialized skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
