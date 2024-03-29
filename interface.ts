// 接口:对公共方法,属性进行抽象
// 接口里的方法都是抽象方法,实现接口的类都必须实现接口里的方法
// 抽象告警
interface Alarm {
    alert(): void;
}
// 抽象声光告警
interface LightAlarm {
    lightAlarm(): void;
}
// 接口可多继承,接口可继承接口
interface CarAlarm extends Alarm, LightAlarm {
    alert(): void;
    lightAlarm(): void;
}
class Door { }
class SecurityDoor extends Door implements Alarm {
    alert(): void {
        console.log('SecurityDoor alarm');
    }
}
// 也可写成 class Car implements Alarm, LightAlarm,接口可多实现
class Car implements CarAlarm {
    lightAlarm(): void {
        console.log('Lights toggle');
    }
    alert(): void {
        console.log('Car alarm');
        this.lightAlarm();
    }
}

let s: SecurityDoor = new SecurityDoor();
s.alert();

let c: Car = new Car();
c.alert();

// 定义函数自身的属性方法
interface Counter {
    (start: number): string,
    interval: number,
    current: number,
    reset(): void,
    log(): void,
    add(): void
}
function getCounter(): Counter {
    let counter = <Counter>function (start: number) {
        counter.current = start;
        console.log(start);
    };
    counter.interval = 1;
    counter.current = 0;
    counter.reset = function (): void {
        this.current = 0;
    };
    counter.log = function (): void {
        console.log(this.current);
    }
    counter.add = function (): void {
        this.current += this.interval;
    }
    return counter;
}
let counter: Counter = getCounter();
counter(10);
counter.interval = 2;
counter.log();
counter.reset();
counter.add();
counter.log();