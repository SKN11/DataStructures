

public class CreateObject {

    public CreateObject(){
        System.out.println("Constructor Called");
    }

    public static void main(String[] args) {

        System.out.println("Hello");
        try {
            CreateObject c1 = new CreateObject();
            System.out.println(c1);
            CreateObject c2 = (CreateObject) Class.forName("CreateObject").newInstance();
            System.out.println(c2);
            CreateObject c3 = (CreateObject) c1.clone();
            System.out.println(c3);

        }catch(Exception e){
            System.out.println("Exception occured"+e);
        }

    }


}