'use client'
import { Logo } from "@/components/ui/logo";
import { use, useEffect, useState } from "react";
import ButtonGroup from "@/components/ui/tabMaps";


import Table from 'react-bootstrap/Table';
import { Upload } from "lucide-react";
import { useRouter } from "next/navigation";
import { getExistingMaps, saveMap } from "@/app/server/routes";

const MAX_COLUMN = 16;
const MAX_LINE = 10;

const TPS = 100;
const RPM = 12000;

export default function Matriz1() {

  const [columns, setColumns] = useState(3); // Começando com 3 colunas
  const [rows, setRows] = useState(3); // Começando com 3 linhas

  const [rowLabel, setRowLabel] = useState([]);
  const [columnLabel, setColumnLabel] = useState([]);

  const [tableData, setTableData] = useState(
    Array.from({ length: 3 }, () => Array(3).fill('0'))
  );


  const [currentMap, setCurrentMap] = useState("injection")

  const handleInputChange = (rowIndex, colIndex, value) => {
    // console.log(rowIndex, colIndex, value)
    const updatedTable = [...tableData];
    if (!updatedTable[rowIndex]) {
      updatedTable[rowIndex] = Array(columns).fill(0);
    }
    updatedTable[rowIndex][colIndex] = value;
    setTableData(updatedTable);
  };


  const addRow = () => {
    if (rows >= 10) {
      return;
    }

    setRows(rows + 1);
    setTableData([...tableData, Array(columns).fill('0')]);
  };

  useEffect(() => {
    let lastValue = 0;
    let myArray = [];

    let incremento = TPS / rows;

    for (let i = 0; i < rows; i++) {
      lastValue += incremento;
      myArray.push(lastValue.toFixed()); // Armazena os valores no array local
    }

    // Atualiza o estado uma única vez após o loop
    setRowLabel(myArray);

    // console.log(myArray);

  }, [rows]);


  useEffect(() => {
    let lastValue = 0;
    let myArray = [];

    let incremento = RPM / columns;

    for (let i = 0; i < columns; i++) {
      lastValue += incremento;
      myArray.push(lastValue.toFixed());
    }

    setColumnLabel(myArray);


  }, [columns]);





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
    setTableData(tableData.map(row => [...row, '0']));
  };

  const removeColumn = () => {
    if (columns > 3) {
      setColumns(columns - 1);
      setTableData(tableData.map(row => row.slice(0, -1)));
    }
  };

  const handleClickMap = (mapType) => {

    setCurrentMap(mapType);
  }

  const handleSaveMap = async () => {
    const dataToSend = {
      name: "mapa de teste",
      type: currentMap == "injection" ? "INJECTION" : "IGNITION",
      mapIndex: "1",
      data: JSON.stringify(tableData),// tableData,
      id_users: "1",
    }
    console.log(dataToSend);
    const serverResponse = await saveMap(dataToSend)

    if (serverResponse.status === 201) {
      console.log("mapa salvo")
    } else {
      // console.log("erro ao salvar mapa")
    }
  }

  useEffect(() => {
    const getMaps = async (currentMap) => {
      const response = await getExistingMaps(1, currentMap); //MAPA_1

      if (response.status === 200) {
        const data = await response.json();
        setRows(data.mapas[0].numberOfLines);
        setColumns(data.mapas[0].numberOfColumns);
        setTableData(JSON.parse(data.mapas[0].data));
      }
    }

    getMaps(currentMap);

  }, [currentMap])

  return (
    <div className="flex flex-col space-y-4">

      <div className="flex justify-items-start mb-1 w-full justify-between   bg-slate-700 p-2">
        <header className="p-1">
          <Logo size={150} />
        </header >

        <div className=" mr-10 gap-10  items-center flex flex-row">
          <button type="button" className="hover:text-[#94BA1D] "
            onClick={() => console.log("botao de logout")}>
            Configurações
          </button>

          <button type="button" className=""
            onClick={() => console.log("botao de logout")}>
            Sair
          </button>
        </div>
      </div>

      <div className="relative flex justify-center mb-1 flex-row">
        <div className="absolute left-4  ">
          <button
            onClick={() => handleSaveMap()}
            type="button"
            className="flex items-center text-white p-2 border border-red rounded-xl hover:bg-slate-700">
            Salvar Mapa
            <Upload size={20} className="ml-2" />
          </button>
        </div>
        <div className="flex">
          <ButtonGroup handleClickMap={handleClickMap} />
        </div>
      </div>


      <hr />

      <h2 className="text-3xl text-center  mt-4 "> Mapa de {currentMap == "injection" ? "Injecão" : "Ignição"} </h2>

      <div className="flex flex-row items-center space-y-4">
        <div>
          <a className="text-white p-2">TPS</a>
        </div>
        <div className="flex flex-col items-center space-y-4 overflow-x-auto w-auto ">
          <div>
            <p>RPM</p>
          </div>
          <div>
            <table className="min-w-full  table-auto border-collapse border">
              <thead>
                <tr>
                  <th className="border px-4 py-2">#</th>
                  {Array.from({ length: columns }).map((_, index) => (
                    <th key={index} className="border px-4 w-20 py-2">
                      {columnLabel[index]}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: rows }).map((_, rowIndex) => (
                  <tr key={rowIndex}>
                    <td className="border px-4 py-2">{rowLabel[rowIndex]}</td>
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
      </div>


      <div className="flex flex-row justify-center items-center fixed bottom-0 left-0 right-0 w-full p-2 z-50 space-x-3">

        <div className="flex flex-col justify-center items-center mt-4 gap-2">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={addRow}>
            Adicionar Linha
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={removeRow}>
            Remove Linha
          </button>
          {/* <Button.Add title="Adicionar Linha" onClick={() => console.log("teste")} />
          <Button.Delete title="Remover Linha" onClick={removeRow} />  */}
        </div>
        <div className="flex flex-col justify-center items-center mt-4 gap-2">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={addColumn}>
            Adicionar Coluna
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={removeColumn}>
            Remove Coluna
          </button>
          {/* <Button.Add title="Adicionar Coluna" onClick={addColumn} />
          <Button.Delete title="Remover Coluna" onClick={removeColumn} /> */}
        </div>
      </div>
    </div>
  )
}