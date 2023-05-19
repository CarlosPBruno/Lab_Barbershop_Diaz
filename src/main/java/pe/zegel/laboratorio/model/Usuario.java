package pe.zegel.laboratorio.model;

public class Usuario {
	private Integer id;
	private String correo;
	private String password;
	private Integer estado_id;
	
	public Usuario() {
		
	}
	
	public Usuario(Integer id, String correo, String password, Integer estado_id) {
		super();
		this.id = id;
		this.correo = correo;
		this.password = password;
		this.estado_id = estado_id;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getCorreo() {
		return correo;
	}
	public void setCorreo(String correo) {
		this.correo = correo;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public Integer getEstado_id() {
		return estado_id;
	}
	public void setEstado_id(Integer estado_id) {
		this.estado_id = estado_id;
	}
	
	
	
}
