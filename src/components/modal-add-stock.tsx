"use client";
import { Plus } from "lucide-react";
import { useState } from "react";

export function AddStockModal() {
  const [openModal, setOpenModal] = useState<boolean>(false);
  return (
    <>
      <button
        className="w-fit flex self-end bg-primary gap-3 py-2 px-3 rounded-xl mx-4 lg:mx-6"
        onClick={() => {
          setOpenModal(!openModal);
        }}
      >
        <Plus />
        <span>Add Stock</span>
      </button>
      {openModal && (
        <div className="fixed inset-0 h-screen z-50 bg-primary-500/50">
          <div className="absolute top-1/2 left-1/2 flex flex-col gap-3 bg-red-500 p-4 rounded-xl border-2 border-gray-800">
            <h1 className="font-semibold text-xl">Add Stock</h1>
          </div>
        </div>
      )}
    </>
  );
}
