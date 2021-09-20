using senai_gufi_webAPI.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace senai_gufi_webAPI.Interfaces
{
    interface IUsuarioRepository
    {
        /// <summary>
        /// Valida Usurio
        /// </summary>
        /// <param name="email">Recebe email a ser logado</param>
        /// <param name="senha">Recebe senha a ser logado</param>
        /// <returns></returns>

        Usuario Login(string email, string senha); 

    }
}
