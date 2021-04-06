package com.example.demo.model;

public class BookModel {
	
	private int bookId;
	private String title;
	private String image;
	private String author;
	private int price;
	private String publisher;
	private int pubdate;
	private int stock;
	private String subjects;
	private String className;
	private String professor;
	private int likeNum;
	
	public BookModel(int bookId, String title, String image, String author, int price, String publisher, int pubdate,
			int stock, String subjects, String className, String professor, int likeNum) {
		super();
		this.bookId = bookId;
		this.title = title;
		this.image = image;
		this.author = author;
		this.price = price;
		this.publisher = publisher;
		this.pubdate = pubdate;
		this.stock = stock;
		this.subjects = subjects;
		this.className = className;
		this.professor = professor;
		this.likeNum = likeNum;
	}
	public int getBookId() {
		return bookId;
	}
	public void setBookId(int bookId) {
		this.bookId = bookId;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public String getAuthor() {
		return author;
	}
	public void setAuthor(String author) {
		this.author = author;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	public String getPublisher() {
		return publisher;
	}
	public void setPublisher(String publisher) {
		this.publisher = publisher;
	}
	public int getPubdate() {
		return pubdate;
	}
	public void setPubdate(int pubdate) {
		this.pubdate = pubdate;
	}
	public int getStock() {
		return stock;
	}
	public void setStock(int stock) {
		this.stock = stock;
	}
	public String getSubjects() {
		return subjects;
	}
	public void setSubjects(String subjects) {
		this.subjects = subjects;
	}
	public String getClassName() {
		return className;
	}
	public void setClassName(String className) {
		this.className = className;
	}
	public String getProfessor() {
		return professor;
	}
	public void setProfessor(String professor) {
		this.professor = professor;
	}
	public int getLikeNum() {
		return likeNum;
	}
	public void setLikeNum(int likeNum) {
		this.likeNum = likeNum;
	}

}
