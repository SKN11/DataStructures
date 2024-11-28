public class SingletonClass {

public static  void  main(String[] args){
    Singleton s1 = Singleton.getSingletonObject();
    Singleton s2 = Singleton.getSingletonObject();
    System.out.println(s1==s2);
}

}


class Singleton{
    private static Singleton singletonObj = null ; // private static variable so that other classes will not modify the Singleton Object
    private Singleton(){
        //Due to this private constructor Child class creation is not possible saying "There is no default constructor available in 'Singleton"
    }

    public static Singleton getSingletonObject(){  //public factory method
        if(singletonObj==null){
            singletonObj = new Singleton();
            return singletonObj;
        }else{
            return singletonObj;
        }
    }
}


//class SingletonChild extends Singleton{
//
//}