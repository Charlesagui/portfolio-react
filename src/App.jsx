import React from 'react';
import GraphComponent from './GraphComponent';
import AssetList from './AssetList';

const App = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Sección del gráfico */}
      <div className="flex-grow p-4">
        <GraphComponent />
      </div>
      {/* Sección de la lista de activos */}
      <div className="p-4 bg-white shadow-md">
        <AssetList />
      </div>
    </div>
  );
};

export default App;