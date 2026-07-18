import { motion } from 'framer-motion';
import { BriefcaseBusiness, Sparkles, Users } from 'lucide-react';
import { useMemo, useState } from 'react';
import Button from '../components/common/Button';
import CandidateTable from '../components/dashboard/CandidateTable';
import CreateJobModal from '../components/dashboard/CreateJobModal';
import JobCard from '../components/dashboard/JobCard';
import StatCard from '../components/dashboard/StatCard';
import DashboardLayout from '../components/layout/DashboardLayout';
import { candidates, jobs as initialJobs } from '../data/mockData';

const CompanyDashboard = () => {
  const [jobs, setJobs] = useState(initialJobs);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeJobTitle, setActiveJobTitle] = useState('Frontend Engineer');

  const totalMatches = useMemo(() => candidates.length, []);
  const visibleCandidates = useMemo(() => candidates.filter((candidate) => candidate.matchedJob === activeJobTitle), [activeJobTitle]);

  const handleCreateJob = (newJob) => {
    setJobs((current) => [{
      ...newJob,
      id: Date.now(),
      postedAt: 'Just now',
      description: newJob.description || 'A new opportunity is ready for your team.',
      skills: newJob.skills.length ? newJob.skills : ['Growth', 'Leadership']
    }, ...current]);
  };

  return (
    <DashboardLayout>
      <div className="mx-auto flex max-w-7xl flex-col space-y-8">
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }} className="flex flex-wrap items-end justify-between gap-4 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
              <Sparkles className="h-4 w-4" />
              AI Recruitment Command Center
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-gray-900">Build faster, hire smarter</h2>
            <p className="mt-2 max-w-2xl text-sm text-gray-600">Create premium job posts and review highly matched candidates in one streamlined workspace designed for modern hiring teams.</p>
          </div>
          <Button variant="primary" size="lg" icon={BriefcaseBusiness} onClick={() => setIsModalOpen(true)}>
            Create Job
          </Button>
        </motion.section>

        <section className="grid gap-6 md:grid-cols-2">
          <StatCard icon={BriefcaseBusiness} title="Published Jobs" value={jobs.length} subtitle="Live openings across product, engineering, and design." accentClass="bg-blue-50" iconClass="text-blue-600" />
          <StatCard icon={Users} title="AI Matched Candidates" value={totalMatches} subtitle="Candidates automatically matched to your active openings." accentClass="bg-emerald-50" iconClass="text-emerald-600" />
        </section>

        <section className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">My Job Posts</h3>
              <p className="text-sm text-gray-600">Keep every listing polished and ready for your ideal hire.</p>
            </div>
            <Button variant="outline" onClick={() => setIsModalOpen(true)}>+ Create Job</Button>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {jobs.map((job) => (
              <JobCard key={job.id} job={job} onViewMatches={(title) => setActiveJobTitle(title)} />
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">Matched Candidates</h3>
            <p className="text-sm text-gray-600">A curated view of the strongest candidates for {activeJobTitle}.</p>
          </div>
          <CandidateTable candidates={visibleCandidates} />
        </section>
      </div>

      <CreateJobModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onCreate={handleCreateJob} />
    </DashboardLayout>
  );
};

export default CompanyDashboard;
