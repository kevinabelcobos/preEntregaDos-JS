const Formulario = [new Nombre("Ramon")]
[new Apellido("Sanabria")]
[new email("ramonsanabria@gmail.com")]
[new telefono("43818934")]

function contacto() {
    const Formulario = ``;
    Formulario.foreach((Formulario) => {
        Formulario = Formulario + 
        `
      ${index+1} - ${Formulario.Nombre} : ${Formulario.descripcion} n/ 
        
        
        `
        

    }) 
    let opcion = prompt (Formulario);
}
Formulario();

