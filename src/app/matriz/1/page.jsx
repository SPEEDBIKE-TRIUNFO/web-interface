'use client'
import { Logo } from "@/components/ui/logo";
import { useState } from "react";

const MAX_COLUMN = 16;
const MAX_LINE = 10;

export default function Matriz1() {

  const [matrix, setMatrix] = useState(Array(3).fill(Array(3).fill(0)));

  const [open, setOpen] = useState(false)
  const [nomeMapa, setNomeMapa] = useState("")
  const [elemento, setElemento] = useState("")
  const [coluna, setColuna] = useState(3); // Começando com 3 colunas
  const [line, setLine] = useState(3); // Começando com 3 linhas
  const [popup, setPopup] = useState(false)


  const [showIgnitionMap, setShowIgnitionMap] = useState(false)
  const [showInjectionMap, setShowInjectionMap] = useState(false)

  // Função chamada ao clicar no botão "Adicionar Coluna"
  const handleAddColumn = () => {
    if (coluna > MAX_COLUMN) {
      return;
    }
    const newMatrix = matrix.map(row => [...row, 0]); // Adiciona uma coluna em cada linha
    setMatrix(newMatrix);
    setColuna(prev => prev + 1);
  };

  // Função chamada ao clicar no botão "Adicionar Linha"
  const handleAddLine = () => {
    if (line > MAX_LINE) {
      return;
    }
    const newRow = Array(coluna).fill(0); // Cria uma nova linha com o mesmo número de colunas
    setMatrix([...matrix, newRow]); // Adiciona a nova linha à matriz
    setLine(prev => prev + 1);
  };

  // Função para atualizar o valor da célula da matriz
  const handleInputChange = (rowIndex, colIndex, value) => {
    const newMatrix = matrix.map((row, rIndex) =>
      row.map((col, cIndex) =>
        rIndex === rowIndex && cIndex === colIndex ? value : col
      )
    );
    setMatrix(newMatrix);
  };

  const handleDeleteLine = () => {
    if (line > 3) {
      const newMatrix = matrix.slice(0, -1);
      setMatrix(newMatrix);
      setLine(prev => prev - 1);
    }
  }

  const handleDeleteColumn = () => {
    if (coluna > 3) {
      const newMatrix = matrix.map(row => row.slice(0, -1));
      setMatrix(newMatrix);
      setColuna(prev => prev - 1);
    }
  }

  const handleClickMap = (mapType) => {
    if (mapType == "injection") {
      setShowIgnitionMap(false);
      setShowInjectionMap(true);
    }
    if (mapType == "ignition") {
      setShowInjectionMap(false)
      setShowIgnitionMap(true)
      console.log("Clicou em Ignição")
    }
  }

  return (
    <div>
      <header className="p-1">
        <Logo size={150} />
      </header >


      <div className="flex justify-center mb-1" >
        <div class="inline-flex rounded-md shadow-sm" role="group">
          <button type="button" class="px-4 py-2 text-sm font-medium text-gray-900
           bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10
           focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white
            dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
            onClick={() => handleClickMap("injection")}>
            Injeção
          </button>
          <button type="button" class="px-4 py-2 text-sm font-medium text-gray-900
           bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10
           focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white
            dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
            onClick={() => handleClickMap("ignition")}>
            Ignição
          </button>
        </div>
      </div>

      <hr />

      <h2 className="text-3xl text-center  mt-4 "> Mapa de {showIgnitionMap ? "Ignição" : "Injeção"} </h2>


      {/* <div className="flex mt-4 justify-center w-auto items-center align-middle text-cyan-800 pl-16">
        {matrix[0] && [...matrix[0]].reverse().map((_, colIndex) => (
          <a key={colIndex} style={{ textAlign: "center", width: 70 }}>
            {Number(10000 / (matrix[0].length - colIndex)).toFixed()}
          </a>
        ))}
      </div> */}





      <div className="flex flex-row justify-center">
        <div className="flex mt-4 justify-center w-auto items-center align-middle  border-2 rounded-md border-white border-radius-2xl text-cyan-800 p-2 " >
          
          
          <table>
            
              <tr className="flex flex-col">
                <th >
                {matrix[0] && matrix[0].map((_, colIndex) => (
                  <th key={colIndex} style={{  textAlign: "center", width: 60, }}>
                    {Number(12000 / ( coluna- (colIndex))).toFixed()}
                  </th>
                ))}
                </th>
              </tr>
            
            <tbody className="flex flex-col">
              {matrix.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  <td style={{ textAlign: "center", width: 70, fontWeight: "bold"}}>
                    {Number(100 / (matrix[0].length - rowIndex)).toFixed()}
                  </td>
                  {row.map((col, colIndex) => (
                    <td key={colIndex}>
                      <input
                        style={{ textAlign: "center", width: 65, height: 35, border: "1px solid black", fontSize: 15 }}
                        type="number"
                        value={col}
                        onChange={(e) => handleInputChange(rowIndex, colIndex, Number(e.target.value))}
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex flex-row justify-center items-center fixed bottom-0 left-0 right-0 w-full p-2 z-50 space-x-3">
        <div className="flex flex-col justify-center items-center mt-4">
          <button className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" onClick={handleAddLine}>Adicionar Linha</button>
          <button className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            onClick={handleDeleteLine}>Remover Linha</button>
        </div>

        <div className="flex flex-col justify-center items-center mt-4">
          <button className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" onClick={handleAddColumn}>Adicionar Coluna</button>
          <button className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            onClick={handleDeleteColumn}>Remover Coluna</button>
        </div>
      </div>

    </div>
  )
}