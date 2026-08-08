import PageHeader from '@/components/ui/header';
import ContactInfo from '@/components/contact/contactInfo';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#080a22] flex flex-col">
      <PageHeader
        title="Contact"
        maincontent="Let's build something"
        description="I'm currently open to internships, junior roles and collaborative side projects. Whether you have an opportunity, a question about one of my projects, or just want to talk shop, my inbox is always open."
      />

      <ContactInfo/>
    </div>
  );
}
