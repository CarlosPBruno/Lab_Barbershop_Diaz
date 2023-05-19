package pe.zegel.laboratorio.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller 
@RequestMapping("/usuarios")
public class UsuarioController {
	
	@GetMapping("/listar-usuarios")
	public String index() {
		return "usuario/index";
	}

}
