import React, { useState, useMemo } from 'react';
import InstitutionList from '../components/InstitutionList';
import InstitutionDetails from '../components/InstitutionDetails';

const institutionsData = [
  {
    id: 1,
    name: 'Hogwarts University',
    location: 'United Kingdom',
    logo: 'https://images.unsplash.com/photo-1594322436404-5a0526db4d13?auto=format&fit=crop&w=100&q=80',
    cover: 'https://images.unsplash.com/photo-1541339907198-e08756ebafe1?auto=format&fit=crop&w=800&q=80',
    description: 'A world-renowned institution for magical arts and sciences, providing a unique blend of heritage and modern academic excellence. The university offers a wide range of programs spanning ancient studies to modern magical theory.',
    campusDetails: ['Tested Final', 'New'],
    intakes: ['April - 2026'],
    modes: ['Full Time', 'Part Time']
  },
  {
    id: 2,
    name: 'University of Individual Induction',
    location: 'United Kingdom',
    logo: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=100&q=80',
    cover: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80',
    description: 'Leading the way in personalized education and research, focus on individual growth and industrial induction. Our labs are state-of-the-art and tailored for high-impact research.',
    campusDetails: ['Main Campus', 'Research Center'],
    intakes: ['September - 2025'],
    modes: ['Full Time']
  },
  {
    id: 3,
    name: 'PSNA College',
    location: 'United Kingdom',
    logo: 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=100&q=80',
    cover: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=800&q=80',
    description: 'Committed to engineering and technology excellence for over three decades. We bridge the gap between academic theory and industrial practice.',
    campusDetails: ['Tech Park', 'Innovation Hub'],
    intakes: ['July - 2026'],
    modes: ['Full Time', 'Online']
  },
  { id: 4, name: 'University of East Anglia', location: 'United Kingdom', logo: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=100&q=80' },
  { id: 5, name: 'Wrexham Glyndwr University', location: 'United Kingdom', logo: 'https://images.unsplash.com/photo-1594322436404-5a0526db4d13?auto=format&fit=crop&w=100&q=80' },
  { id: 6, name: 'University of Lincoln', location: 'United Kingdom', logo: 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=100&q=80' },
  { id: 7, name: 'Edge Hill University', location: 'United Kingdom', logo: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=100&q=80' },
  { id: 8, name: 'University of Chichester', location: 'United Kingdom', logo: 'https://images.unsplash.com/photo-1594322436404-5a0526db4d13?auto=format&fit=crop&w=100&q=80' },
  { id: 9, name: 'York St John University', location: 'United Kingdom', logo: 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=100&q=80' },
  { id: 10, name: 'Solent University', location: 'United Kingdom', logo: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=100&q=80' }
];

const InstitutionSearch = () => {
  const [selectedId, setSelectedId] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredInstitutions = useMemo(() => {
    return institutionsData.filter(inst => 
      inst.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      inst.location.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const selectedInstitution = useMemo(() => {
    return filteredInstitutions.find(i => i.id === selectedId) || filteredInstitutions[0];
  }, [selectedId, filteredInstitutions]);

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col font-sans selection:bg-blue-100 selection:text-blue-700">
      <main className="flex-grow pt-24 pb-12">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Institution List Panel */}
            <InstitutionList 
              institutions={filteredInstitutions}
              selectedId={selectedId}
              onSelect={setSelectedId}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              totalFound={filteredInstitutions.length}
            />

            {/* Institution Details Panel */}
            <InstitutionDetails 
              institution={selectedId ? selectedInstitution : null} 
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default InstitutionSearch;
