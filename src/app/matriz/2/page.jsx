'use client'
import React, { useState } from 'react';

function DynamicTable() {
  // Estado para controlar o número de linhas e colunas
  const [rows, setRows] = useState(3);
  const [columns, setColumns] = useState(3);

  // Estado para armazenar os valores da tabela
  const [tableData, setTableData] = useState(
    Array.from({ length: 1 }, () => Array(3).fill(''))
  );

  // Função para atualizar o valor de uma célula
  const handleInputChange = (rowIndex, colIndex, value) => {
    console.log(rowIndex, colIndex, value)
    const updatedTable = [...tableData];
    if (!updatedTable[rowIndex]) {
        updatedTable[rowIndex] = Array(columns).fill('');
      }
    updatedTable[rowIndex][colIndex] = value;
    setTableData(updatedTable);
  };

  // Funções para aumentar ou diminuir linhas e colunas
  const addRow = () => {
    if (rows >= 10) {
      return;
    }
    setRows(rows + 1);
    setTableData([...tableData, Array(columns).fill('')]);
  };

  const removeRow = () => {
    if (rows > 3) {
      setRows(rows - 1);
      setTableData(tableData.slice(0, -1));
    }
  };

  const addColumn = () => {
    if (columns >= 16) {
      return;
    }
    setColumns(columns + 1);
    setTableData(tableData.map(row => [...row, '']));
  };

  const removeColumn = () => {
    if (columns > 3) {
      setColumns(columns - 1);
      setTableData(tableData.map(row => row.slice(0, -1)));
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Botões para controle */}
      <div className="flex space-x-2 mb-4">
        <button
          onClick={addRow}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Row
        </button>
        <button
          onClick={removeRow}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Remove Row
        </button>
        <button
          onClick={addColumn}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Column
        </button>
        <button
          onClick={removeColumn}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Remove Column
        </button>
      </div>

      {/* Tabela Responsiva */}
      <div className="flex flex-col overflow-x-auto w-auto">
        <table className="min-w-full  table-auto border-collapse border">
          <thead>
            <tr>
              <th className="border px-4 py-2">#</th>
              {Array.from({ length: columns }).map((_, index) => (
                <th key={index} className="border px-4 w-20 py-2">
                  {(12000/(columns - index)).toFixed()}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: rows }).map((_, rowIndex) => (
              <tr key={rowIndex}>
                <td className="border px-4 py-2">{(100/(rows-rowIndex)).toFixed()}</td>
                {Array.from({ length: columns }).map((_, colIndex) => (
                  <td key={colIndex} className="border px-4 py-2">
                    <input
                      type="number"
                      className="border w-full px-2 py-1 text-black"
                      value={tableData[rowIndex]?.[colIndex] || ''}
                      onChange={(e) =>
                        handleInputChange(rowIndex, colIndex, e.target.value)
                      }
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DynamicTable;
