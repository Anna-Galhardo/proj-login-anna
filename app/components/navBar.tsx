import "./navBar.css"

import Cookies from "js-cookie"; // Importamos a biblioteca
import router, { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
export default function NavBar(){
     const router = useRouter();
    const [nome, setNome] = useState("");


    useEffect(() => {
        const userName = Cookies.get("userName");
       
        if (userName) {
            setNome(userName);
        } else {
            // Caso o cookie suma por algum motivo, volta para o login
            router.push("/");
        }
    }, [router]);


    function logout() {
        Cookies.remove("logged");
        Cookies.remove("userName");
        router.push("/");
    }


    return(
        
        <nav>
                <p>Seja bem-vindo {nome}</p>
                <div className="group-links">
                <a href="/dashboard/produtos">Produto</a>
                <a href="/dashboard">DashBord</a>
                <button className="btn" onClick={logout}> Sair</button>
                </div>
                
            
            </nav>
    ) ;
    
}
