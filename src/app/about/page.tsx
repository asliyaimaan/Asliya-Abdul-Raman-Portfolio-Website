import PageHeader from '@/components/ui/header';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#080a22] flex flex-col">
      <PageHeader
        title="About"
        maincontent="The person behind the commits"
        description="A short introduction to who I am, how I got into code, and what keeps me building."
      />

      <div className="flex-grow flex items-center justify-center py-20 text-center px-6">
        <p className="text-gray-400 max-w-md">
          This page is currently under construction. Check back soon for updates!
        </p>
      </div>
    </div>
  );
}