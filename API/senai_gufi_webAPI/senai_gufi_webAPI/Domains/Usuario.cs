using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

#nullable disable

namespace senai_gufi_webAPI.Domains
{
    public partial class Usuario
    {
        public Usuario()
        {
            Presencas = new HashSet<Presenca>();
        }

        public int IdUsuario { get; set; }
        public int? IdTipoUsuario { get; set; }
        public string NomeUsuario { get; set; }

        [Required(ErrorMessage = "O Campo e-mail é obrigatorio")]
        public string Email { get; set; }
        [Required(ErrorMessage = "O Campo senha é obrigatorio")]
        [StringLength(10, MinimumLength = 3, ErrorMessage = "A senha deve ter de 3 a 10 caracteres!")]
        public string Senha { get; set; }

        public virtual TipoUsuario IdTipoUsuarioNavigation { get; set; }
        public virtual ICollection<Presenca> Presencas { get; set; }
    }
}
