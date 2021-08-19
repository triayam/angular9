    import java.io.*;  
    import java.net.*;  
    public class MyServer {  
    public static void main(String[] args){  
    try{  
    ServerSocket ss=new ServerSocket(6666);  
    Socket s=ss.accept();//establishes connection   
	 
    DataInputStream dis=new DataInputStream(s.getInputStream());  
    String  str=(String)dis.readUTF();  
	String  nStr = "";
	System.out.println(" str.indexOf(stop) "+str.indexOf("stop"));
	     while(str.indexOf("stop") == -1){
			if (!nStr.equals(str)) { 
				str=nStr.trim();
					System.out.println("message= "+str);
					
			 }
			     nStr=(String)dis.readUTF();
			  
		 }
    
      ss.close();  
    }catch(Exception e){System.out.println(e);}  
    }  
    }  