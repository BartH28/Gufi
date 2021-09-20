using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace senai_gufi_webAPI.ViewModels
{
    /// <summary>
    /// Modelo de uma funcionalidade ---- DTO -  Serve para tranferir dados sem valor semantico 
    /// </summary>
    public class LoginViewModel
    {
        [Required(ErrorMessage = "O Campo Email é obrigatorio")]
        public string Email { get; set; }
        [Required(ErrorMessage = "O Campo senha é obrigatorio")]
        public string Senha { get; set; }
    }
}
