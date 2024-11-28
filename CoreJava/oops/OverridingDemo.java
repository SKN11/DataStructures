package oops;


class Parent{
    private final void methodA(){
        System.out.println("Parent Void Method");
    }
}

class Child extends Parent{
    public final void methodA(){
        System.out.println("ChildVoid Method");
    }
}

public class OverridingDemo {
}
