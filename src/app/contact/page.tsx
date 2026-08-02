import PageHeader from '@/components/ui/header';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#080a22] flex flex-col">
      <PageHeader
        title="Contact"
        maincontent="Let's build something"
        description="I'm currently open to internships, junior roles and collaborative side projects. Whether you have an opportunity, a question about one of my projects, or just want to talk shop, my inbox is always open and I usually reply within a day or two."
      />

      <div className="flex-grow flex items-center justify-center py-20 text-center px-6">
        <p className="text-gray-400 max-w-md">
          This page is currently under construction. Check back soon for updates!
        </p>
      </div>
    </div>
  );
}
