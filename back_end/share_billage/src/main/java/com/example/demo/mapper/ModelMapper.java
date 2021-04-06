package com.example.demo.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import com.example.demo.model.BookModel;
import com.example.demo.model.UserModel;

@Mapper
public interface ModelMapper {
	@Select("select * from user")
	List<UserModel> getUserModel();
	
	@Select("select * from book")
	List<BookModel> getBookModel();
	
	
}