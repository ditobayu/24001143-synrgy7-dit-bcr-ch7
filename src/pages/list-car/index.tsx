import React from "react";
import DashboardLayout from "../../components/DashboardLayout";

const ListCarPage = () => {
  return (
    <DashboardLayout>
      <div className="flex flex-col">
        <div>Breadcrumb</div>
        <div className="mt-6 mb-4">Add New Car</div>

        <div className="flex flex-col gap-4 p-4 bg-white">
          <div className="flex flex-row items-center">
            <label htmlFor="" className="w-40">
              Nama
            </label>
            <input type="text" placeholder="Placeholder" />
          </div>
          <div className="flex flex-row items-center">
            <label htmlFor="" className="w-40">
              Harga
            </label>
            <input type="text" placeholder="Placeholder" />
          </div>
          <div className="flex flex-row items-center">
            <label htmlFor="" className="w-40">
              Foto
            </label>
            <input type="text" placeholder="Placeholder" />
          </div>
          <div className="flex flex-row items-center">
            <label htmlFor="" className="w-40">
              Start Rent
            </label>
            <input type="date" placeholder="Placeholder" />
          </div>
          <div className="flex flex-row items-center">
            <label htmlFor="" className="w-40">
              Finish Rent
            </label>
            <input type="date" placeholder="Placeholder" />
          </div>
          <div className="flex flex-row items-center">
            <label htmlFor="" className="w-40">
              Created At
            </label>
            <input type="date" placeholder="Placeholder" />
          </div>
          <div className="flex flex-row items-center">
            <label htmlFor="" className="w-40">
              Updated At
            </label>
            <input type="date" placeholder="Placeholder" />
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-4 ">
        <button>Cancel</button>
        <button>Save</button>
      </div>
    </DashboardLayout>
  );
};

export default ListCarPage;
