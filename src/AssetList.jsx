import React from 'react';

const assets = [
  { name: 'Acción A', quantity: 10, value: 150 },
  { name: 'Acción B', quantity: 5, value: 200 },
  { name: 'Cripto C', quantity: 2, value: 300 },
];

const AssetList = () => {
  return (
    <div className="w-full p-4">
      <h2 className="text-xl font-bold mb-4">Mis Activos</h2>
      <ul>
        {assets.map((asset, index) => (
          <li key={index} className="mb-2">
            {asset.name}: {asset.quantity} unidades - Valor: ${asset.value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AssetList;