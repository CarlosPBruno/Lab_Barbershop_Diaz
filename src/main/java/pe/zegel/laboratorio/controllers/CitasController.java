package pe.zegel.laboratorio.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/administradores")
public class CitasController {

	@GetMapping("/listar-administradores")
	public String index() {
		return "administrador/citas";
	}

}