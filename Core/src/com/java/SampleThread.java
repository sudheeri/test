package com.java;

import java.util.Scanner;

class SampleThread extends Thread {
	@Override
	public void run() {
		System.out.println("Hi!");
	}
	public static void main(String a[]){
		Scanner scan=new Scanner(System.in);
		int x=scan.nextInt();
		scan.close();
	Thread t1=new Thread();
		t1.start();
	}  
}
