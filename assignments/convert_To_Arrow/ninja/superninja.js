class Ninja {
    constructor(name, health, speed, strength) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    sayName(){
        console.log(this.name);
    }
    showStats(){
        console.log( `Name: ${ this.name }, Health: ${ this.health }, Speed: ${ this.speed }, Strength: ${ this.strength }` );
    }
    drinkSake(){
        this.health += 10;
    }
}

const ninja1 = new Ninja('Toyoma', 4);
ninja1.sayName().showStats().drinkSake().showStats();
// ninja1.showStats();
// ninja1.drinkSake();
// ninja1.showStats();

// var land = new Land();
// land.setParams("500 sq ft").close().doorStatus().open().doorStatus();


class Sensei extends Ninja {
    constructor( name, health, speed, strength, wisdom ) {
        super( name, 200, 10, 10 );
        this.wisdom = 10;
    }
    speakWisdom(){
        super.drinkSake();
        console.log('a man of many wants, is an unhappy man... a man of few wants is always satisfied')
    }
}

const sensei1 = new Sensei('Splinter');
sensei1.sayName();
sensei1.showStats();
sensei1.speakWisdom();
sensei1.showStats();