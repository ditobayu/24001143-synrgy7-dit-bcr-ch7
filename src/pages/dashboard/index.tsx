import DashboardLayout from "../../components/DashboardLayout";

const DashboardPage = () => {
  return (
    <DashboardLayout>
      <div className="flex flex-col">
        <div>Breadcrumb</div>
        <div className="mt-6 mb-4">Add New Car</div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;
