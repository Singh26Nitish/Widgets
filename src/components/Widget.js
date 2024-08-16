import React, { useState } from 'react';
import Header from './Header';
import pieImage from '../assets/pie.png';

// Initial JSON data structure
const initialData = {
  categories: [
    {
      id: 1,
      name: "CSPM Executive Dashboard",
      widgets: [
        { id: 1, name: "Widget 1", text: "Random text 1" },
        { id: 2, name: "Widget 2", text: "Random text 2" }
      ]
    },
    {
      id: 2,
      name: "Security Overview",
      widgets: [
        { id: 3, name: "Widget A", text: "Random text A" },
        { id: 4, name: "Widget B", text: "Random text B" }
      ]
    },
    {
      id: 3,
      name: "Network Performance",
      widgets: [
        { id: 5, name: "Widget C", text: "Network data C" },
        { id: 6, name: "Widget D", text: "Network data D" }
      ]
    }
  ]
};

const Widget = () => {
  const [data, setData] = useState(initialData);
  const [newWidget, setNewWidget] = useState({ name: '', text: '' });
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddWidget = () => {
    if (!newWidget.name || !newWidget.text || selectedCategoryId == null) return;

    const updatedData = { ...data };
    const category = updatedData.categories.find(cat => cat.id === selectedCategoryId);
    if (category) {
      const newId = category.widgets.length
        ? Math.max(...category.widgets.map(w => w.id)) + 1
        : 1;
      category.widgets.push({ id: newId, ...newWidget });
      setData(updatedData);
      setNewWidget({ name: '', text: '' });
      setIsModalOpen(false);
    }
  };

  const handleRemoveWidget = (categoryId, widgetId) => {
    const updatedData = { ...data };
    const category = updatedData.categories.find(cat => cat.id === categoryId);
    if (category) {
      category.widgets = category.widgets.filter(widget => widget.id !== widgetId);
      setData(updatedData);
    }
  };

  const handleOpenModal = (categoryId) => {
    setSelectedCategoryId(categoryId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setNewWidget({ name: '', text: '' });
  };

  const filteredData = {
    categories: data.categories.map(category => ({
      ...category,
      widgets: category.widgets.filter(widget =>
        widget.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }))
  };

  return (
    <>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="max-w-8xl mx-auto p-4 bg-blue-50">
        <div className='flex justify-between pb-2'>
          <h2 className='font-bold'>Dashboard</h2>
          <button
            onClick={() => setIsModalOpen(true)}
            className='border rounded-lg px-2 py-1 bg-white font-medium'>
            Add Widget +
          </button>
        </div>
        {filteredData.categories.map((category) => (
          <div key={category.id} className="mb-6 p-4 border rounded bg-gray-100">
            <h2 className="text-xl font-semibold">{category.name}</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 grid grid-cols-3 gap-4">
                {category.widgets.map((widget) => (
                  <div key={widget.id} className="flex p-2 border bg-white rounded-lg relative items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <img src={pieImage} alt="Pie Chart" className="w-32 h-auto" />
                      <div className="text-center">
                        <h3 className="font-medium">{widget.name}</h3>
                        <p>{widget.text}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleRemoveWidget(category.id, widget.id)}
                      className="text-red-500 hover:text-red-700 absolute top-1 right-2">
                      ×
                    </button>
                  </div>
                ))}
                <button
                  onClick={() => handleOpenModal(category.id)}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  + Add Widget
                </button>
              </div>
            </div>
          </div>
        ))}

{isModalOpen && (
  <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
    <div className="bg-white p-6 rounded-lg shadow-md w-1/2">
      <h2 className="text-xl font-semibold mb-4">Add New Widget</h2>
      <div className="flex flex-wrap mb-4">
        {data.categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategoryId(category.id)}
            className="text-left px-4 py-2 border-b hover:bg-gray-100 font-bold mr-2 mb-2"
          >
            {category.name}
          </button>
        ))}
      </div>
      {selectedCategoryId && (
        <>
          <input
            type="text"
            placeholder="Widget Name"
            value={newWidget.name}
            onChange={(e) => setNewWidget({ ...newWidget, name: e.target.value })}
            className="w-full p-2 mb-2 border rounded"
          />
          <input
            type="text"
            placeholder="Widget Text"
            value={newWidget.text}
            onChange={(e) => setNewWidget({ ...newWidget, text: e.target.value })}
            className="w-full p-2 mb-2 border rounded"
          />
          <div className="flex justify-end space-x-2">
            <button
              onClick={handleCloseModal}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Cancel
            </button>
            <button
              onClick={handleAddWidget}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Add Widget
            </button>
          </div>
        </>
      )}
    </div>
  </div>
)}

      </div>
    </>
  );
};

export default Widget;
