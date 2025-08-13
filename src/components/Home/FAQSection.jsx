import React from "react";

const FAQSection = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-xl text-gray-600">
          Everything you need to know about skill-based student hiring
        </p>
      </div>
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="text-2xl font-semibold leading-none tracking-tight">
              How is lazyIntern different from traditional job boards?
            </h3>
          </div>
          <div className="p-6 pt-0">
            <p className="text-gray-600">
              Unlike traditional job boards that focus on resumes and GPAs,
              lazyIntern showcases actual student projects and coding
              skills. Companies can see what candidates have built before
              even scheduling an interview.
            </p>
          </div>
        </div>
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="text-2xl font-semibold leading-none tracking-tight">
              Do students need high GPAs to be successful on lazyIntern?
            </h3>
          </div>
          <div className="p-6 pt-0">
            <p className="text-gray-600">
              Not at all! We believe coding ability and project experience
              matter more than grades. Students with impressive portfolios
              of real projects can showcase their talents regardless of
              their academic performance.
            </p>
          </div>
        </div>
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="text-2xl font-semibold leading-none tracking-tight">
              What types of companies use lazyIntern?
            </h3>
          </div>
          <div className="p-6 pt-0">
            <p className="text-gray-600">
              We work with startups, scale-ups, and enterprises across all
              industries. From fintech startups to established tech
              companies, any organization looking for skilled developers can
              benefit from our project-based hiring approach.
            </p>
          </div>
        </div>
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="text-2xl font-semibold leading-none tracking-tight">
              How do you ensure the quality of student profiles?
            </h3>
          </div>
          <div className="p-6 pt-0">
            <p className="text-gray-600">
              We encourage students to showcase their best work with
              detailed project descriptions, live demos, and GitHub
              repositories. This allows companies to thoroughly evaluate
              technical skills and coding quality before making contact.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQSection;