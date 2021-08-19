    import java.io.*;  
    import java.net.*;  
    public class MyClient {  
    public static void main(String[] args) {  
    try{      
    Socket s=new Socket("localhost",6666);  
    DataOutputStream dout=new DataOutputStream(s.getOutputStream());  
	 DataInputStream biStr = new DataInputStream (new BufferedInputStream(System.in));
	  dout.writeUTF("Hello "); 
	 String texStr ="";
	  do{
		 
		 dout.writeUTF(texStr); 
	  } while(!(texStr =  biStr.readLine()).equals("stop"));
     
     dout.flush();  
     dout.close();  
     s.close();  
    }catch(Exception e){System.out.println(e);}  
    }  
    }  