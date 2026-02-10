import PageTitle from './PageTitle';

function PageHeading({ children, title }) {
  return (
    <div className="text-center max-w-xl mx-auto px-4 py-6">
      <PageTitle title={title} />
      <div className="font-primary leading-6 text-gray-600 dark:text-lighter">{children}</div>
    </div>
  );
};

export default PageHeading;