import java.util.*;
public class HelloWorld{

     public static void main(String []args){
        System.out.println("Node World");
        
        BinaryTree tree = new BinaryTree(); 
        
        tree.add(new Node(5 ));
         tree.add(new Node(3 ));
          tree.add(new Node(1 ));
           tree.add(new Node(6 ));
         tree.printInorder(tree.root);
         System.out.println(" Common parent of 1, 6  "+tree.commonAncestor(tree.root, 1, 6 ));
        
     }
     
     
}
class BinaryTree {
    Node root ; 
    
    final static Stack<Integer> stacNode  = new Stack<>();
    final static List<Integer> list = new ArrayList<>();
    final static List<Integer> listA = new ArrayList<>(); 
    final static List<Integer> listB = new ArrayList<>(); 
    
    public int commonAncestor(Node node, int  a , int b){
            int  matchLeft = 0;
		     int  matchRight = 0;
		    boolean  foundOne = false;
		    boolean  foundTwo = false; 
		  
		  
		   if(node == null){
			   return -1;
		   }
           else if(node.val == a){
                  return a;
           }
           else if(node.val == b){
                  return b;
           }
		   //else if(node.val > a  ){
			   int valR  =0;
		    matchLeft = commonAncestor(node.left, a, b );
			/*
		     */
			matchRight = commonAncestor(node.right, a, b );
			   
			if (matchLeft != -1 && matchRight != -1 ){
					 valR =  node.val;
			}
		    else if (matchLeft != -1 && matchRight == -1 ){
					 valR =  matchLeft;
			}
			else if (matchRight != -1 && matchLeft == -1 ){
					 valR =  matchRight;
			}
				 
		    return valR;
			   	/*  listA.clear();
				  listA.add(a);listA.add(b);
				  if (listA.contains(matchLeft) && listA.contains(matchRight) ){
					    return node.val;
				  }
				  else ( listA.contains(matchLeft) && !listA.contains(matchRight)){
					  return matchLeft;
				  }
				  else (!listA.contains(matchLeft) && listA.contains(matchRight)) {
					  return matchRight;
				  }
			    */
			   
		 /*  }
		   else if (node.val < b ){
			    matchRight = commanAncestor(node.right, a, b );
				 listB.clear();
				  listB.add(a);listB.add(b);
				  if (listB.contains(matchRight) ){
					   foundTwo = true;
				  }
		   }
		   
	       */
            
            
    }
    
    /*public List<Integer> findPath(Node root , Node a ){
        
         if (root == null ) 
            return list; 
  
         if (root.val == a.val ){
             list.add(a.val);
             return list;
         }
        /* first recur on left child */
       // findPath(node.left , a); 
  
        /* then print the data of node */
      //  System.out.print(node.val + " "); 
      //  list.add(node.val);
  
        /* now recur on right child */
      //  findPath(node.right, a ); 
        
         
   /* } */
    
    public boolean add(Node b){
        if (b !=null && b.val !=-1){
            if ( root !=null ) {
                if (root.val > b.val ) {
                   root.left = addChild(root.left, b);
                }
                else if ( root.val < b.val ) {
                    root.right = addChild(root.right, b);
                }
            }
            else {
                  root = new Node();
                 root.val  = b.val; 
                
            }
           return true;
        }
        else {
            return false;
        }
      
    }
    
    private Node addChild(Node toAdd, Node elem){
         if ( toAdd != null ) {
             
            if (toAdd.val > elem.val ) {
                 toAdd.left =   addChild(toAdd.left, elem);
                 
             }
             else if ( toAdd.val < elem.val ) {
                 toAdd.right =   addChild(toAdd.right,elem);
              }
         }
         else {
                toAdd = new Node();
                toAdd.val  = elem.val; 
               
         }
          return toAdd;
    }
    
     /* Given a binary tree, print its nodes in inorder*/
    void printInorder(Node node) 
    { 
        if (node == null) 
            return; 
  
        /* first recur on left child */
        printInorder(node.left); 
  
        /* then print the data of node */
        System.out.print(node.val + " "); 
  
        /* now recur on right child */
        printInorder(node.right); 
    } 
      
}
class Node { 
    Node left , right ; 
    int val ; 
    
    public Node(int v){
        this.val = v;
    }
    public Node(){
        this.val = -1;
    }
}