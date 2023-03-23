class Box{
     
    constructor(x,y,w,h){
    //caracteristicas  === atributos
    var box_options ={
        isStatic: true
      };

    this.w = w;
    this.h = h;
    this.body = Bodies.rectangle(x,y, this.w,this.h,box_options)
    World.add(world, this.body)



    }


    // métodos  === o que ela faz 
show(){


rect(x,y,w,h)

}





}




