package com.example.demo.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.mapper.ModelMapper;
import com.example.demo.model.BookModel;
import com.example.demo.model.UserModel;

@CrossOrigin(origins = "*") 
@RestController

public class Controller {
	
private ModelMapper mapper;
	
	public Controller(ModelMapper mapper) {
		this.setMapper(mapper);
	}
	@GetMapping("/user/all")
	public List<UserModel> getUserProfileAll(){
		return mapper.getUserModel();
	}
	@GetMapping("/book/all")
	public List<BookModel> getBookListAll(){
		return mapper.getBookModel();
	}
	
	public void setMapper(ModelMapper mapper) {
		this.mapper=mapper;
	}

	
}
