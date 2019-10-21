// 接口:对公共方法,属性进行抽象
// 接口里的方法都是抽象方法,实现接口的类都必须实现接口里的方法
// 抽象告警
interface Alarm{
    alert();
}
// 抽象声光告警
interface LightAlarm{
    lightAlarm();
}
// 接口可多继承,接口可继承接口
interface CarAlarm extends Alarm, LightAlarm{
    alert();
    lightAlarm();
}
class Door{}
class SecurityDoor extends Door implements Alarm{
    alert(){
        console.log('SecurityDoor alarm');
    }
}
// 也可写成 class Car implements Alarm, LightAlarm,接口可多实现
class Car implements CarAlarm{
    lightAlarm(){
        console.log('Lights toggle');
    }
    alert(){
        console.log('Car alarm');
        this.lightAlarm();
    }
}

let s: SecurityDoor = new SecurityDoor();
s.alert();

let c: Car = new Car();
c.alert();