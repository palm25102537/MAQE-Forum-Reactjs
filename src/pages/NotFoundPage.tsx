import AppErrorPageLayout from "../components/layout/AppErrorPageLayout";

const NotFoundPage = () => {
  return (
    <AppErrorPageLayout>
      <h1 className="text-[48px] text-red-500 font-bold">Page Not Found</h1>
    </AppErrorPageLayout>
  );
};

export default NotFoundPage;
