import { FEATURE_PROJECTS } from '@/lib/featureFlags';
import { redirect } from 'next/navigation';

export default function ProjectsPage() {
  if (!FEATURE_PROJECTS) {
    redirect('/dashboard');
  }
  return <h1 className="text-2xl font-bold">Projects (coming soon)</h1>;
}
