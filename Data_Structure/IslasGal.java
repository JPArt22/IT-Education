import java.util.ArrayList;
import java.util.LinkedList;
import java.util.Scanner;

    public class Main {
        private static ArrayList<Integer> zonesArr= new ArrayList<>();
        private static ArrayList<Integer> inAns= new ArrayList<>();

        private static ArrayList<Integer> preAns= new ArrayList<>();
        private static ArrayList<Integer> posAns= new ArrayList<>();

        public static int inOrderArr(int ind, int a){
            if(ind*2<= zonesArr.size()){
                inOrderArr(ind*2,  a);
            }
            if(a==inAns.size()){return 0;}

            if(zonesArr.get(ind-1)!=-1)inAns.add(zonesArr.get(ind-1));

            if(ind*2+1<= zonesArr.size()){
                inOrderArr(ind*2+1,  a);
            }
            return 0;
        };
        public static int preOrderArr(int ind, int a){
            if(a==preAns.size()){return 0;}

            if(zonesArr.get(ind-1)!=-1)preAns.add(zonesArr.get(ind-1));

            if(ind*2<= zonesArr.size()){
                preOrderArr(ind*2,  a);
            }
            if(ind*2+1<= zonesArr.size()){
                preOrderArr(ind*2+1,  a);
            }
            return 0;
        };
        public static int posOrderArr(int ind, int a){
            if(ind*2<= zonesArr.size()){
                posOrderArr(ind*2,  a);
            }

            if(ind*2+1<= zonesArr.size()){
                posOrderArr(ind*2+1,  a);
            }

            if(a==posAns.size()){return 0;}

            if(zonesArr.get(ind-1)!=-1)posAns.add(zonesArr.get(ind-1));
            return 0;
        };


        public static void main(String[] args) {
            Scanner scanner= new Scanner(System.in);
            String zones= scanner.nextLine();
            Scanner zonesScan= new Scanner(zones);
            while(zonesScan.hasNextInt()){
                zonesArr.add(zonesScan.nextInt());
            }
            Integer a=scanner.nextInt();

inOrderArr(1,a);
preOrderArr(1,a);
posOrderArr(1,a);



int sIn, sPre,sPos;
            sIn= sPre=sPos=0;
            for(int i=0; i<a;i++){
                if(inAns.get(i)!=-1) sIn+=inAns.get(i);
                if(preAns.get(i)!=-1)sPre+=preAns.get(i);
                if(posAns.get(i)!=-1)sPos+=posAns.get(i);
            }

if(sPre>= sIn && sPre>= sPos){
    System.out.print("Preorder "+sPre);

} else if (sIn> sPre && sIn>= sPos){
    System.out.print("Inorder "+sIn);


} else {

    System.out.print("Postorder "+sPos);

}







        }
    }

