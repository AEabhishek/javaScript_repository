class movies{
    constructor(hindi,english,kannada,tamil){
        this.hindi=hindi
    this.english=english
    this.kannada=kannada
    this.tamil=tamil

    }
    static a=78
    b=90
    static p=89




    static sample(){
        // console.log(this.a);  //acessing the variable from the static variable to static method
            console.log(v.b);      //acessing the non static variable to static method
        // console.log(this.p);  //acessing the variable from the static variable to static method


    
}
demo(){
    // console.log(this.b); //calling nonstatic variable to the non static method
    // console.log(movies.p);  //calling static to non static method
    

}

time(){
    // console.log(movies.p);
    // this.demo()  //calling non static method in non static method
    movies.sample()
}

    
}

let v = new movies("war","poc","mm","vedalum")
// console.log(v);
// console.log(v.hindi);
// movies.sample()  //calling static method 
// v.demo()  // calling non static method
v.time()





