package com.mestredahorta.ecomerce.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.cache.annotation.Cacheable;
//import org.springframework.data.domain.Page;
//import org.springframework.data.domain.Pageable;
//import org.springframework.data.domain.Sort.Direction;
//import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mestredahorta.ecomerce.model.produto;
import com.mestredahorta.ecomerce.repository.ProdutoRepository;



@RestController
@RequestMapping("/produtos")
@CrossOrigin("*")
public class ProdutoController {
	@Autowired
	private ProdutoRepository  repository ;
	
	
	@GetMapping
	public ResponseEntity<List<produto>> Getall(){
		return ResponseEntity.ok(repository.findAll());
	}
	
	
	/*
	@GetMapping
	@Cacheable(value = "listaProdutos")
	public Page<produto> listar (@PageableDefault(page = 0,
		size = 10, sort = "preco" ,direction = Direction.DESC) Pageable paginacao) {
		return repository.findAll(paginacao);
	}
	*/
	
	@GetMapping("/{id}")
	public ResponseEntity<produto> GetById(@PathVariable long id){
		return repository.findById(id).map(resp -> ResponseEntity.ok(resp)).orElse(ResponseEntity.notFound().build());				
	}
	
	
	@GetMapping("/nome/{nome}")
	public ResponseEntity<List<produto>> GetByNome(@PathVariable String nome){
		return ResponseEntity.ok(repository.findAllByNomeContainingIgnoreCase(nome));				
	}
	
	
	@PostMapping
	public ResponseEntity<produto> Post(@RequestBody produto produto){
		return ResponseEntity.ok(repository.save(produto));
	}
	
	@PutMapping
	public ResponseEntity<produto> Put(@RequestBody produto produto){
		return ResponseEntity.ok(repository.save(produto));
	}
	
	@DeleteMapping("/{id}")
	public void Delete(@PathVariable long id) {
		repository.deleteById(id);
	}
}
