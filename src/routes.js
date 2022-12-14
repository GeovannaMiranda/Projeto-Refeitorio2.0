import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Consulta from "./Components/ConsultaQRCode/consulta";
import Menu from "./Components/MenuSuperior/menu";
import Inicio from "./Components/Cadastrar/inicio";
import GerarLista from "./Components/CPFInvalidos/gerarlistatxt";
import Menusuperior from "./Components/Menu/menusuperior";
import Teste from "./Components/GeraCpf/teste";
import TesteHelper from "./Components/GeraCpf/helper";


function AppRoutes(){
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact element={<Inicio/>}/>
                    <Route path="menu" element={<Menu/>} />
                    <Route path="/consulta" element={<Consulta/>}/>                 
                    <Route path="/gerarlista" element={<GerarLista/>}/>
                    <Route path="/menusup" element={<Menusuperior/>}/>
                    <Route path="/testeHelper" element={<TesteHelper/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default AppRoutes;