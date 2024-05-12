import AppErrorPageLayout from "../components/layout/AppErrorPageLayout";

const ErrorPage = () => {
  return (
    <AppErrorPageLayout>
      <h1 className="text-[48px] text-red-500 font-bold">Error</h1>
      <p className="text-[24px]">Something went wrong please try again later</p>
    </AppErrorPageLayout>
  );
};

export default ErrorPage;
