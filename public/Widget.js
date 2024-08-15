import React, { useEffect, useState } from "react";

// Fetch data from a public directory
const Dashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/dashboardData.json')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

const Widget = () => {
  const [data, setData] = useState(null);
  const [newWidget, setnewWidget] = useState({name: '', text: ''});
  const [newCategory, setnewCategory] = useState({category:''});

  useEffect(() => {
    const loadData = async () => {
      const initialData = await fetchData();
      setData(initialData);
    };
    loadData();
  }, []);

// Add a new widget

const handleWidget = (categoryId) => {
  if(!newWidget.name || !newWidget.text) return;

  const updateData = { ...data };
  const category = updatedata.categories.find(cat => cat.id === categoryId);
  if(category) {
    const newId = category.widgets.length 
    ? Math.max (...category.widgets.map(w => w.id)) + 1
    : 1;
    category.widgets.push({id: newId, ...newWidget});
    setData(updateData);
    setnewWidget({name: '', text: ''});
  }
};

// Remove a widget

const handleRemoveWidget = (categoryId, widgetId) => {
  const updateData = { ...data };
  const category = updateData.categories.find(cat => cat.id === categoryId);
  if (category){
    category.widgets = category.widgets.filter(widget => widget.id !== widgetId);
    setData(updateData);
  }
};

// Add a new category

const handleAddCategory = () => {
  if (!newCategor.name) return;

  const newId = data.categories.length
  ? Math.max(...data.categories.map(cat => cat.id)) + 1
  : 1;

  const updateData = {
    ...data,
    categories: [...Date.categories, {id: newId, name: newCategory.name, widgets: []}]
  };
  setData(updateData);
  setnewCategory({name: ''});
};

// Remove a category

const handleRemoveCategory = (categoryId) => {
  const updateData = {
    ...data,
    categories: data.categories.filter(category => category.id !== categoryId)
  };
  setData(updateData);
};

if(!data){
  return <div>Loading...</div>;
}


return (
  <div>
    <h1>Dashboard</h1>
    {data.categories.map((category) => (
      <div key={category.id}>
        <h2>{category.name}</h2>
        <button onClick={() => handleRemoveCategory(category.id)}>Remove Category</button>
        {category.widgets.map((widget) => (
          <div key={widget.id}>
            <h3>{widget.name}</h3>
            <p>{widget.text}</p>
            <button onClick={() => handleRemoveWidget(category.id, widget.id)}>Remove Widget</button>
          </div>
        ))}
        <div>
          <input
            type="text"
            placeholder="Widget Name"
            value={newWidget.name}
            onChange={(e) => setNewWidget({ ...newWidget, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Widget Text"
            value={newWidget.text}
            onChange={(e) => setNewWidget({ ...newWidget, text: e.target.value })}
          />
          <button onClick={() => handleAddWidget(category.id)}>+ Add Widget</button>
        </div>
      </div>
    ))}
    <div>
      <h2>Add New Category</h2>
      <input
        type="text"
        placeholder="Category Name"
        value={newCategory.name}
        onChange={(e) => setNewCategory({ name: e.target.value })}
      />
      <button onClick={handleAddCategory}>+ Add Category</button>
    </div>
  </div>
);
}};

export default Widget;
